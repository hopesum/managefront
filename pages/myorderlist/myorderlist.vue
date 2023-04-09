<template>
	<view>
		<view v-if="arr.length>0">
			<view v-for="item in arr" :key="item.id" class="row p-2 border-bottom border-light-secondary animated fadeIn faster" @click="openDetail(item)">
					<view class="span-10">
						<image :src="'http://127.0.0.1:5000/upload/imgs/goods_img/'+item.imgUrl"
						mode="widthFix" class="w-100"></image>
					</view>
					<view class="span-10 pl-3 d-flex flex-column">
						<view class="font-md font-weight">{{item.name}}</view>
						<view class="font text-light-muted line-h-md mb-auto">
							{{item.goodsDesc}}
						</view>
						<view class="font text-light-muted line-h-md mb-auto">
							<!-- 订单号： -->
							<!-- {{orderno}} -->
							
						</view>
						<view class="d-flex a-center" style="margin-left:50%; margin-top:10px;">
							<view style="width:90px">实付款：</view>
						     <price :text="item.price"></price>
						</view>
					
						<!-- <price :text="item.price"></price> -->
						<!-- <view class="font-sm text-light-muted">
							类别：{{item.category}}  销量： {{item.sellCount}}
						</view> -->
						<!-- <uni-rate :readonly="true" :value="item.rating" /> -->
					</view>
				</view>	
			
		</view>
		<view v-else class="d-flex text-center p-3">
			<text class="text-light-muted mx-2 font-lg iconfont icon-xihuan">你还没有任何订单</text>
			<view class="px-2 py-1 border border-light-secondary rounded"
			hover-class="bg-light-secondary" @click="openindex">
				去逛逛
			</view>
		</view>
		</view>
	
	
	
</template>

<script>
	import price from "@/components/common/price.vue"
	import uniRate  from "@/components/uni-ui/uni-rate/uni-rate.vue"
	import {mapState} from 'vuex'
	export default {
		components: {
			price,uniRate
		},
		computed:{
			...mapState({userid:(state)=>state.user.userid})
		},
		data(){
			return {
				arr:[]
			}
		},
	
			onLoad() {
				uni.request({
					url:'http://127.0.0.1:5000/order/getuserordercontent',
					data:{userid:this.userid},
					method:'GET',
					success:(res)=>{
						console.log(res,88889999)
						this.arr=res.data.data
						
						if(res.data.code==0){
							uni.showToast({
								title:res.data.msg
							})
						}
					}
					
				})
				
	
			
			},
			
		
	
		methods: {
			openindex(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			openDetail(item) {
				const objparams=Object.assign({},item)
				objparams.imgUrl='/upload/imgs/goods_img/'+objparams.imgUrl
			uni.setStorage({
				   	key: 'sortInfo',
				   	data: JSON.stringify(objparams),
				   	success: function () {
				   		console.log('success');
				   	}
				   });
			console.log(item,898989)
			// item.imgUrl=item.imgUrl.substring(21)
			// uni.navigateTo({
			// 	url:"/pages/detail/detail?detail="+JSON.stringify(item)
			// })
			uni.navigateTo({
				url:"/pages/detail/detail"
			})
			}
		},
	}
</script>

<style>
</style>
