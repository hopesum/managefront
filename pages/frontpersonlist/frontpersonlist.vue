<template>
	<view>
		<view style="font-size:22px;font-weight:600;color:#ff5628" class="m-2">商家</view>
		<divider></divider>
		<view v-for="item in shoper" :key="item.id"
			class="row p-2 border-bottom border-light-secondary animated fadeIn faster d-flex j-c a-c" >
			<view class="span-3">
				<image :src="item.imgUrl"  class="w-100" style="width:64px;height:64px;border-radius:50%">
				</image>
			</view>
			<view class="span-10 pl-3 d-flex flex-column">
				<view class="font-md font-weight">昵称：{{item.account}}</view>

			</view>
			</view>
	<view style="font-size:22px;font-weight:600;color:#ff5628" class="m-2">顾客</view>
			<divider></divider>
			<view v-for="item in user" :key="item.id"
				class="row p-2 border-bottom border-light-secondary animated fadeIn faster" >
				<view class="span-3">
					<image :src="item.imgUrl" class="w-100" style="width:64px;height:64px;border-radius:50%">
					</image>
				</view>
				<view class="span-10 pl-3 d-flex flex-column">
					<view class="font-md font-weight">{{item.account}}</view>
			
				</view>
				</view>

				<view style="font-size:22px;font-weight:600;color:#ff5628" class="m-2">外卖员</view>
				<divider></divider>
				
				
	<view v-for="item in delivery" :key="item.id"
			class="row p-2 border-bottom border-light-secondary animated fadeIn faster" >
			<view class="span-3">
				<image :src="item.imgUrl" class="w-100" style="width:64px;height:64px;border-radius:50%">
				</image>
			</view>
			<view class="span-10 pl-3 d-flex flex-column">
				<view class="font-md font-weight">{{item.account}}</view>

			</view>
			</view>


			</view>
</template>

<script>
	export default {
		data() {
			return {
				shoper: [],
				user: [],
				delivery: []

			}
		},
		onLoad() {
			uni.request({
				url: 'http://127.0.0.1:5000/frontuser/allperson',
				method: 'GET',
				success: (res) => {
					console.log(res, 963)
					this.shoper = res.data.filter(item =>{
						if(item.imgUrl=='default.jpg'){item.imgUrl='http://127.0.0.1:5000/upload/imgs/frontuser_img/'+item.imgUrl}
						return item.type == 1
					}
					)
					this.user = res.data.filter(item =>{
						if(item.imgUrl=='default.jpg'){item.imgUrl='http://127.0.0.1:5000/upload/imgs/frontuser_img/'+item.imgUrl}
						return item.type == 2
					})
					this.delivery = res.data.filter(item =>{
						if(item.imgUrl=='default.jpg'){item.imgUrl='http://127.0.0.1:5000/upload/imgs/frontuser_img/'+item.imgUrl}
						return item.type == 3
					})
					console.log(this.user, this.shoper, this.delivery)

				}
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>