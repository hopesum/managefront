<template>
		<view class="box">
			<view class="uni-margin-wrap">
				
				<!-- 自定义导航 -->
				<view class="d-flex a-center" style="height: 90rpx;width: 750rpx;">
			
			
					
					<!-- 中间 -->
					<view class="flex-1 bg-light rounded d-flex a-center text-light-muted ml-2" style="height: 65rpx; " @click="openSearch">
						<text class="iconfont icon-sousuo mx-2"></text>
						智能积木
					</view>
					<!-- 右边 -->
				<!-- 	<view style="width: 85rpx;" class="d-flex a-center j-center">
						<text class="iconfont icon-richscan_icon"></text>
					</view> -->
					<view style="width: 146rpx; " class="d-flex a-center j-center" @click="toaddress">
					<view class="address">
						<image src="../../static/font/地址.png" mode=""></image>
					</view>	
						<text>中原区</text>	
					</view>
				</view>

				
				<swiper class="swiper" circular :indicator-dots="indicatorDots" indicator-active-color="#ffffff" :autoplay="autoplay" :interval="interval"
					:duration="duration">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper1.png" alt="" mode="widthFix">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper3.jpg" alt="" mode="widthFix">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper2.png" alt="" mode="widthFix">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper4.jpg" alt="" mode="widthFix">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper5.jpg" alt="" mode="widthFix">
						</view>
					</swiper-item>
				</swiper>
			</view>
					
		</view>
		
</template>

<script>
	export default {
		data() {
			return {
				    indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500
			}
		},
		onLoad() {

		},
		methods:{
			openSearch(){
				console.log(666);
				uni.navigateTo({
					  url: '../search/search'
				});
				console.log(666);
			},
           toaddress(){
         uni.navigateTo({
      	  url: '../address/address'
          })	}
	},
	
	
	}
</script>

<style lang="scss">
	.box{
			
		
			.address{
			
			width:50rpx;
			height:50rpx;
			image{
				width: 100%;
				height:100%;
			}
			
		}
		
		
		.uni-margin-wrap {
				width: 690rpx;
				width: 100%;
			}
			.swiper {
				height: 280rpx;
				padding: 0 16rpx 16rpx 16rpx;
				
				
				
			}
			.swiper-item {
				display: block;
				height: 300rpx;
				line-height: 300rpx;
				text-align: center;
				image{
					width: 100%;
					height: 100%;
					border-radius: 8px;
				}
			}
		
	}

</style>
