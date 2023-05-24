<template>
	<view>
		<card  headTitle="账号管理" bodyStyle="background:#ffffff;">
			<uni-list-item title="个人资料" @click="tomyinfo"></uni-list-item>
		</card>
		
		
		<card headTitle="关于" bodyStyle="background:#ffffff;">
			<uni-list-item :title="item.title" 
			v-for="(item,index) in list"
			:key="index" @click="navigate(item.path)"></uni-list-item>
		</card>
		
		
		<view class="p-3" >
			<button type="default" class="bg-white" @click="logoutEvent">退出登录</button>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import { mapMutations,mapState } from 'vuex'
	export default {
		components: {
			card,
			uniListItem
		},
		data() {
			return {
				list:[
					{ title:"关于店铺",path:"shop" },
					{ title:"意见反馈",path:"backface" },
					{ title:"协议规则",path:"" },
					{ title:"资质证件",path:"" },
					{ title:"用户协议",path:"" },
					{ title:"隐私政策",path:"" },
				]
			}
		},
		computed: {
			...mapState({
				token:state=>state.user.token,
				loginStatus:state=>state.user.loginStatus
			})
		},
		methods: {
			tomyinfo(){
				uni.navigateTo({
					url:'../myinfo/myinfo'
				})
			},
			...mapMutations(['logout','clearCart']),
			navigate(path){
				if (!path) return;
				uni.navigateTo({
					url: `../${path}/${path}`
				});
			},
			// 退出登录
			logoutEvent(){
				uni.clearStorage();
				uni.clearStorageSync();
			uni.navigateTo({
				url:"../login/login"
			})
				// this.$H.post('/logout',{},{
				// 	token:false,
				// 	toast:false
				// }).then(res=>{
				// 	// 退出登录
				// 	this.logout();
				// 	// 清空购物车
				// 	this.clearCart()
				// 	uni.showToast({
				// 		title: '退出成功',
				// 		icon: 'none'
				// 	});
				// 	uni.navigateBack({
				// 		delta: 1
				// 	});
				// })
			}
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
</style>
