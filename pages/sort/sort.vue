<template>
	<view style="height: 100vh;" class="d-flex flex-column">
	
			<view class="d-flex border-top border-light-secondary animated fadeIn faster" style="height: 100%;box-sizing: border-box;">
				
				<loading-plus v-if="beforeReady"></loading-plus>
				
				<!-- <loading :show="showLoading"></loading> -->
				
				<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 95%;" 
				class="border-right border-light-secondary" :scroll-top="leftScrollTop">
					<view class="border-bottom border-light-secondary py-1 left-scroll-item"
					hover-class="bg-light-secondary"
					v-for="(item,index) in cate" :key="index"
					@tap="changeCate(index)">
						<view class="py-1 font-md text-muted text-center"
						:class="activeIndex === index ? 'class-active' : ''">
							{{item.cateName}}</view>
					</view>
				</scroll-view>
				<scroll-view scroll-y style="flex: 3.5;height: 95%;" 
				:scroll-top="rightScrollTop" :scroll-with-animation="true"
				@scroll="onRightScroll">
					<view class="row right-scroll-item" 
					v-for="(item,index) in list" 
					:key="index">
						<view class="span24-8 text-center py-2"
						v-for="(item2,index2) in item.foods" :key="index2"
						 @click="openDetail(item2)">
							<image :src="item2.imgUrl"
							style="width: 120upx;height: 120upx;"></image>
							<text class="d-block">{{item2.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	export default {
		mixins:[loading],
		data() {
			return {
				showLoading:true,
				// 当前选中的分类
				activeIndex:0,
				cate:[],
				list:[{list:[{name:"你好",cover:'../../static/images/swiper4.jpg'}]},{list:[{name:"很好",cover:'../../static/images/swiper4.jpg'}]}],
				leftDomsTop:[],
				rightDomsTop:[],
				rightScrollTop:0,
				leftScrollTop:0,
				cateItemHeight:0
			}
	},
		watch: {
			async activeIndex(newValue, oldValue) {
				// 获取scroll-view高度，scrollTop
				let data = await this.getElInfo({
					size:true,
					scrollOffset:true
				})
				let H = data.height
				let ST = data.scrollTop
				// 下边
				if ((this.leftDomsTop[newValue]+this.cateItemHeight) > (H+ST) ) {
					 return this.leftScrollTop = this.leftDomsTop[newValue]+this.cateItemHeight - H
				}
				// 上边
				if (ST > this.cateItemHeight) {
					this.leftScrollTop = this.leftDomsTop[newValue]
				}
			}
		},
		onLoad() {
			
			this.getData()
			// 1. 在created中订阅
			// 2. 回调函数需要写成箭头函数
			// this.$bus.$on('事件名', 事件回调函数)
			this.$bus.$on('sortinfo', msg => {
				console.log('wssmj')
			  console.log(msg,985211111)
			 let result= this.cate.filter(item=>item.cateName==msg.text)
			  console.log(result,360,this.cate)
			})
		},
		methods: {
			// openSearch(){
			// 	uni.navigateTo({
			// 		url: '../search/search',
			// 	});
			// },
			// 获取节点信息
			getElInfo(obj = {}){
				return new Promise((res,rej)=>{
					let option = {
						size:obj.size ? true : false,
						rect:obj.rect ? true : false,
						scrollOffset:obj.scrollOffset ? true : false,
					}
					const query = uni.createSelectorQuery().in(this);
					let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`):query.select('#leftScroll')
					q.fields(option,data => {
					  res(data)
					}).exec();
				})
			},
			getData(){
			
			
				
				
				
				/*
				cate:[{
					name:"分类1"
				},{
					name:"分类2"
				}]
				
				list:[{
					list:[...]
				},{
					list:[...]
				}]
				*/
			   uni.request({
			   	url:"http://127.0.0.1:5000/goods/catelist",
			   	data:{ currentPage:1, pageSize:1000 },
			   	success:(res)=>{
			   		console.log(res,123456789)
					if(res.statusCode==200){
						let result=res.data.data
						result=result.filter(item=>item.state==1)
						console.log(result,8888)
						console.log(this.cate,999);
						
						this.cate=result
						console.log(this.cate,999101);
					}
			   	}
			   })
			   uni.request({
			   	url:"http://127.0.0.1:5000/goods/goods_list",
			
			   	success:(res)=>{
			   		console.log(res,101010)
			   					if(res.statusCode==200){
			   						let listresult=res.data.goodsList
									console.log(listresult,985211)
			   						this.list=listresult
									this.$nextTick(()=>{
										this.getElInfo({
											all:'left',
											size:true,
											rect:true
										}).then(data=>{
											this.leftDomsTop = data.map(v=>{
												this.cateItemHeight = v.height
												return v.top
											})
										})
										this.getElInfo({
											all:'right',
											size:false,
											rect:true
										}).then(data=>{
											this.rightDomsTop = data.map(v=> v.top)
										})
										this.showLoading = false
									})
			   					}
			   	}
			   })
			   
				// this.$H.get('/category/app_category').then(res=>{
				// 	var cate = []
				// 	var list = []
				// 	res.forEach(v=>{
				// 		cate.push({
				// 			id:v.id,
				// 			name:v.name
				// 		})
				// 		list.push({
				// 			list:v.app_category_items
				// 		})
				// 	})
				// 	this.cate = cate
				// 	this.list = list
					// this.$nextTick(()=>{
					// 	this.getElInfo({
					// 		all:'left',
					// 		size:true,
					// 		rect:true
					// 	}).then(data=>{
					// 		this.leftDomsTop = data.map(v=>{
					// 			this.cateItemHeight = v.height
					// 			return v.top
					// 		})
					// 	})
					// 	this.getElInfo({
					// 		all:'right',
					// 		size:false,
					// 		rect:true
					// 	}).then(data=>{
					// 		this.rightDomsTop = data.map(v=> v.top)
					// 	})
					// 	this.showLoading = false
					// })
				// })
				
				
				
			},
			// 点击左边分类
			changeCate(index){
				this.activeIndex = index
				
				// 右边scroll-view滚动到对应区块
				this.rightScrollTop = this.rightDomsTop[index]
			},
			// 监听右边滚动事件
			async onRightScroll(e){
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v,k)=>{
					if (v < e.detail.scrollTop + 3) {
						this.activeIndex = k
						return false
					}
				})
			},
			// 打开详情页
			openDetail(item){
				/*
				{
					"id":1,
					"name":"新品",
					"cover":"https://res.vmallres.com/pimages/product/6901443331376/428_428_FAF5BBAB67C16D7426B5B1A2A38F9001DED6D011A0EE9977mp.png",
					"category_id":1,
					"goods_id":25,
					"order":50,
					"create_time":"2019-08-17 00:57:12",
					"update_time":"2019-08-17 00:57:12"
				}
				*/
			   // sessionStorage.setItem('sortInfo',JSON.stringify(item))
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
		}
	}
</script>

<style>
.class-active{
	border-left: 8upx solid #FD6801;color: #FD6801!important;
}
</style>
