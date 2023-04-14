<template>
	<view>
<<<<<<< HEAD
		<divider></divider>
		<card headTitle="商家寄语" cardStyle="background:#ffffff;">
			<view class="d-flex a-center px-3 py-2">
				<!-- <image src="../../static/images/demo/cate_01.png"
				mode="widthFix" style="width: 100rpx;height: 100rpx;"
				></image> -->
				<view class="flex-1 ml-3">
					<view class="font-md">首先感谢你的反馈</view>
					<view class="font-md text-light-muted">
						我们一定仔细看你的宝贵文字，祝您万事胜意
					</view>
				</view>
			</view>
		</card>
		<divider></divider>
		<card headTitle="反馈种类" bodyPadding cardStyle="background:#ffffff;">
			<zcm-radio-group :label="label1" 
			:selected.sync='label1.selected'
			></zcm-radio-group>
		</card>
		<divider></divider>
		<card headTitle="问题描述" bodyPadding cardStyle="background:#ffffff;">
			<view class="position-relative">
				<textarea placeholder="请详细描述一下你遇到的问题" :maxlength="maxlength" style="width: 100%;height: 400rpx;box-sizing: border-box;" class="border rounded p-2" v-model="content"/>
				<view class="position-absolute text-light-muted font" 
				:class="remain >= 0 ? 'text-light-muted' : 'text-danger'"
				style="right: 10rpx;bottom: 5rpx;">
					{{remain}}/{{maxlength}}
				</view>
			</view>
		</card>
		
		<view class="p-3">
			<view class="rounded main-bg-color text-white text-center font-md py-2"
			hover-class="main-bg-hover-color" @click="submitall">
				提交
			</view>
		</view>
		
=======
	反馈
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
	</view>
</template>

<script>
<<<<<<< HEAD
	import card from '@/components/common/card.vue';
	import zcmRadioGroup from '@/components/common/radio-group.vue';
	export default {
		components: {
			card,
			zcmRadioGroup
		},
		data() {
			return {
				label1:{
					selected:0,
					list:[
						{name:"菜品过期"},
						{name:"食品价格高"},
						{name:"外卖质量差"},
						{name:"外卖超时"},
						{name:"外卖员问题"},
						{name:"为商家赞"},
						{name:"夸夸外卖员"},
						{name:"赞叹商家"},
					]
				},
				content:"",
				maxlength:50
			}
		},
		computed: {
			// 剩余可输入字数
			remain() {
				return this.maxlength - this.content.length
			}
		},
		methods: {
			submitall(){
				uni.showToast({
					title:"提交成功",
					success:()=>{
						setTimeout(()=>{
						uni.navigateTo({
							  url: '../my/my'
						});	
						},1000)
					}
				})
			
				
			}
=======
	 import { io } from "@/socket.io-client.js";
	
	  // const socket = io();
	export default {
		data() {
			return {
				
			}
		},
		onShow(){
			console.log('7984651')
			// let connection = io.connect('ws://localhost:8080');
			 
			//         connection.on('test',(str)=>{
			//     		console.log(str)
			// 			console.log('7984651')
			//     	})

			// socket.on("connect", (res) => {
			//  console.log(res)
			//  console.log('7984651')
			// });
			// let socket = io('http://127.0.0.1:3000');
			
			// let interval = setTimeInterval(()=>{
			//   socket.emit('random', Math.random());
			// }, 500);
			
			// socket.on('warn', count=>{
			//   console.log('warning count : '+count);
			// });
			
			// socket.on('disconnect', ()=>{
			//   clearInterval(interval);
			// });
			console.log('7984651')
		},
		onLoad(){
			console.log(654789)
		uni.connectSocket({
			url:'',
		
			// header: {
			// 	'content-type': 'application/json'
			// },
			// protocols: ['protocol1'],
			// method: 'GET',
			success:(res)=>{
				console.log(res)
			}
		})
	
		console.log(654789)
		},
		
		methods: {
			
			
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
		}
	}
</script>

<style>
<<<<<<< HEAD
page{
	background: #EEEEEE;
}
=======

>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
</style>
