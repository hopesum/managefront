(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-frontpersonfill-frontpersonfill"],{"11c9":function(t,i,a){"use strict";a.r(i);var n=a("1b55"),s=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,(function(){return n[t]}))}(e);i["default"]=s.a},"1b55":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{numList:[{name:"实名认证"},{name:"申请类型"},{name:"现场培训"}],num:0,radio:"A",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}]}},methods:{radioChange:function(){},NumSteps:function(){this.num=this.num==this.numList.length-1?0:this.num+1}}};i.default=n},"1ef8":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fill .pic[data-v-f1695d34]{display:flex;flex-wrap:wrap;justify-content:space-between}.fill .pic .pic_01[data-v-f1695d34]{width:46%;text-align:center;padding-bottom:5px;line-height:25px}.fill .pic .pic_01 img[data-v-f1695d34]{width:100%;height:120px;border-radius:5px;box-shadow:0 0 5px #ededed}',""]),t.exports=i},"1fff":function(t,i,a){t.exports=a.p+"static/img/shen.c02957ad.png"},"46d6":function(t,i,a){"use strict";var n=a("b8d1"),s=a.n(n);s.a},b8d1:function(t,i,a){var n=a("1ef8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("6c656e78",n,!0,{sourceMap:!1,shadowMode:!1})},fd4a:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return e})),a.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"fill"},[n("v-uni-view",{staticClass:"bg-white padding margin-bottom-sm",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.NumSteps.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-steps"},t._l(t.numList,(function(i,a){return n("v-uni-view",{key:a,staticClass:"cu-item",class:a>t.num?"":"text-blue"},[n("v-uni-text",{staticClass:"num",attrs:{"data-index":a+1}}),t._v(t._s(i.name))],1)})),1)],1),n("v-uni-view",{staticClass:"bg-white margin-bottom-sm"},[n("v-uni-view",{staticClass:"cu-form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("姓"),n("span",{staticClass:"padding-left padding-right"}),t._v("名")]),n("v-uni-input",{attrs:{placeholder:"请输入",name:"input"}})],1),n("v-uni-view",{staticClass:"cu-form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("性"),n("span",{staticClass:"padding-left padding-right"}),t._v("别")]),n("v-uni-view",[n("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.radioChange.apply(void 0,arguments)}}},[n("v-uni-radio",{staticClass:"radio",attrs:{name:"name1",checked:"A"==t.radio,value:"A"}}),t._v("男"),n("span",{staticClass:"padding-left"}),n("v-uni-radio",{staticClass:"radio",attrs:{name:"name1",checked:"B"==t.radio,value:"B"}}),t._v("女")],1)],1)],1),n("v-uni-view",{staticClass:"cu-form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("申请业务")]),n("v-uni-view",[n("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.radioChange.apply(void 0,arguments)}}},[n("v-uni-radio",{staticClass:"radio",attrs:{name:"name1",checked:"A"==t.radio,value:"A"}}),t._v("外卖"),n("span",{staticClass:"padding-left-sm"}),n("v-uni-radio",{staticClass:"radio",attrs:{name:"name1",checked:"B"==t.radio,value:"B"}}),t._v("代驾"),n("span",{staticClass:"padding-left-sm"}),n("v-uni-radio",{staticClass:"radio",attrs:{name:"name1",checked:"B"==t.radio,value:"B"}}),t._v("货运"),n("span",{staticClass:"padding-left-sm"}),n("v-uni-radio",{staticClass:"radio",attrs:{name:"name1",checked:"B"==t.radio,value:"B"}}),t._v("家政")],1)],1)],1),n("v-uni-view",{staticClass:"cu-form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("身份证号")]),n("v-uni-input",{attrs:{placeholder:"请输入",name:"input"}})],1),n("v-uni-view",{staticClass:"cu-form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("户籍所在地")]),n("v-uni-input",{attrs:{placeholder:"请输入",name:"input"}})],1)],1),n("v-uni-view",{staticClass:"pic bg-white padding"},[n("v-uni-view",{staticClass:"pic_01"},[n("img",{attrs:{src:a("1fff")}}),t._v("请上传身份证正面")]),n("v-uni-view",{staticClass:"pic_01"},[n("img",{attrs:{src:a("1fff")}}),t._v("请上传身份证反面")]),n("v-uni-view",{staticClass:"pic_01"},[n("img",{attrs:{src:a("1fff")}}),t._v("请上传手持身份证照片")]),n("v-uni-view",{staticClass:"pic_01"},[n("img",{attrs:{src:a("1fff")}}),t._v("请上传个人自拍照")])],1)],1)},e=[]},ff2a:function(t,i,a){"use strict";a.r(i);var n=a("fd4a"),s=a("11c9");for(var e in s)"default"!==e&&function(t){a.d(i,t,(function(){return s[t]}))}(e);a("46d6");var r,c=a("f0c5"),u=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"f1695d34",null,!1,n["a"],r);i["default"]=u.exports}}]);