<template>
	<view>
		
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="iconfont icon-iconfontxuanzhong4 main-text-color line-h" style="font-size: 180rpx;"></text>
			<text class="text-dark font-lg line-h-sm">支付成功</text>
		</view>
		<view class="px-5">
			<view class="rounded main-bg-color text-white font-md w-100 py-2 mt-3 text-center" hover-class="main-bg-hover-color"
			@click="openDetail">
				查看订单
			</view>
			<view class="rounded border font-md w-100 py-2 mt-3 text-center" hover-class="bg-light" @click="openIndex">
				返回首页
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// params:{}
				goodid:''
			}
		},
		onLoad(){
			uni.getStorage({
				key: 'goodidorder',
				success: (res) =>{
					console.log(res.data,898989);
					this.goodid=res.data
				}
			});
		// this.$bus.$on('goodid',(id)=>{
		// 	console.log('6666')
		// 	this.params.id=id
		// 	console.log(this.params.id)
		// })
		console.log(this.goodid,8952)
		},
		methods: {
			
			openDetail(){
				// uni.navigateBack({
				// 	delta: 1
				// });
				uni.request({
					url:'http://127.0.0.1:5000/order/getordergood',
					data:{goodid:this.goodid},
					method:'POST',
					success:(res)=>{
						uni.setStorage({
							key: 'oneorder',
							data: JSON.stringify(res.data.data[0]),
							success:  ()=> {
								console.log('success');
								uni.navigateTo({
									url:"../oneorder/oneorder"
								})
							}
						});
					}
				})
			},
			openIndex(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
