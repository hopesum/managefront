<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center animated fadeIn faster" style="height: 320rpx;">
			<loading-plus v-if="beforeReady"></loading-plus>
			
			<!-- 消息列表 -->
			<view @click="toset"
			class="iconfont icon-icon_set_up position-absolute text-white" 
			style="font-size: 50rpx;top: 75rpx;right: 20rpx;z-index: 100;"
			></view>
			
			<image src="../../static/images/bg.jpg" style="height: 320rpx;width: 100%;"></image>
			
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx;">
					
					<image  v-if="!loginStatus" :src="'/static/images/demo/demo6.jpg'" style="height: 145rpx;width: 145rpx;border: 5rpx solid;" class="rounded-circle border-light ml-4" @click="openuserinfo"></image>
					<image v-if="loginStatus" :src="userInfo.imgUrl" style="height: 145rpx;width: 145rpx;border: 5rpx solid;" class="rounded-circle border-light ml-4" @click="openuserinfo"></image>
						<view class="ml-2 text-white font-md"
						v-if="!loginStatus" @click="openLogin">
							{{loginStatus ? userInfo.account : '登录/注册'}}
						</view>
						<view class="ml-2 text-white font-md"
						v-if="loginStatus" @click="openuserinfo">
							{{userInfo.account }}
						</view>
						
			
					<view class="d-flex a-center j-center a-self-end ml-auto px-2" style="height: 70rpx;background: #FFD43F;color: #CC4A00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
						<view class="line-h iconfont icon-huangguan mr-1"></view>
						会员积分 0.00
					</view>
				</view>
			</view>
			
			<!-- 图标分类 -->
			<card>
				<view slot="title" class="d-flex a-center j-sb w-100" @click="toorderlist">
					<view class="font-md font-weight" style="inline-block">我的订单</view>
					<view class="text-secondary font ml-auto" 
					>
						全部订单 <text class="iconfont icon-you font"></text>
					</view>
				</view>
				<view class="d-flex a-center">
				<!-- 	<view 
					class="flex-1 d-flex flex-column a-center j-center py-3"
					hover-class="bg-light-secondary"
					v-for="(item,index) in orders" :key="index"
					@click="toorderlist">
						<view class="iconfont font-lg line-h"
						:class="item.icon"></view>
						<view>{{item.name}}</view>
					</view> -->
				</view>
			</card>
			<divider></divider>
		<!-- 	<uni-list-item showExtraIcon leftIconStyle="color:#FDBF2E;"
			leftIcon="icon-VIP" title="小米会员"></uni-list-item>
			 -->
			<!-- <uni-list-item showExtraIcon leftIconStyle="color:#FCBE2D;"
			leftIcon="icon-huangguan" title="个人资料"></uni-list-item> -->
			<uni-list-item showExtraIcon leftIconStyle="color:#FA6C5E;"
			leftIcon="icon-xihuan" title="我的点赞" @click="openlike"></uni-list-item>
			<uni-list-item showExtraIcon leftIconStyle="color:#FE8B42;"
			leftIcon="icon-home" title="收获地址" @click="openaddress"></uni-list-item>
			<!-- <uni-list-item showExtraIcon leftIconStyle="color:#9ED45A;"
			leftIcon="icon-xiaoxi" title="问题反馈" @click="openfaceback"></uni-list-item> -->
			<uni-list-item showExtraIcon leftIconStyle="color:#9ED45A;" v-if="userInfo.type==1"
			leftIcon="icon-gengduo" title="更多功能" @click="openpersonlist"></uni-list-item>
			<divider></divider>
			<uni-list-item showExtraIcon leftIconStyle="color:#808C98;"
			leftIcon="icon-icon_set_up" title="更多设置" 
			@click="opensetpage"
			></uni-list-item>
			
			
		</view>
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	import card from "@/components/common/card.vue"
		import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		mixins:[loading],
		components: {
			card,
			uniListItem
			
		},
		data() {
			return {
				userInfo:'',
				loginStatus:'',
				orders:[{
					name:"待付款",
					icon:"icon-wallet_icon",
					index:1
				},{
					name:"待使用",
					icon:"icon-daishouhuo",
					index:2
				},{
					name:"待评价",
					icon:"icon-pinglun",
					index:3
				},{
					name:"退款",
					icon:"icon-wallet_icon"
				}]
				
			}
		},
		onShow() {
		uni.getStorage({
			key: 'frontuserinfo',
			success: (res) =>{
				this.loginStatus=true
				this.userInfo=res.data
				console.log(res.data,888);
				console.log(this.userInfo);
			},
			fail:(err)=>{
				this.loginStatus=false
				console.log(err);
			}
		});	
		},
		methods: {
			openpersonlist(){
				uni.navigateTo({
					url:'../frontpersonlist/frontpersonlist'
				})
			},
			toset(){
				uni.navigateTo({
					  url: '../user-set/user-set'
				});
			},
			openlike(){
				uni.navigateTo({
					  url: '../like-list/like-list'
				});
			},
			openfaceback(){
				uni.navigateTo({
					  url: '../backface/backface'
				});
			},
			openaddress(){
				uni.navigateTo({
					  url: '../showaddress/showaddress'
				});
			},
			opensetpage(){
				console.log("打开设置页面")
				uni.navigateTo({
					  url: '../user-set/user-set'
				});
			},
			openLogin(){
				console.log("打开注册页面");
				uni.navigateTo({
					  url: '../login/login'
				});
			},
			tomessage(){
				console.log("跳转消息")
			},
			toorderlist(){
				uni.navigateTo({
					url:'../myorderlist/myorderlist'
				})
			},
			openuserinfo(){
				console.log("进入个人信息");
			}
			
		}
	}
</script>

<style>

</style>
