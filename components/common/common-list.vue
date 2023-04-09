<template>
	<view style="width: 372.5rpx;" @click="openDetail()">
		<!-- <image :src="'http://127.0.0.1:5000' + item.imgUrl" mode="widthFix" style="height: 400rpx;" lazy-load></image> -->
		<image :src="`http://127.0.0.1:5000${item.imgUrl}`"  style="height: 310rpx;" lazy-load></image>
		<view class="p-2 pt-1">
			<view><text class="font-md">{{item.name}}</text></view>
			<text class="d-block font text-light-muted">{{item.goodDesc}}</text>
			<view class="d-flex py-1">
				<price :text="item.price"></price>
				<view class="ml-1 a-self-end line-h" ><text class="font-sm text-light-muted">销量{{item.sellCount}}</text></view>
							
		<!-- 		<uni-rate :readonly="true" :value="item.rating/100" />
				<view class="ml-1 a-self-end line-h" ><text class="font-sm text-light-muted">销量{{item.sellCount}}</text></view>
			 --></view>
			<uni-rate :readonly="true" :value="item.rating" />
				
		</view>
	</view>
</template>

<script>
	import uniRate  from "@/components/uni-ui/uni-rate/uni-rate.vue"
		import price from "@/components/common/price.vue";
	export default {
		components:{
			price,
			uniRate
		},
		props:{
			item:Object,
			index:[Number,String],
			type:{
				type:String,
				default:"navigateTo"
			}
		},
		methods: {
			openDetail() {
				console.log(this.item,88521)
				uni.setStorage({
					key: 'sortInfo',
					data: JSON.stringify(this.item),
					success: function () {
						console.log('success');
					}
				});
				// sessionStorage.setItem('sortInfo',JSON.stringify(this.item))
				uni[this.type]({
					url:"/pages/detail/detail",
					success:(res)=>{
					console.log(res)
					console.log(res)
					// this.$bus.$emit('sortinfo',this.item)
					}
				})
			}
		},
	}
</script>

<style>
</style>
