<template>
	<view class="animated fadeIn faster" style="background: #F5F5F5;overflow: auto;height:100%;">
		<loading-plus v-if="beforeReady"></loading-plus>
		<!-- 		<uni-nav-bar :right-text="isedit?'完成':'编辑'" title="购物车" statusBar
		 :shadow="false" @click-right="handeledit(isedit)" :fixed="true"></uni-nav-bar>
	<uni-nav-bar :right-text="isedit?'完成':'编辑'" title="购物车" statusBar
			 :shadow="false" @click-right="handeledit(isedit)" :fixed="true"></uni-nav-bar> -->

		<!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white" v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50upx;"></view>
			<text class="text-light-muted mx-2">购物车还是为空</text>
			<view class="px-2 py-1 border border-light-secondary rounded" hover-class="bg-light-secondary" @click="openindex">去逛逛</view>
		</view>

		<!-- 购物车商品列表 -->
		<view class="bg-white px-2" v-else>
			<view class="d-flex a-center py-3 border-bottom border-light-secondary" v-for="(item, index) in list" :key="index">
				<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" @click="selectItem($event, item.id)">
					<checkbox color="#FD6801" style="boder-color:#FD6801" :value="`Number(item.id)`" />
				</label>

				<image
					:src="'http://127.0.0.1:5000/upload/imgs/goods_img/' + item.imgUrl"
					mode="widthFix"
					style="height: 150rpx;width: 150rpx;"
					class="border border-light-secondary rounded p-2 flex-shrink"
				></image>

				<view class="flex-1 d-flex flex-column pl-2" @click="opendetail(item)">
					<view class="text-dark" style="font-size: 35upx;">{{ item.name }}</view>
					<!-- 规格属性 -->
					<view class="span-12 pl-3 d-flex flex-column">
						<view class="font text-light-muted line-h-md mb-auto">{{ item.gooDesc }}</view>

						<view class="font-sm text-light-muted">
							类别：{{ item.category }}
							<br />
							销量： {{ item.sellCount }}
						</view>
						<view class="mt-auto d-flex j-sb">
							<price :text="item.price"></price>
							<!-- <view class="a-self-end"> -->
							<uni-rate :readonly="true" :value="item.rating" />
							<!-- </view> -->
						</view>
					</view>
				</view>
				<view class=""><image src="../../static/images/deleteaddress.png" style="width:32px;height:32px;" @click="delgood(item.id)"></image></view>
			</view>
			<view class="p-3">
				<button style="width:80px;display:inline-block;background-color:orange;margin-left:15%" @click="clearcart">清空</button>
				<button style="width:100px;display:inline-block;margin:0 10px;background-color:red" @click="delsome">批量删除</button>
				<!-- <button style="width:80px;display:inline-block;background-color:#FD6801" @click="buygoods">购买</button> -->
			</view>
		</view>

		<view class="text-center main-text-color font-md font-weight mt-5">为你推荐</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-3 pt-3">
			<view style="background: #F5F5F5;z-index: 2;" class="px-2 position-absolute">你可以还喜欢</view>
			<view class="position-absolute" style="height: 1upx;left: 0;right: 0;background-color: #DDDDDD;"></view>
		</view>
		<!-- 为你推荐 -->

		<view class="row j-sb bg-white"><common-list v-for="(item, index) in hotList" :key="index" :item="item" :index="index"></common-list></view>
	</view>
</template>

<script>
import divider from '@/components/common/divider.vue';
import uniRate from '@/components/uni-ui/uni-rate/uni-rate.vue';
import price from '@/components/common/price.vue';
import commonList from '@/components/common/common-list.vue';
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';

import loading from '@/common/mixin/loading.js';
import { mapState } from 'vuex';

