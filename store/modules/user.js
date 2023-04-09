function getUserID(){
	return uni.getStorageSync('frontuserid')||JSON.stringify({})
}
export default {
	state:{
		userid:getUserID(),
	},
	mutations:{
		setuserid(state,id){
			state.userid=id
			uni.setStorageSync('frontuserid',id)
		},
		clearuserid(state){
			state.userid=''
		},
		inituserid(state){
			 state.userid = uni.getStorageSync('frontuserid')
		}
		// // 初始化登录状态
		// initUser(state){
		// 	let userInfo = uni.getStorageSync('userInfo')
		// 	if (userInfo) {
		// 		userInfo = JSON.parse(userInfo)
				
		// 		state.userInfo = userInfo
		// 		state.token = userInfo.token
		// 		state.loginStatus = true
		// 	}
		// },
		// // 登录
		// login(state,userinfo){
		// 	state.userInfo = userinfo
		// 	state.loginStatus = true
		// 	state.token = userinfo.token
		// 	// 持久化存储
			// uni.setStorageSync('userInfo',JSON.stringify(userinfo))
	// 	},
	// 	// 退出登录
	// 	logout(state){
	// 		state.userInfo = {}
	// 		state.loginStatus = false
	// 		state.token = null
	// 		uni.removeStorageSync('userInfo')
	// 	}
	}
}