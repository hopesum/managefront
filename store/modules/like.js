export default{
	state:{
		// likegoods:[]	
	},
	getters:{},
	mutations:{
	// addlike(state,goodinfo){
		
		
	// 	state.likegoods.push(goodinfo)
	// },
	// 	dellike(state,newlike){
		
			
	// 	}
	},
	actions:{
		ADDLIKE({commit},params){
			uni.request({
				url:'http://127.0.0.1:5000/frontlike/addlike',
				data:params,
				method:'POST',
				success:(res)=>{
					if(res.data.code==0){
						uni.showToast({
							title:res.data.msg
						})
					}
				}
				
			})
		},
		DELLIKE({commit},params){
			uni.request({
				url:'http://127.0.0.1:5000/frontlike/dellike',
				data:params,
				method:'GET',
				success:(res)=>{
					if(res.data.code==0){
						uni.showToast({
							title:res.data.msg
						})
					}
				}
				
			})
			
		},
		GETLIKE({commit},params){
			uni.request({
				url:'http://127.0.0.1:5000/frontlike/getuserlike',
				data:params,
				method:'GET',
				success:(res)=>{
					if(res.data.code==0){
						uni.showToast({
							title:res.data.msg
						})
					}
				}
				
			})
			
		}
		
	}
}