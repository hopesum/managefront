<template>
	<view>
		
		<image v-if="ishttp" :src="`http://127.0.0.1:5000${detailInfo.imgUrl}`" alt="" mode="widthFix">
		<image v-else='ishttp' :src="`${detailInfo.imgUrl}`" alt="" mode="widthFix">
	<view class="p-2">	
	<view  class="d-flex" style="justify-content: space-between">
		
		<view class="font-lg">{{detailInfo.name}} </view>
		<view class="font-lg">{{detailInfo.category}} </view>
	</view>

		<view class="font text-light-muted mb-3 line-h-sm">
		{{detailInfo.goodsDesc}}
		</view>
		<view  class="d-flex" style="justify-content: space-between">
		<view class="font  mb-3 line-h-sm "  style="color:#FF6347" @click="openshop">
				查看店铺
				</view>
		<view class="font text-light-muted mb-3 line-h-sm">
		{{detailInfo.ctime}}
		</view>
		
		</view>	
	
		
<view  class="d-flex" style="justify-content: space-between">
		
	
		<view class="d-flex py-1">
	
			<price priceSize="font-lg" unitSize="font" :text="detailInfo.price"></price>
			<view class="ml-1 a-self-end line-h" ><text class="font-sm text-light-muted">销量{{detailInfo.sellCount}}</text></view>
			
		</view>
			<uni-rate :readonly="true" :value="detailInfo.rating" />
		</view>			
		<view>
			<view  style="margin:10px 5px"><divider></divider>
			</view>
			
		
		<view  class="d-flex" style="justify-content: space-between;align-items: center;">
		<!-- 	<uni-list-item showExtraIcon leftIconStyle="color:#FA6C5E;" showArrow="false"
			leftIcon="icon-service" title="" style="width:130px;">收藏</uni-list-item> -->
			<view v-if="!islike"  class="item iconfont icon-xihuan" style='background-color:white;color:#ccc;padding-right:10px;font-size:18px;' @click="likehandle">收藏</view>
			<view v-if="islike" class="item iconfont icon-xihuan" style='background-color:white;color:rgb(252,87,1);padding-right:10px;font-size:18px;' @click="likehandle">已收藏</view>
			
			<view class="d-flex" style="border:1px solid white;" >
				<view class="item iconfont icon-gouwuche1" style='border-top-left-radius: 36px;border-bottom-left-radius: 36px;color:white;background-color:orange;padding-right:10px;font-size:18px' @click="opencart(detailInfo)">购物车</view>
				<view  class="item" style="border-top-right-radius: 36px;border-bottom-right-radius: 36px; color:white;background-color:rgb(252,87,1);font-size:18px" @click="openmyorder(detailInfo)">立即购买</view>
			</view>
	</view>	

			<view class="font-lg m-3">评论</view>
			 <view v-for="item in arr" class='d-flex py-1 m-1'>
				 <view style="margin-right:35px;">
					<img :src="item.avatar" alt="" style="width:64px;height:64px;border-radius:50%">
					<view class="font-lg">{{item.username}} </view>
				</view>
				<view>
					<view class="font-lg">{{item.text}} </view>
					<view class="font-lg">{{timestampToTime(item.rateTime)}} </view>
				</view>
				
			</view>
			
		</view>
	</view>
	</view>
</template>

