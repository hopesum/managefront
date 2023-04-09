<template>
	<view class="content">
		<!-- <scroll-view scroll-x class="bg-white nav text-center d-flex">
			<view class="cu-item" :class="index==TabCur?'text-yellow cur':''" v-for="(item,index) in tab" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}   
			</view>
		</scroll-view> -->
	<!-- 	<scroll-view scroll-y class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-yellow cur':''"  @tap="tabSelect" >
				<view>待接单</view>  <view>已接单</view> 
			</view>
		</scroll-view> -->
		<view class="d-flex cu-item a-center j-center">
	<scroll-view scroll-x class="bg-white nav text-center d-flex">
			<view class="m-1" :style="isactive?'color:red':''" @click="clickbtnwait">待接单</view>
			<view class="m-1"  :style="!isactive?'color:red':''" @click="clickbtnover">已接单</view>
			</scroll-view>
		</view>
		<view v-if="TabCur==0">
			<view class="ad">
				<img src="../../imgs/333.gif"></img>
			</view>
			<view class="part" v-for="(item,index) of list" :key="index">
				<view class="par_scd qy-bg-red"  @click="jump_coupon">外卖单</view>
				<view class="part_01">
					<view class="pare_01_l ">{{item.consignee}}-{{item.phone}}</view>
					<view class="pare_01_r">尽快送达</view>
				</view>
				<view @click="jump_detail">
					<Process :title="item.deliverAddress" ></Process>
				</view>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-yellow round " style="background-color:#ff8464"  @click="jump_fill(item.orderNo)">抢单</button>
				</view>
			</view>
		</view>
		<view v-if="TabCur==1" class="margin-top-xs">
			<view class="ad">
				<img src="../../imgs/333.gif"></img>
			</view>
			<view class="part" v-for="(item,index) of overlist" :key="index">
				<view class="par_scd qy-bg-red">外卖单</view>
				<view class="part_01">
					<view class="">还剩45分钟送达</view>
					<view class="pare_01_r">{{item.phone}}</view>
				</view>
				<Process :title="item.deliverAddress"></Process>
				<view class="bbtn padding">
					<view class="flex flex-direction bbtn_10" >
						<button class="cu-btn  round" @click="jump_cancel(item.orderNo)" style="background-color:rgba(248,23,26,.6)">取消配送</button>
					</view>
					<view class=" flex flex-direction  bbtn_10" >
						<button class="cu-btn bg-yellow  round" @click="jump_deliver(item.orderNo)" style="background-color:rgba(25,222,22,.7)">配送完成</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Process from "@/components/qy/process.vue"
	export default {
		data() {
			return {
				tab:['待接单','已接单'],
				TabCur:0,
				list:[],
				overlist:[],
				isactive:true,
			}
		},
		components:{
			Process
		},
		onLoad() {
this.getData()
		},
		methods: {
			getData(){
			uni.request({
				url:'http://127.0.0.1:5000/order/getnostart',
				method:"GET",
				success:(res)=>{
					console.log(res.data.data,9638622)
					this.list=res.data.data
				}
			})	
			uni.request({
				url:'http://127.0.0.1:5000/order/getover',
				method:"GET",
				// data:{orderState:'派送中'},
				success:(res)=>{
					console.log(res.data.data,9638622)
					this.overlist=res.data.data
				}
			})
			},
			clickbtnwait(){
				this.TabCur = 0;
				this.isactive=true
				this.scrollLeft = 0
					this.getData()
			},
			clickbtnover(){
			this.isactive=false	
			this.TabCur = 1;
			this.scrollLeft = 60
				this.getData()
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			jump_cancel(no){
				uni.request({
					url:"http://127.0.0.1:5000/order/editorderstate",
					method:'POST',
					data:{orderNo:no,orderState:'已受理'},
					success:(res)=>{
						console.log(res,"真好")
						
					}
				})
				this.getData()
				uni.navigateTo({
					url: '../frontpersoncancel/frontpersoncancel'
				});
			},
			jump_deliver(no){
				uni.request({
					url:"http://127.0.0.1:5000/order/editorderstate",
					method:'POST',
					data:{orderNo:no,orderState:'已完成'},
					success:(res)=>{
						console.log(res,"真好")
						
					}
				})
				this.getData()
				// uni.navigateTo({
				// 	url: '../frontpersoncancel/frontpersoncancel'
				// });
				// uni.navigateTo({
				// 	url: '/horseman/deliver/deliver'
				// });
			},
			jump_detail(){
				uni.navigateTo({
					url: '/horseman/detail/detail'
				});
			},
			jump_coupon(){
				uni.navigateTo({
					url: '/horseman/coupon/coupon'
				});
			},
			jump_fill(no){
				uni.request({
					url:"http://127.0.0.1:5000/order/editorderstate",
					method:'POST',
					data:{orderNo:no,orderState:'配送中'},
					success:(res)=>{
						console.log(res,"真好")
						
					}
				})
				this.getData()
				// uni.navigateTo({
				// 	url: '/horseman/fill/fill'
				// });
			}
		}
	}
</script>

<style lang='scss'>
	.content {
		.ad{
			img{width: 100%;height: 100px;}
		}
		.part{background-color: #fff;padding: 5px 0 0;margin-bottom: 6px;
			.par_scd{color: #fff;display: inline-block;font-size: 12px;padding: 1px 10px 1px 10px;
			border-radius:0 10px 10px 0 ;}
			.part_01{display: flex;margin: 5px 10px;justify-content: space-between;border-bottom: 1px solid #FAFAFA;padding: 5px 0;
				.pare_01_l{color: #FB303C;font-weight: 600;font-size: 18px;}
			}
			.pare_01_r{color: #3F3F3F;font-size: 14px;}
		}
		.bbtn{display: flex;justify-content: space-between;
			.bbtn_10{width: 48%;}
		}
	}
</style>
