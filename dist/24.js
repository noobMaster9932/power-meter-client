(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(e,t,a){"use strict";a.r(t);var n,r=a(6),i=a.n(r),c=a(0),l=a.n(c),o=a(23),u=a(2),d=a.n(u),s=a.p+"assets/img/edit.27b08c3a614f94b656fec54d12c223d0.png",m=a.p+"assets/img/cancel.db8cfe06aa9e77abc2c929b8e64950d5.png",E=a.p+"assets/img/check.53a1b8c51eb1dd45ee4648f52e083cd9.png",f=function(e){var t=e.onEdit,a=e.onDiscard,n=e.onSave;return e.inEdit?l.a.createElement(c.Fragment,null,l.a.createElement("img",{style:{marginRight:15,width:15,height:15},onClick:a,src:m}),l.a.createElement("img",{onClick:n,src:E})):l.a.createElement("img",{src:s,onClick:t})},p=f;f.propTypes=(n={onEdit:d.a.func,inEdit:d.a.bool,onSave:d.a.func},i()(n,"onEdit",d.a.func),i()(n,"onDiscard",d.a.func),n);var g=function(e){var t=e.inEdit,a=e.value,n=e.onChangeDataItem,r=e.dataItem,i=e.field;return t?l.a.createElement("input",{type:"number",value:a,onChange:function(e){var t=parseFloat(e.target.value),a=isNaN(t)?0:t;n({field:i,value:a,dataItem:r})}}):a},b=g;g.propTypes={inEdit:d.a.bool,onChangeDataItem:d.a.func,value:d.a.any,field:d.a.string};a(721);var v,h=a(40);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var y=function(e){var t=e.dataTable,a=e.onClickEdit,n=e.onChangeDataItem,r=e.onDiscard,i=e.onSaveDataItem;return l.a.createElement(c.Fragment,null,l.a.createElement("h2",{className:"settings-title"},"Dashboard Settings"),l.a.createElement("div",{className:"table-settings"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",{className:"table-header"},l.a.createElement("th",{style:{width:100,textAlign:"center"}},"Actions"),l.a.createElement("th",{style:{width:295}},"Parameter"),l.a.createElement("th",null,"Min. Value"),l.a.createElement("th",null,"Max. Value")),t.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{style:{textAlign:"center"}},l.a.createElement(p,{inEdit:e.inEdit,onEdit:function(){return a(e)},onDiscard:function(){return r(e)},onSave:i})),l.a.createElement("td",null,e.title),l.a.createElement("td",null,l.a.createElement(b,{inEdit:e.inEdit,value:e.min_value,onChangeDataItem:n,field:"min_value",dataItem:e})),l.a.createElement("td",null,l.a.createElement(b,{inEdit:e.inEdit,value:e.max_value,onChangeDataItem:n,field:"max_value",dataItem:e})))}))))))},O={onClickEdit:h.e.onClickEdit,onDiscard:h.e.onDiscard,onChangeDataItem:h.e.onChangeDataItem,onSaveDataItem:h.e.onSaveDataitem};t.default=Object(o.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.settingsReducer)}),O)(y);y.propTypes=(v={dataTable:d.a.array,onClickEdit:d.a.func,onDiscard:d.a.func},i()(v,"onDiscard",d.a.func),i()(v,"onSaveDataItem",d.a.func),v)},721:function(e,t,a){}}]);