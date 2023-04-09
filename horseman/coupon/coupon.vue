<template>
	<view class="coupon">
		<scroll-view scroll-x class=" nav text-center bg-yellow padding-top">
			<view class="cu-item text-white" :class="index==TabCur?' cur':''" v-for="(item,index) in tab" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view class="top bg-yellow ">
			<view class="con bg-grey">
				<view class="quan bg-yellow margin-bottom-lg">
					<view class="quan_l qy-bg-white">
						<view class="quan_l_01 qy-text-yellow"><span>12</span> ¥</view>
						<view class="quan_l_02 qy-text-grey">
							无门槛通用<br/>跑腿随意购
						</view>
						<view class="yuan-gary"></view>
					</view>
					<view class="quan_r qy-text-white">
						立<br/>即<br/>使<br/>用
						<view class="yuan-yellow bg-yellow"></view>
					</view>
				</view>
				<view class="quan bg-yellow margin-bottom-lg">
					<view class="quan_l qy-bg-white">
						<view class="quan_l_01 qy-text-yellow"><span>12</span> ¥</view>
						<view class="quan_l_02 qy-text-grey">
							无门槛通用<br/>跑腿随意购
						</view>
						<view class="yuan-gary"></view>
					</view>
					<view class="quan_r qy-text-white">
						立<br/>即<br/>使<br/>用
						<view class="yuan-yellow bg-yellow"></view>
					</view>
				</view>
				<view class="quan qy-bg-grey margin-bottom-lg">
					<view class="quan_l qy-bg-white">
						<view class="quan_l_01 qy-text-yellow"><span>12</span> ¥</view>
						<view class="quan_l_02 qy-text-grey">
							无门槛通用<br/>跑腿随意购
						</view>
						<view class="yuan-gary"></view>
					</view>
					<view class="quan_r qy-text-grey">
						已<br/>使<br/>用
						<view class="yuan-yellow qy-bg-grey"></view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab:['全部','待使用','已使用'],
				TabCur:0,
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style lang="scss">
.coupon{
	.top{height: 50px;position: relative;
		.con{position: absolute;top: 15px;width: 100%;padding: 20px;border-radius: 10px;background-color: #F5F5F5;
			.quan{display: flex;border-radius: 8px;height: 94px;
				.quan_l{border-radius: 8px;width: 85%;display: flex;padding: 10px;box-sizing: border-box;position: relative;
					.quan_l_01{width: 55%;text-align: center;padding-top: 10px;border-right: 1px solid #F4EFF3;
						span{font-size: 48px;padding-right: 5px;}
					}
					.quan_l_02{text-align: center;font-size: 12px;width: 45%;padding-top: 20px;}
					.yuan-gary{position: absolute;width: 20px;height:20px;border-radius: 50%;left: -10px;top: 37px;background-color: #F5F5F5;}
				}
				.quan_r{font-size: 12px;width: 15%;position: relative;display: flex;flex-direction: column;justify-content: center;
				align-items: center;
					.yuan-yellow{position: absolute;width: 20px;height:20px;border-radius: 50%;left: -10px;top: 37px;}
				}
			}
		}
	}
}
</style>
