(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{2482:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"box"},[a("uni-section",{attrs:{title:"欢迎您",type:"line"}},[a("v-uni-view",{staticClass:"example"},[a("uni-forms",{ref:"customForm",attrs:{rules:t.customRules,modelValue:t.customFormData}},[a("uni-forms-item",{attrs:{label:"账号",required:!0,name:"account"}},[a("uni-easyinput",{staticStyle:{borderColor:"'#ff6543'"},attrs:{placeholder:"请输入账号"},model:{value:t.customFormData.account,callback:function(e){t.$set(t.customFormData,"account",e)},expression:"customFormData.account"}})],1),a("uni-forms-item",{attrs:{label:"密码",required:!0,name:"password"}},[a("uni-easyinput",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.customFormData.password,callback:function(e){t.$set(t.customFormData,"password",e)},expression:"customFormData.password"}})],1),a("uni-forms-item",{attrs:{label:"类型",required:!0,name:"type"}},[a("v-uni-view",{staticClass:"checkclass"},[a("uni-data-checkbox",{attrs:{localdata:t.types},model:{value:t.customFormData.type,callback:function(e){t.$set(t.customFormData,"type",e)},expression:"customFormData.type"}})],1)],1)],1),a("v-uni-button",{staticClass:"main-bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit("customForm")}}},[t._v("登录")])],1)],1),a("v-uni-view",{staticClass:"register"},[t._v("还没有账号?"),a("v-uni-text",{staticClass:"regi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoregister.apply(void 0,arguments)}}},[t._v("立即注册")])],1)],1)},n=[]},"2dcc":function(t,e,a){"use strict";var o=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(a("5530")),n=o(a("f4d8")),u=o(a("e86f")),r=o(a("153a")),i=o(a("1dd0")),c=o(a("3710")),l=o(a("ab8e")),d=o(a("2f00")),f=o(a("5c29")),m=a("26cb"),p={components:{uniForms:c.default,uniCard:i.default,uniFormsItem:l.default,uniSection:r.default,uniEasyinput:u.default,uniSegmentedControl:n.default,uniDataCheckbox:f.default,uniDatetimePicker:d.default},data:function(){return{types:[{text:"商家",value:1},{text:"顾客",value:2},{text:"外卖员",value:3}],customFormData:{account:"",password:"",type:""},customRules:{account:{rules:[{required:!0,errorMessage:"账号不能为空"}]},password:{rules:[{required:!0,errorMessage:"密码不能为空"}]},type:{rules:[{required:!0,errorMessage:"请选择类型"}]}}}},computed:{},onLoad:function(){},onReady:function(){this.$refs.customForm.setRules(this.customRules)},methods:(0,s.default)((0,s.default)({},(0,m.mapMutations)(["setuserid"])),{},{submit:function(t){var e=this;this.$refs[t].validate().then((function(t){console.log("success",t);var a=t;uni.showToast({title:"校验通过",success:function(t){uni.request({url:"http://127.0.0.1:5000/frontuser/frontcheckLogin",data:a,method:"POST",success:function(t){if(0==t.data.code){var a=JSON.parse(JSON.stringify(t.data.data[0]));e.setuserid(a.id),console.log(a,333),uni.setStorage({key:"frontuserinfo",data:a,success:function(){console.log("success保存用户信息成功")}}),"外卖员"==t.data.role?uni.navigateTo({url:"../aboutperson/aboutperson"}):(console.log(t,996),uni.switchTab({url:"/pages/index/index"}),uni.showToast({title:t.data.msg}))}else uni.showToast({title:t.data.msg})}})}})})).catch((function(t){console.log("err",t)}))},gotoregister:function(){console.log(86451),uni.navigateTo({url:"../register/register"})}})};e.default=p},6163:function(t,e,a){"use strict";a.r(e);var o=a("2482"),s=a("727d");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("d9e4");var u,r=a("f0c5"),i=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"49408714",null,!1,o["a"],u);e["default"]=i.exports},"63a1":function(t,e,a){var o=a("82c0");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=a("4f06").default;s("c7ddfcba",o,!0,{sourceMap:!1,shadowMode:!1})},"727d":function(t,e,a){"use strict";a.r(e);var o=a("2dcc"),s=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a},"82c0":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".example[data-v-49408714]{padding:15px;background-color:#fff}.register[data-v-49408714]{position:relative;left:%?400?%;font-size:13px;color:#ccc}.regi[data-v-49408714]{margin-left:%?10?%;color:#000;font-size:14px}.checkclass[data-v-49408714]{margin-top:7px}",""]),t.exports=e},d9e4:function(t,e,a){"use strict";var o=a("63a1"),s=a.n(o);s.a}}]);