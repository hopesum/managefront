(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{4712:function(e,a,t){"use strict";var o=t("6194"),s=t.n(o);s.a},"5db6":function(e,a,t){"use strict";t.r(a);var o=t("e891"),s=t("a4a1");for(var n in s)"default"!==n&&function(e){t.d(a,e,(function(){return s[e]}))}(n);t("4712");var i,r=t("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"b99dee5c",null,!1,o["a"],i);a["default"]=u.exports},6194:function(e,a,t){var o=t("d747");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=t("4f06").default;s("478cb992",o,!0,{sourceMap:!1,shadowMode:!1})},"7b3f":function(e,a,t){"use strict";var o=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=o(t("3710")),n=o(t("ab8e")),i=o(t("e86f")),r=o(t("8600")),u={components:{uniForms:s.default,uniEasyinput:i.default,uniFormsItem:n.default,softslAddressPicker:r.default},data:function(){return{baseFormData:{name:"",phone:"",address:"",province:"",city:"",county:"",village:""},userid:"",showss:!0,showLocation:!1,form:{area:""},rules:{area:[{required:!0,message:"请选择所在地区",trigger:["change","blur"]}]},show:!1,id:8,title:"map",latitude:39.909,longitude:116.39742,covers:[{latitude:39.909,longitude:116.39742,iconPath:"../../../static/location.png"},{latitude:39.9,longitude:116.39,iconPath:"../../../static/location.png"}]}},methods:{openaddress:function(){this.showLocation=!0},submitForm:function(){var e=this.baseFormData,a=e.name,t=e.phone,o=e.province,s=e.city,n=e.county,i=e.village,r={name:a,phone:t,province:o,city:s,county:n,village:i,userid:this.userid};uni.request({url:"http://127.0.0.1:5000/frontaddress/addaddress",method:"POST",data:r,success:function(e){console.log("sss",e),uni.showToast({title:e.data.msg,success:function(){uni.navigateTo({url:"../showaddress/showaddress"})}})}}),console.log(r,886)},confirmdq:function(e){var a=this;console.log(985211,e);var t=JSON.parse(JSON.stringify(e.names));this.baseFormData.province=e.names[0],this.baseFormData.city=e.names[1],this.baseFormData.county=e.names[2],this.baseFormData.village=e.names[3],console.log(t,999);var o=t.join();console.log(o,888),this.baseFormData.address=o,this.showLocation=!1,console.log(this.baseFormData,9866),uni.getStorage({key:"frontuserinfo",success:function(e){a.userid=e.data.id,console.log(a.userid,360)}})},change:function(){this.show=!0},confirm:function(e){this.form.area=e.province.label+e.city.label+e.area.label}}};a.default=u},a4a1:function(e,a,t){"use strict";t.r(a);var o=t("7b3f"),s=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,(function(){return o[e]}))}(n);a["default"]=s.a},d747:function(e,a,t){var o=t("24fb");a=o(!1),a.push([e.i,'.addressbtn[data-v-b99dee5c]{position:relative;left:0;top:0;width:100%;padding:%?10?%;height:%?88?%;line-height:%?88?%;background-color:"#FF6347"}.box[data-v-b99dee5c]{padding:10px}',""]),e.exports=a},e891:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return o}));var o={softslAddressPicker:t("8600").default},s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"box"},[t("uni-forms",{ref:"baseForm",attrs:{modelValue:e.baseFormData}},[t("uni-forms-item",{attrs:{label:"姓名",required:!0}},[t("uni-easyinput",{attrs:{placeholder:"请输入收货姓名"},model:{value:e.baseFormData.name,callback:function(a){e.$set(e.baseFormData,"name",a)},expression:"baseFormData.name"}})],1),t("uni-forms-item",{attrs:{label:"电话",required:!0}},[t("uni-easyinput",{attrs:{placeholder:"请输入手机号码"},model:{value:e.baseFormData.phone,callback:function(a){e.$set(e.baseFormData,"phone",a)},expression:"baseFormData.phone"}})],1),t("uni-forms-item",{attrs:{label:"地址",required:!0}},[t("uni-easyinput",{attrs:{placeholder:"请输入收货地址"},on:{focus:function(a){arguments[0]=a=e.$handleEvent(a),e.openaddress.apply(void 0,arguments)}},model:{value:e.baseFormData.address,callback:function(a){e.$set(e.baseFormData,"address",a)},expression:"baseFormData.address"}})],1)],1),t("v-uni-button",{on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.submitForm.apply(void 0,arguments)}}},[e._v("保存")]),t("softsl-address-picker",{attrs:{show:e.showLocation},on:{confirm:function(a){arguments[0]=a=e.$handleEvent(a),e.confirmdq.apply(void 0,arguments)},cancel:function(a){arguments[0]=a=e.$handleEvent(a),e.showLocation=!1}}})],1)},n=[]}}]);