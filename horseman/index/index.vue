<template>
	<view class="content">
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-yellow cur':''" v-for="(item,index) in tab" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view v-if="TabCur==0">
			<view class="ad">
				<img src="@/imgs/7.jpg"></img>
			</view>
			<view class="part" v-for="(item,index) of list" :key="index">
				<view class="par_scd qy-bg-red"  @click="jump_coupon">商超单</view>
				<view class="part_01">
					<view class="pare_01_l ">¥5.6</view>
					<view class="pare_01_r">尽快送达</view>
				</view>
				<view @click="jump_detail">
					<Process ></Process>
				</view>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-yellow round "  @click="jump_fill">抢单</button>
				</view>
			</view>
		</view>
		<view v-if="TabCur==1" class="margin-top-xs">
			<view class="part" >
				<view class="par_scd qy-bg-red">商超单</view>
				<view class="part_01">
					<view class="">还剩45分钟送达</view>
					<view class="pare_01_r">#19</view>
				</view>
				<Process></Process>
				<view class="bbtn padding">
					<view class="flex flex-direction bbtn_10" >
						<button class="cu-btn  round" @click="jump_cancel">取消配送</button>
					</view>
					<view class=" flex flex-direction  bbtn_10" >
						<button class="cu-btn bg-yellow  round" @click="jump_deliver">取货拍照并离店</button>
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
				list:[1,2,3,4]
			}
		},
		components:{
			Process
		},
		onLoad() {

		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			jump_cancel(){
				uni.navigateTo({
					url: '/horseman/cancel/cancel'
				});
			},
			jump_deliver(){
				uni.navigateTo({
					url: '/horseman/deliver/deliver'
				});
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
			jump_fill(){
				uni.navigateTo({
					url: '/horseman/fill/fill'
				});
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
