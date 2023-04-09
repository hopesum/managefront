<template>
	<view class="box">
		<view v-show="isaddress">
			<view v-for="item in addressarr" class="d-flex  a-i-c m-3"  :key="item.id">
				<view style="margin-top:15px;margin-right:20px;color:#FF6347;border:1px solid #FF6347;border-radius: 50%; width:32px;height:32px;background-color:rgb(253,223,211);text-align:center;line-height:35px">{{item.name.substring(0,1)}}</view>
				<view>
					<view class="font-lg">{{item.name}} {{item.phone}}</view>
						<view>{{item.province}} {{item.city}} {{item.county}} {{item.village}}</view>
					
				</view>
				<view class="d-flex" style="margin-top:15px;margin-left:25px;">
					<image  src="../../static/images/editaddress.png" style="width:32px;height:32px;margin-right:10px" @click="editaddress(item)"></image>
				<image src="../../static/images/deleteaddress.png" style="width:32px;height:32px;" @click="deleteaddress(item.id)"></image></view>
		</view>
		</view>
		<button class="addressbtn" style="background-color:#FF6347" @click="addnewaddress">添加新地址</button>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isaddress:true,
				userid:'',
				addressarr:[]
			}
		},
		onShow(){
			uni.getStorage({
				key:'frontuserinfo',
				success: res => {
					console.log(888,res)
					this.userid = res.data.id;
					console.log(this.userid, 360);
					uni.request({
								   url:'http://127.0.0.1:5000/frontaddress/getuseraddress',
						// header: {
						// 	'content-type': 'application/json'
						// },
								   data:{userid:this.userid,date:new Date()},
								   // data:{userid:this.userid},
								   success:(e)=>{
									  if(e.data.data?.length!=0){
										  this.isaddress=true
										  this.addressarr=e.data.data
										  console.log( this.addressarr,985211)
									  }else{
										    this.isaddress=false
									  }
								   }
					})	
					
					
				}
			});
		
		},
		created() {
			console.log(1010)
			uni.getStorage({
				key:'frontuserinfo',
				success: res => {
					console.log(888,res)
					this.userid = res.data.id;
					console.log(this.userid, 360);
		
					
				}
			});
			console.log('sjp')
			uni.request({
						   url:'http://127.0.0.1:5000/frontaddress/getuseraddress',
			header: {
				'content-type': 'application/json'
			},
						   data:{userid:this.userid,date:new Date()},
						   // data:{userid:this.userid},
						   success:(e)=>{
							  if(e.data.data?.length!=0){
								  this.isaddress=true
								  this.addressarr=e.data.data
								  console.log( this.addressarr,985211)
							  }else{
								    this.isaddress=false
							  }
						   }
			})	
		    console.log(9999999)
		},
		methods: {
			editaddress(item){
				console.log(item)
				
				uni.setStorage({
					key: 'addressinfo',
					data: item,
					success: function () {
						uni.navigateTo({
							url:`../editaddress/editaddress`
						
						})
						console.log('success保存用户信息成功');
					},
					
				});
			
				console.log(999)
			},
			deleteaddress(id){
				uni.showModal({
					// title: '提示',
					content: '确定要删除该地址吗？',
					success: function (res) {
						if (res.confirm) {
							uni.request({
										  url:'http://127.0.0.1:5000/frontaddress/deladdress',
										  method:'GET',
										  data:{id:id},
										  success:(e)=>{
											  uni.showToast({
											  	title:e.data.msg,
											  	success:(es)=>{
													
													
													
													
													uni.navigateTo({
														url:'../showaddress/showaddress'
													})
												}
											  })
										  }
							})
										
							
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			
			},
	         addnewaddress(){
				uni.navigateTo({
					url:"../address/address"
				})
				console.log(888)
				
				// uni.getLocation({
				// 	success:(e)=>{
				// 		console.log(e)
				// 		// console.log(latitude,longitude,888)
						
				// 	}
				// })
		// uni.openLocation(OBJECT)
			}		}
	}
</script>

<style>
.box{
	padding:10px;
}
</style>
