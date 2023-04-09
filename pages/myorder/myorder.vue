<template>
	<view>
		<view v-if="isaddress"><view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
				<view class="mb-3">
					<view class="font-lg">待支付</view>
					<!-- <view class="font">{{timeDownText}}</view> -->
					<uni-countdown :show-day="false" :hour="12"   color="#FFFFFF"  background-color="rgba(0,0,0,.5)"></uni-countdown>
				</view>
				<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
			</view>
			<view class="p-3 bg-white">
						<view class="text-light-muted font-md">
							<text class="font-lg text-dark mr-2">{{address.name}}</text>
							{{address.phone}}
						</view>
						<view class="text-light-muted font-md">
							{{address.province}}-{{address.city}}-{{address.county}}-{{address.village}}						</view>
					</view>
					<divider></divider>
			
			<uni-list-item>
						<text class="font-md text-light-muted">商品总价</text>
						<view slot="right" class="font-md text-light-muted">
							{{good.price}}
						</view>
					</uni-list-item>
					<uni-list-item>
						<text class="font-md text-light-muted">快递</text>
						<view slot="right" class="font-md text-light-muted">
							包邮
						</view>
					</uni-list-item>
					<uni-list-item>
						<text class="font-md text-light-muted">优惠券</text>
						<view slot="right" class="font-md text-light-muted">
							暂无
						</view>
					</uni-list-item>
					<uni-list-item>
						<text class="font-md text-light-muted">备注</text>
						<view slot="right" class="font-md text-light-muted">
							<input type='text' placeholder="请输入备注" v-model="remarks"/>
						</view>
					</uni-list-item>
					<uni-list-item>
						<text class="font-md main-text-color">实际付款</text>
						<view slot="right" class="font-md text-light-muted">
							<price>{{good.price}}</price>
						</view>
					</uni-list-item>
					<divider></divider>
					<text class="font-md text-light-muted" style="margin:8px">订单信息</text>
					
						<uni-list-item title="订单编号">
							<view slot="right" class="font-md text-light-muted">
							{{orderNo}}
							</view>
						</uni-list-item>
						<view style="display:flex;justify-content: flex-start;">
							<button @click="closeOrder" style="width:100px;display:inline-block;margin-left:40%">取消支付</button>
								<button @click="openPayMethods" style="width:80px;display:inline-block;background-color:rgb(255,99,71)">支付</button>
							
						</view>
				<!-- <button @click="openPayMethods">取消支付</button>
					<button @click="closeOrder" >支付</button> -->
				<!-- 	<common-button @click="openPayMethods">取消支付</common-button>
						<common-button @click="closeOrder">支付</common-button>
			 -->
			
	</view>
	<view v-else>请先选择您的地址</view>
</view>
		
			</template>

<script>
	import {mapState} from 'vuex'
		import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "@/components/common/price.vue"
		import commonButton from '@/components/common/common-button.vue';
	import uniCountdowm from '@/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue'
	export default {
		components:{
			commonButton,
				uniListItem,
		uniCountdowm,
		price
		},
		// computed:{
		// 	...mapState({userid:(state)=>state.user.userid})
		// },
		data() {
			return {
		   remarks:'暂无',
			userid:'',
			isaddress:false,
			address:{},
			good:{},
			orderNo:0,
		
			}
		},
		onShow(){
			
			this.orderNo=11000+Math.floor(Math.random()*9000)
			uni.getStorage({
				key:'sortInfo',
				success:(res)=>{
					this.good=JSON.parse(res.data)
					console.log(130250,this.good)
				}
			})
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
										  this.address=e.data.data[0]
										  console.log( this.address,985211)
									  }else{
										    this.isaddress=false
									  }
								   }
					})	
					
					
				}
			});
		
		},
		
		methods: {
			openPayMethods(){
				console.log(this.good.id,'6666wd')
				uni.setStorage({
					key: 'goodidorder',
					data: this.good.id,
					success: function () {
						console.log('success');
					}
				});
				uni.setStorage({
					key: 'ordernum',
					data: this.orderNo,
					success: function () {
						console.log('success');
					}
				});
				const deliverAddress={"province":this.address.province,city:this.address.city,county:this.address.county,village:this.address.village}
				console.log(98523441,deliverAddress)
				
				  console.log(this.address,"this.address")
				const params={orderNo:this.orderNo,orderTime:new Date().getTime(),phone:this.address.phone,consignee:this.address.name,deliverAddress:JSON.stringify(deliverAddress),deliveryTime:new Date(new  Date().setHours(new  Date().getHours() +  1)),orderAmount:this.good.price,orderState:'已受理',remarks:this.remarks}
				// const params={orderNo:this.orderNo,orderTime:new Date(),phone:this.address.phone,consignee:this.address.name,diliverAddress:diliverAddress,deliverTime:new  Date(new  Date().setHours(new  Date().getHours() +  1)),orderAmount:this.good.price,orderState:'已受理',remarks:this.remarks}
				
				
				uni.request({
					url:'http://127.0.0.1:5000/order/adduseraboutorder',
					data:{orderno:this.orderNo,userid:this.userid,goodid:this.good.id},
					method:'POST',
					success:(res)=>{
						console.log(res,"函数就是词霸")
					}
				})
				
				uni.request({
					url:'http://127.0.0.1:5000/order/addorder',
					data:params,
					method:'POST',
					success:(res)=>{
						console.log(res,"52函数就是词霸")
					}
				})
				
				uni.showToast({
					title:'支付中...',
					
				})
			uni.navigateTo({
				url:'../pay-result/pay-result',
				success:()=>{
					// this.$bus.$emit('goodid',8)
				
				}
			})	
			},
			closeOrder(){
				uni.showToast({
					title:'订单已取消'
				})
			uni.navigateTo({
				url:'../detail/detail'
			});	
			}
		}
	}
</script>

<style>

</style>
