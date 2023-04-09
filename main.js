import App from './App'

import store from "./store"

Vue.prototype.$store = store


import loadingPlus from "@/common/mixin/loading-plus.vue"
Vue.component('loading-plus',loadingPlus)

// main.js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 创建事件总线   就相当于创建了一个新的vue实例
const bus = new Vue()
// 把bus挂载到了Vue的原型上, 保证所有的组件都能通过 this.$bus访问到事件总线
Vue.prototype.$bus = bus


// 引入全局组件
import divider from "@/components/common/divider.vue"
Vue.component('divider',divider)
// 引入全局加载动画
import loading from "@/components/common/loading.vue"
Vue.component('loading',loading)




// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	  store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
	  store,
    app
  }
}
// #endif