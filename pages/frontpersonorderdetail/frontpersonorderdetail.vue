<template>
	<view  class="deliver">
		<view class="time qy-bg-white margin-bottom-sm">
			<view class="time_l ">
				<view class="time_l_01 qy-text-red">¥ <span>2.0</span></view>
				<view class="time_l_02">本单预计收入</view>
			</view>
			<view class="time_m"></view>
			<view class="time_l ">
				<view class="time_r_01 qy-text-red"><span>{{orderinfo.deliveryTime?orderinfo.deliveryTime.slice(11,16):'12:30'}}</span></view>
				<view class="time_r_02">预约送达时间</view>
			</view>
		</view>
		<view class="buzhou qy-bg-white margin-bottom-sm">
			<view class="bz margin-bottom">
				<view class="bz_l">
					<view class="bz_l_01">联系商家</view>
					<view class="bz_l_02 qy-text-grey">山河饼局-19838035004</view>
					<view class="bz_l_02 qy-text-grey">请先联系商家确定地址和时间</view>
				</view>
				<view class="bz_r">
					<button class="cu-btn round bg-yellow" @click="ontel()">一键拨号</button>
				</view>
			</view>
			<view class="bz margin-bottom">
				<view class="bz_l">
					<view class="bz_l_01">我已到达</view>
					<view class="bz_l_02 qy-text-grey">到达获取外卖后点击</view>
				</view>
				<view class="bz_r">
					<button class="cu-btn round bg-yellow" >我已到达</button>
				</view>
			</view>
			<view class="bz margin-bottom">
				<view class="bz_l">
					<view class="bz_l_01">拍照取物</view>
					<view class="bz_l_02 qy-text-grey">到达获取外卖后点击</view>
				</view>
				<view class="bz_r">
					<button class="cu-btn round lines-grey" >拍照取货</button>
				</view>
			</view>
			<view class="pic"></view>
		</view>
		<view class="mingxi qy-bg-white">
			<view class="mx">
				<view class="mx_l qy-text-grey">收货人名字:</view>
				<view class="mx_r">{{orderinfo.consignee?orderinfo.consignee:'孙女士'}}</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">订单号码:</view>
				<view class="mx_r">{{orderinfo.orderNo?orderinfo.orderNo:'10553'}}</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">预计送达:</view>
				<view class="mx_r">{{orderinfo.deliveryTime?orderinfo.deliveryTime:'2023-4-18'}}</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">备注信息:</view>
				<view class="mx_r">{{orderinfo.remarks?orderinfo.remarks:'无'}}</view>
			</view>
		</view>
		<view class="bbtn padding qy-bg-white">
			<view class="flex flex-direction bbtn_10" >
				<button class="cu-btn bg-yellow round" @click="jump_navigation">查看导航</button>
			</view>
			<!-- <view class=" flex flex-direction  bbtn_10" >
				<button class="cu-btn bg-gery  round" >自己来</button>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel:'19838035004',
				orderinfo:{}
			};
		},
		onLoad(e){
			console.log(e),
			this.orderinfo= JSON.parse(e.info)
			// this.orderinfo= e.info
			console.log(this.orderinfo,998)
		},
		methods:{
			jump_navigation(){
				uni.setStorage({
					key:"orderinfodelivery",
					data:JSON.stringify(this.orderinfo)
					
				})
				uni.navigateTo({
					url: '../frontpersonnavigate/frontpersonnavigate'
				});
			},
			ontel(){
				const phone=this.tel
			    uni.makePhoneCall({
			     phoneNumber:phone
			    });
			}
		}
	}
</script>

<style lang="scss">
.deliver{
	.time{display: flex;padding: 10px 10px 5px;
		span{font-size: 22px;}
		.time_l{width: 50%;text-align: center;}
		.time_m{border-left: 1px solid #F2F2F2;margin-top: 10px;height: 20px;}
	}
	.buzhou{padding: 10px 10px 1px;
		.bz{display: flex;justify-content: space-between;
			.bz_l{width: 50%;
				.bz_l_01{font-weight: 600;}
				.bz_l_02{font-size: 12px;}
			}
			.cu-btn{width: 100px;}
		}
		.pic{height: 80px;}
	}
	.mingxi{padding: 10px;
		.mx{display: flex;padding-bottom: 10px;
			.mx_l{width: 80px;flex-shrink: 0;}
			.mx_r{color: #767676;}
		}
	}
	.bbtn{display: flex;justify-content: space-between;position: fixed;bottom: 0;width: 100%;
		.bbtn_10{width: 100%;}
	}
}
</style>
