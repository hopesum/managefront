<template>
	<view class="detail">
		<view class="title bg-white">
			<view class="iconfont icon-cuowutishi qy-text-red" style="font-size: 30px;"></view>
			<view class="qy-text-red">商家取消了订单</view>
			<view class="title_yy">
				<view class="title_yy_l qy-text-grey">取消原因：商户同意用户退款</view>
				<view class="title_yy_r"><view class="iconfont icon-tishi" ></view>取消规则</view>
			</view>
		</view>
		<view class="ddps">
			<view class="ddps_l">订单配送</view>
			<view class="ddps_r">{{ '1'+parseInt(Math.random()*10000)}}</view>
		</view>
		<Process :title="address[parseInt(Math.random()*7)]"></Process>
		<view class="time qy-bg-white margin-top-sm">
			<view class="time_l ">
				<view class="time_l_01 ">抢单</view>
				<view class="time_l_02">11:02</view>
			</view>
			<view class="time_m"></view>
			<view class="time_l ">
				<view class="time_r_01">预估</view>
				<view class="time_r_02">25分钟</view>
			</view>
			<view class="time_m"></view>
			<view class="time_l ">
				<view class="time_r_01">到点</view>
				<view class="time_r_02">11:27</view>
			</view>
		</view>
		<view class="padding flex flex-direction margin-top-sm">
			<button class="cu-btn bg-yellow round lg" @click="tohome">我知道了</button>
		</view>
	</view>
</template>

<script>
	import Process from "@/components/qy/process.vue"
	export default {
		data() {
			return {
				address:['陇海西路163号院2单元西','颖河路101号院2单元','金龙化101','玉华百货','郑州轻工业大学科学小区1号楼','郑州轻工业大学东风校区西区1','青年书店']
			}
		},
		components:{
			Process
		},
		methods:{
			tohome(){
				uni.navigateTo({
					url:"../aboutperson/aboutperson"
				})
			}
		}
	}
</script>

<style lang="scss">
.detail{
	.title{text-align: center;padding: 25px 0 10px;font-size: 16px;
		.title_yy{display: flex;justify-content: space-between;width: 100%;padding: 25px 10px 2px;font-size: 12px;}
		.title_yy_r{display: flex;}
	}
	.ddps{display: flex;padding: 10px;justify-content: space-between;
		.ddps_r{font-weight: 600;}
	}
	.time{display: flex;padding: 10px 10px;
		span{font-size: 22px;}
		.time_l{width: 50%;text-align: center;}
		.time_m{border-left: 1px solid #F2F2F2;margin-top: 5px;height: 25px;}
	}
}
</style>
