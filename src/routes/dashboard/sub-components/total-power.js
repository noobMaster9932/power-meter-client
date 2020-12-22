import React, { Fragment, useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { ResponsiveLine } from '@nivo/line'

import { dashboardActions } from '../../../redux/actions'
import { Card, CardBody, Cardheader } from '../../../components/card'
import { useHistory } from 'react-router-dom'
import { generalChartProperties } from '../../../utils/general-chart-properties'

const TotalPower = ({ getData, data }) => {
  const history = useHistory()
  const [localData, setLocalData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    setLocalData([{ id:'A', data:data.power.timeSeries }])
  }, [data.power.timeSeries])
  return (
    <Fragment>
      <Card
        height={400}
        width={'calc(50vw - 250px)'}
        style={{ marginBottom:20 }}
      >
        <Cardheader onClick={() => history.push('/power')} style={{ cursor:'pointer' }}>Total Active Power</Cardheader>
        <CardBody>
          <div style={{ height:300 }}>
            <ResponsiveLine
              {...generalChartProperties}
              data={localData}
              axisLeft={{ 
                tickRotation:-20, 
                legend:'Power (kW)', 
                legendPosition: 'middle',
                legendOffset: -60, 
              }}
              axisBottom={{
                format: '%H:%M',
                tickRotation:-41,
                tickValues: 'every 15 minutes',
              }}
              sliceTooltip={({ slice }) => {
                return (
                  <div
                    style={{
                      background: 'white',
                      padding: '9px 12px',
                      border: '1px solid #ccc',
                      color:'black',
                      borderRadius:5
                    }}
                  >
                    {slice.points.map(point => (
                      <Fragment key={point.id}>
                        <div>Date: {moment(point.data.xFormatted).format('DD-MM-YYYY HH:mm:ss')}</div>
                        <div>Power: {point.data.yFormatted} kW</div>
                      </Fragment>
                    ))}
                  </div>
                )
              }}
            />
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}
const mapStateToProps = s =>({
  ...s.dashboardReducer
})
const mapDispatchToProps = {
  getData:dashboardActions.getDataPower
}
export default connect(mapStateToProps, mapDispatchToProps)(TotalPower)
TotalPower.propTypes = {
  getData:propTypes.func,
  data:propTypes.object
}