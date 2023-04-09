<template>
		<view class="box">
			<view class="uni-margin-wrap">
				
				<!-- 自定义导航 -->
				<view class="d-flex a-center" style="height: 90rpx;width: 750rpx;">
			
			
					
					<!-- 中间 -->
					<view class="flex-1 bg-light rounded d-flex a-center text-light-muted ml-2" style="height: 65rpx; " @click="openSearch">
						<text class="iconfont icon-sousuo mx-2"></text>
						美食广场
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
				
				
				<!-- 首页分类 -->	
			<!-- 首页分类 -->
			<index-nav :resdata="list" />
			<divider />
			
			<!-- 公共列表组件 750 - 5 = 745   372.5-->
			<view class="row j-sb">
				<block v-for="(item,index) in goodinfo" :key="index">
					<common-list :item="item" :index="index" />
				</block>
			</view>
		</view>
		
</template>

<script>
	import commonList from "@/components/common/common-list.vue"
	import indexNav from "@/components/index/index-nav.vue"
	export default {
		components:{
			indexNav,commonList
		},
		data() {
			return {
				    indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500,
							list:[
								{src:'../../static/images/foods/汉堡.png',
								text:"鸡肉汉堡"},
								{src:'../../static/images/foods/拌凉面.png',
								text:"凉拌面"},
								{src:'../../static/images/foods/饼夹菜.png',
								text:"饼夹菜"},
								{src:'../../static/images/foods/串串香.png',
								text:"串串香"},
								{src:'../../static/images/foods/蛋糕.png',
								text:"蛋糕"},
								{src:'../../static/images/foods/蔬菜沙拉.png',
								text:"蔬菜沙拉"},
								{src:'../../static/images/foods/麻辣烫.png',
								text:"麻辣烫"},
								{src:'../../static/images/foods/奶昔.png',
								text:"奶昔"},
								{src:'../../static/images/foods/臭豆腐.png',
								text:"臭豆腐"},
								{src:'../../static/images/foods/香酥炸鸡块.png',
								text:"炸鸡块"},
								
							],
							goodinfo:[],
			}
		},
		onLoad() {
        uni.request({
			url:"http://127.0.0.1:5000/goods/list",
			data:{
				currentPage:1,
				pageSize:10000
			},
			success:(res)=>{
				console.log(res);
				this.goodinfo=res.data.data
			}
		})
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
      	  url: '../showaddress/showaddress'
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
