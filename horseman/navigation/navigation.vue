<template>
	<view class="navigation">
		<view class="map">
			<image src="@/imgs/ditu.png"></image>
		</view>
		<view class="mingxi qy-bg-white margin-bottom-sm">
			<view class="mx">
				<view class="mx_l qy-text-grey">预计送达</view>
				<view class="mx_r">2019/11/06 08:20（58分钟内送达）</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">距离取货点</view>
				<view class="mx_r">1.4km</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">预估重量</view>
				<view class="mx_r">1kg</view>
			</view>
		</view>
		<Process></Process>
		<view class="mingxi qy-bg-white margin-top-sm">
			<view class="mx">
				<view class="mx_l qy-text-grey">物品明细</view>
				<view class="mx_r">文件</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey">距离取货点</view>
				<view class="mxs_r">
					<view class="mxs_r_01">12321321</view>
					<view class="mxs_r_02 qy-text-grey">复制</view>
				</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">备注</view>
				<view class="mx_r">这里是备注</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey">收入详情</view>
				<view class="mxs_r">
					<view class="mxs_r_01">时段奖励</view>
					<view class="mxs_r_02 ">¥2.5</view>
				</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey"></view>
				<view class="mxs_r">
					<view class="mxs_r_01">平台配送费</view>
					<view class="mxs_r_02 ">¥2.5</view>
				</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey"></view>
				<view class="mxs_r">
					<view class="mxs_r_01">小费</view>
					<view class="mxs_r_02 ">¥2.5</view>
				</view>
			</view>
		</view>
		<view class="H50"></view>
		<view class="foot">
			<view class="foot_l">
				<view class="foot_l_01 qy-text-red">¥<span>2.5</span></view>
				<view class="foot_l_02">小费 ¥ 2.0</view>
			</view>
			<view class="foot_r"><button class="cu-btn round bg-yellow" >立即抢单</button></view>
		</view>
	</view>
</template>

<script>
	import Process from "@/components/qy/process.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Process
		}
	}
</script>

<style lang="scss">
.navigation{
	.map{height: 300px;
		image{width: 100%;height: 300px;}
	}
	.mingxi{padding: 10px;
		.mx{display: flex;padding-bottom: 10px;
			.mx_l{width: 90px;flex-shrink: 0;text-align: right;padding-right: 20px;}
			.mx_r{color: #767676;}
		}
		.mxs{display: flex;padding-bottom: 10px;
			.mxs_l{width: 90px;flex-shrink: 0;text-align: right;padding-right: 20px;}
			.mxs_r{display: flex;justify-content: space-between;color: #767676;flex-grow: 1;}
		}
	}
	.H50{height: 100px;}
	.foot{position: fixed;bottom: 0;background-color: #fff;width: 100%;padding: 10px;display: flex;justify-content: space-between;
		.foot_l{display: flex;
			.foot_l_01 span{font-size: 24px;padding-right: 5px;}
			.foot_l_02{padding-top: 8px;color: #767676;}
		}
	}
}
</style>
