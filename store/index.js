import Vue from "vue"
import Vuex from "vuex"

import cart from "@/store/modules/cart.js"
import path from "@/store/modules/path.js"
import user from "@/store/modules/user.js"
import like from "@/store/modules/like.js"
// import VueXAlong from 'vuex-along'
Vue.use(Vuex)

export default new Vuex.Store({
	strict: false,
	modules: {
		cart,
		path,
		user,
		like
	}
	// ,
	// plugins: [VueXAlong({
	//         name: 'along',     //存放在localStroage或者sessionStroage 中的名字
	//         local: {list:['userid']},      //是否存放在local中  false 不存放 如果存放按照下面session的配置配
	//         // session: { list: [] }   
	//         //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
	//       })]
})
