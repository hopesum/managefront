<template>
	<view>
		<view v-for="item in arr" :key="item.id" class="row p-2 border-bottom border-light-secondary animated fadeIn faster" @click="openDetail(item)">
			<view class="span-10">
				<image :src="'http://127.0.0.1:5000/'+item.imgUrl"
				mode="widthFix" class="w-100"></image>
			</view>
			<view class="span-10 pl-3 d-flex flex-column">
				<view class="font-md font-weight">{{item.name}}</view>
				<view class="font text-light-muted line-h-md mb-auto">
					{{item.gooDesc}}
				</view>
				<price :text="item.price"></price>
				<view class="font-sm text-light-muted">
					类别：{{item.category}}  销量： {{item.sellCount}}
				</view>
				<uni-rate :readonly="true" :value="item.rating" />
			</view>
		</view>	
	</view>
	
	
	
</template>

<script>
	import price from "@/components/common/price.vue"
	import uniRate  from "@/components/uni-ui/uni-rate/uni-rate.vue"
	
	export default {
		components: {
			price,uniRate
		},
		data(){
			return {
				arr:[]
			}
		},
	
			onLoad(e) {
			uni.request({
				url:"http://127.0.0.1:5000/goods/list",
				data:{
					currentPage:1,
					pageSize:2,
					name:e.keyword
				},
				success:(res)=>{
					console.log(res,996);
					this.arr=res.data.data
				}
			     })
			},
			
		
		// props: {
		// 	item: Object,
		// 	index:Number
		// },
		methods: {
			openDetail(item) {
			uni.setStorage({
				   	key: 'sortInfo',
				   	data: JSON.stringify(item),
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
