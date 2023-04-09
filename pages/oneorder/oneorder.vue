<template>
	<view>
		<view  :key="orderinfo.id" class="row p-2 border-bottom border-light-secondary animated fadeIn faster" @click="openDetail(orderinfo)">
				<view class="span-10">
					<image :src="'http://127.0.0.1:5000/upload/imgs/goods_img/'+orderinfo.imgUrl"
					mode="widthFix" class="w-100"></image>
				</view>
				<view class="span-10 pl-3 d-flex flex-column">
					<view class="d-flex a-center">
					<view class="font-md font-weight m-1">{{orderinfo.name}}</view>
					<view style="color:#ccc">
						<!-- <price :text="orderinfo.price"></price>	 -->
					<!-- 	{{orderinfo.goodsDesc}} -->
						</view>
						</view>
					<view class="font text-light-muted line-h-md mb-auto">
						订单号：{{orderno}}
						
					</view>
					<view class="d-flex a-center" style="margin-left:40%; margin-top:10px;">
						<view style="width:90px">实付款：</view>
					<price :text="orderinfo.price"></price>
					</view>
					
				<view class="font-sm text-light-muted">
					
					</view>
					<!-- <uni-rate :readonly="true" :value="orderinfo.rating" /> -->
				</view>
			</view>	
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	import uniRate  from "@/components/uni-ui/uni-rate/uni-rate.vue"
	export default {
		components:{
			price,
			uniRate
		},
		data() {
			return {
			orderinfo:{},
				orderno:0
			}
		},
		methods: {
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
		onLoad(){
			uni.getStorage({
				key: 'oneorder',
				success:  (res)=> {
					// console.log(JSON.parse(res));
					console.log(res,'llll')
					console.log(JSON.parse(res.data))
					this.orderinfo=JSON.parse(res.data)
				}
			});
			uni.getStorage({
				key: 'ordernum',
				success:  (res)=> {
				this.orderno=res.data	
				}
			});
		}
	}
</script>

<style>

</style>
