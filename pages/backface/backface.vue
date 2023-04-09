<template>
	<view>
	反馈
	</view>
</template>

<script>
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
			
			
		}
	}
</script>

<style>

</style>