export default {
	mixins: [loading],
	components: {
		uniNavBar,
		commonList,
		divider,
		uniRate,
		price
	},
	computed: {
		...mapState({
			userid: state => state.user.userid
		})
	},
	onLoad() {
		uni.request({
			url: 'http://127.0.0.1:5000/frontcart/getusercart',
			data: { userid: this.userid },
			method: 'GET',
			success: res => {
				if (res.data.data.length >= 1) {
					this.disableSelectAll = false;
					this.list = res.data.data;
				}
			}
		});
		uni.request({
			url:'http://127.0.0.1:5000/frontlike/getuserlike',
			data:{userid:this.userid},
			method:'GET',
			success:(res)=>{
				console.log(res.data.data,321)
				res.data.data.forEach(item=>{
					uni.request({
						url:"http://127.0.0.1:5000/goods/list",
						data:{currentPage:1,pageSize:1000,category:item.category},
						method:"GET",
						success:(res)=>{
							res.data.data.forEach(item=>{
								this.hotList.push(item)
							})
							
							console.log(res,'你好厉害')
						}
					})
					
				})
				// this.hotList=res.data.data
				
				if(res.data.code==0){
					uni.showToast({
						title:res.data.msg
					})
					
				}
			}
			
		})
		
	},
	onShow() {
		this.getData();
		uni.request({
			url:'http://127.0.0.1:5000/frontlike/getuserlike',
			data:{userid:this.userid},
			method:'GET',
			success:(res)=>{
				console.log(res.data.data,321)
				res.data.data.forEach(item=>{
					uni.request({
						url:"http://127.0.0.1:5000/goods/list",
						data:{currentPage:1,pageSize:1000,category:item.category},
						method:"GET",
						success:(res)=>{
							res.data.data.forEach(item=>{
								this.hotList.push(item)
							})
							
							console.log(res,'你好厉害')
						}
					})
					
				})
				// this.hotList=res.data.data
				
				if(res.data.code==0){
					uni.showToast({
						title:res.data.msg
					})
					
				}
			}
			
		})
		
	},
	data() {
		return {
			isedit: false,
			disableSelectAll: true,
			list: [],
			hotList: [],
			checkFileIds: [],
			totalprice:0
		};
	},
	methods: {
		// buygoods(){
		// 	if(this.checkFileIds.length==0){
		// 		uni.showToast({
		// 			title:'请先选择购买食物'
		// 		})
		// 	}
		// 	this.checkFileIds.forEach((item)=>{
			
		// 		uni.request({
		// 			url: 'http://127.0.0.1:5000/goods/getgood',
		// 			data: { id: item },
		// 			method: 'GET',
		// 			success: res => {
		// 				console.log(res);
		// 			this.totalprice=res.data.data[0].price+this.totalprice
		// 				// this.getData();
		// 				console.log(this.totalprice)
		// 			}
		// 		});
		// 			console.log(this.totalprice,9865423)
		// 	})
		// },
		opendetail(item){
			const itemparams=Object.assign({},item)
			itemparams.imgUrl='/upload/imgs/goods_img/'+itemparams.imgUrl
		uni.setStorage({
			key: 'sortInfo',
			data: JSON.stringify(itemparams),
			success: function () {
				console.log('success');
			}
		});	
		uni.navigateTo({
			url:'../detail/detail'
		})
		},
		clearcart() {
			uni.request({
				url: 'http://127.0.0.1:5000/frontcart/clearcart',
				data: { userid: this.userid },
				method: 'GET',
				success: res => {
					console.log(res);
					this.getData();
				}
			});
		},
		delgood(id) {
			uni.request({
				url: 'http://127.0.0.1:5000/frontcart/delcart',
				data: { id: id },
				method: 'GET',
				success: res => {
					console.log(res);
					this.getData();
				}
			});
		},
		getData() {
			uni.request({
				url: 'http://127.0.0.1:5000/frontcart/getusercart',
				data: { userid: this.userid },
				method: 'GET',
				success: res => {
					if (res.data.data.length >= 1) {
						this.disableSelectAll = false;
						this.list = res.data.data;
					} else {
						this.disableSelectAll = true;
					}
				}
			});
		},
		delsome() {
			console.log(this.checkFileIds);
			console.log('开始批量删除');
			uni.request({
				url: 'http://127.0.0.1:5000/frontcart/batchdelcart',
				data: { ids: JSON.stringify(this.checkFileIds) },
				method: 'POST',
				success: res => {
					this.getData();
					console.log(res);
				}
			});
		},
		handeledit(isedit) {
			console.log(isedit, 888);
			if (!isedit) {
				this.isedit = true;
				return;
			}
		},
		openindex() {
			uni.switchTab({
				url: '../index/index'
			});
		},
		selectItem(a, v) {
			console.log(a, v);
			let index = this.checkFileIds.findIndex(id => id === v);
			if (index !== -1) {
				this.checkFileIds.splice(index, 1);
			} else {
				this.checkFileIds.push(v);
			}
			console.log(this.checkFileIds);
		}
	}
};
</script>

<style lang="scss"></style>