<script>
	import {mapMutations,mapActions,mapState} from 'vuex'
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	import divider from "@/components/common/divider.vue"
	import uniRate  from "@/components/uni-ui/uni-rate/uni-rate.vue"
	import price from "@/components/common/price.vue"
	export default {
		components: {
			uniListItem,
			price,
			uniRate,
			divider
		},
		computed:{
			...mapState({
				userid:(state)=>state.user.userid
			})
		},
		data() {
			return {
		    detailInfo:{},
			ishttp:false,
			time:'',
			arr:[],
			islike:false,
			usid:''
			}
		},
		methods: {
			openmyorder(detailInfo){
				uni.navigateTo({
					url:"../myorder/myorder",
					data:detailInfo
				})
			},
			opencart(detailInfo){
				const cartparams={userid:this.userid,goodid:this.detailInfo.id}
				
			uni.request({
					url:'http://127.0.0.1:5000/frontcart/addcart',
					data:cartparams,
					method:'POST',
					success:(res)=>{
						if(res.statusCode==200){
							uni.showToast({
								title:res.data.msg
							})
							uni.switchTab({
								url:'../cart/cart',
								success:(res)=>{
									console.log(res)
									console.log(detailInfo)
									// this.$bus.$emit('事件名', 额外参数)
									this.$bus.$emit('cartgood',detailInfo)
								}
							})
						}
					}
					
				})
			
				
			},
			...mapActions(['ADDLIKE','DELLIKE','GETLIKE']),
			...mapMutations(['addlike','inituserid']),
			likehandle(){
				if(this.islike){
					this.islike=false
					// 把数据库数据删除
					console.log("把数据库数据删除")
					
					this.DELLIKE({id:this.detailInfo.id})
					return
				}else{
					// 把数据库数据保存起来
					if(!this.userid){
						this.inituserid()
						// this.usid=this.$store.state.userid
						// console.log(this.userid,'smj',this.usid)
					}
					const params={userid:this.userid,goodid:this.detailInfo.id}
					console.log(params,566)
						this.islike=true
						this.ADDLIKE(params)
						console.log("把数据库数据保存起来")
						return
				}
				
			
			},
			  timestampToTime(timestamp) {
			    timestamp = timestamp ? timestamp : null;
			    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			    let Y = date.getFullYear() + '-';
			    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
			    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
			    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
			    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
			    return Y + M + D + h + m + s;
			  },
			  openshop(){
				  uni.navigateTo({
					  url:'../shop/shop'
				  })
			  }
	},

		onLoad() {
			
			uni.getStorage({
				key: 'sortInfo',
				success: (res) =>{
					console.log(res.data,19838035002);
					const sortInfo = JSON.parse(res.data)
					
					// const sortInfo = JSON.parse(sessionStorage.getItem('sortInfo'))
					console.log(sortInfo,'****')
					this.detailInfo = Object.assign({},sortInfo)
					if(this.detailInfo.imgUrl.indexOf('http')==-1){
						this.ishttp=true
					}else{
						this.ishttp=false
					}
					let arrInfo = this.detailInfo.ratings
					// const arrInfo = JSON.parse(this.detailInfo.ratings)
					// const sortInfo = JSON.parse(sessionStorage.getItem('sortInfo'))
					if(!Array.isArray(arrInfo)){
						arrInfo = JSON.parse(this.detailInfo.ratings)
					}
					this.arr=arrInfo
					uni.request({
						url:'http://127.0.0.1:5000/frontlike/getuserlike',
						data:{userid:this.userid},
						method:'GET',
						success:(res)=>{
							console.log(res,321)
							let newarr=res.data.data.filter(item=>item.id==this.detailInfo.id)
							console.log(newarr,'sjinm')
							if(newarr.length!=0){
								this.islike=true
							}else{
								this.islike=false
							}
							if(res.data.code==0){
								uni.showToast({
									title:res.data.msg
								})
							}
						}
						
					})
					
				}
			});
			
			
			
			// 1. 在created中订阅
			// 2. 回调函数需要写成箭头函数
			// this.$bus.$on('事件名', 事件回调函数)
			// this.$bus.$on('sortinfo', msg => {
			//    console.log(msg,'smj****')
			//    this.detailInfo=Object.assign({},msg)
			 
			//    // this.arr=this.detailInfo.ratings
			// })
			
			
			
			
			// if (e.detail) {
			// 	console.log(JSON.parse(e.detail))
			// 	const res=JSON.parse(e.detail)
				// this.detailInfo=res
				
				// console.log(this.detailInfo.imgUrl.indexOf('http'),520)
				// if(this.detailInfo.imgUrl.indexOf('http')==-1){
				// 	this.ishttp=true
				// }else{
				// 	this.ishttp=false
				// }
				// this.arr=JSON.parse(this.detailInfo.ratings)
				console.log(this.arr,6666)
				
			// }
		},
	}
</script>

<style>
.item{
	padding:12px 15px;
	background-color: antiquewhite;
	
}
</style>
