<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center animated fadeIn faster" style="height: 320rpx;">
			<loading-plus v-if="beforeReady"></loading-plus>
			
			<!-- 消息列表 -->
			<view @click="tomessage"
			class="iconfont icon-xiaoxi position-absolute text-white" 
			style="font-size: 50rpx;top: 75rpx;right: 20rpx;z-index: 100;"
			></view>
			
			<image src="../../static/images/bg.jpg" style="height: 320rpx;width: 100%;"></image>
			
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx;">
					
					<image :src="loginStatus ? userInfo.avatar : '/static/images/demo/demo6.jpg'" style="height: 145rpx;width: 145rpx;border: 5rpx solid;" class="rounded-circle border-light ml-4"></image>
						<view class="ml-2 text-white font-md"
						@click="openLogin">
							{{loginStatus ? userInfo.nickname : '登录/注册'}}
						</view>
			
					<view class="d-flex a-center j-center a-self-end ml-auto px-2" style="height: 70rpx;background: #FFD43F;color: #CC4A00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
						<view class="line-h iconfont icon-huangguan mr-1"></view>
						会员积分 0.00
					</view>
				</view>
			</view>
			
			<!-- 图标分类 -->
			<card>
				<view slot="title" class="d-flex a-center j-sb w-100">
					<text class="font-md font-weight">我的订单</text>
					<view class="text-secondary font ml-auto" 
					@click="toorder">
						全部订单 <text class="iconfont icon-you font"></text>
					</view>
				</view>
				<view class="d-flex a-center">
					<view 
					class="flex-1 d-flex flex-column a-center j-center py-3"
					hover-class="bg-light-secondary"
					v-for="(item,index) in orders" :key="index"
					@click="toorder">
						<view class="iconfont font-lg line-h"
						:class="item.icon"></view>
						<view>{{item.name}}</view>
					</view>
				</view>
			</card>
			
			
			
		</view>
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	import card from "@/components/common/card.vue"
	export default {
		mixins:[loading],
		components: {
			card,
			
		},
		data() {
			return {
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
					name:"退款/售后",
					icon:"icon-wallet_icon"
				}]
				
			}
		},
		methods: {
			openLogin(){
				console.log("打开注册页面");
				uni.navigateTo({
					  url: '../login/login'
				});
			},
			tomessage(){
				console.log("跳转消息")
			},
			toorder(){
				console.log("跳转订单")
			}
			
		}
	}
</script>

<style>

</style>
