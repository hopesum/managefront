<template>
	<view class="row j-center m-2" >
		
		<block v-for="(item,index) in resdata" :key="index">
			<view class="d-flex flex-column j-center a-center py-1"
			@tap="event(item)" style="width: 142rpx;">
				<image :src="item.src" 
				style="width: 60upx;height: 60upx;"
				mode="widthFix"></image>
				<text class="font-sm mt-2">{{item.text}}</text>
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		props:{
			resdata:[Array,Object]
		},
		methods:{
			event(item){
				console.log("点击了图标")
				uni.switchTab({
					url:'/pages/sort/sort',
					success:(res)=>{
						console.log(res)
						console.log(item)
						// this.$bus.$emit('事件名', 额外参数)
						this.$bus.$emit('sortinfo',item)
					}
				})
				
			},
		
		}
	}
</script>

<style>
</style>
