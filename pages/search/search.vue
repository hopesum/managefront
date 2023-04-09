<template>
	<view>
		<!-- 自定义导航 -->
		
		<view class="d-flex a-center" style="height: 90rpx;" >
			<!-- 中间 -->
			<input type="text" v-model="keyword" 
			class="flex-1 bg-light rounded ml-3 px-2"
			style="height: 65rpx;" placeholder="麻辣烫"/>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"
			@click="search">
				搜索
			</view>
		</view>
	
		
		<card headTitle="热门搜索" 
		bodyCover="../../static/images/swiper4.jpg"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag v-for="(item,index) in hot" :key="index"
			:item="item" @click="quickSearch(item.name)"></color-tag>
		</view>
		
		<!-- 常用分类 -->
		<card headTitle="好评食物" :bodyPadding="true" :headBorderBottom="false">
			<color-tag v-for="(item,index) in cate" :key="index"
			:item="item" :color="false" @click="quickSearch(item.name)"></color-tag>
		</card>
		
		<template v-if="historyList.length > 0">
			<!-- 分割线 -->
			<divider />
			<!-- 搜索记录 -->
			<card headTitle="搜索记录">
				<view slot="right" class="font text-primary"
				@click="clearHistory">清除搜索记录</view>
				<uni-list-item v-for="(item,index) in historyList" :key="index" 
				:title="item" :showArrow="false" @click="quickSearch(item)"></uni-list-item>
			</card>
		</template>
		
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import colorTag from "@/components/search/color-tag.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,colorTag,uniListItem
		},
		data() {
			return {
				historyList:[], 
				keyword:"",
				keyword:"",
								hot:[
									{ name:'鸡排套餐' },
									{ name:'秘制卤肉盖饭' },
									{ name:'青椒肉丝炒饭' },
									{ name:'肉沫茄子盖饭' },
									{ name:'原味蒸蛋' },
								],
								cate:[
									{ name:'青椒猪肉串' },
									{ name:'功夫腿排套餐'},
									{ name:'拌凉面' },
									{ name:'汉堡' },
									{ name:'深V橙汁' },
									{ name:'鲁西牛肉酱' },
									{ name:'椒香脆笋鸡丁饭' },
									{ name:'营养肉燥蒸蛋' },
								],
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				// uni.navigateTo({
				// 	url: '../search-list/search-list',
				// });
				uni.switchTab({
					url:'../sort/sort'
				})
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text
		},
		onNavigationBarSearchInputConfirmed() {
			this.search()
		},
		onNavigationBarButtonTap() {
			this.search()
		},
		onShow() {
			// 加载历史记录
			let history = uni.getStorageSync('searchHistory')
			this.historyList =history ? JSON.parse(history) : []
		},
		methods: {
			quickSearch(name){
				this.keyword = name
				this.search()
			},
			search(){
				if (this.keyword === '') {
					return uni.showToast({
						title: '关键词不能为空',
						icon: 'none'
					});
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif				
				uni.navigateTo({
					url: '../search-list/search-list?keyword='+this.keyword
				});
				// uni.switchTab({
				// 	url:'../sort/sort'
				// })
				
				setTimeout(()=>{
					this.addHistory()
				},500)
			},
			// 加入搜索记录
			addHistory(){
				let index = this.historyList.indexOf(this.keyword)
				if (index === -1) {
					this.historyList.unshift(this.keyword)
				} else {
					this.historyList.unshift(this.historyList.splice(index,1)[0])
				}
				// 移除最后一条
				if (this.historyList.length > 6) {
					this.historyList.splice(this.historyList.length - 1,1)
				}
				uni.setStorageSync('searchHistory',JSON.stringify(this.historyList))
			},
			// 清除搜索记录
			clearHistory(){
				uni.showModal({
					title: '提示',
					content: '是否要清除搜索历史？',
					cancelText: '取消',
					confirmText: '清除',
					success: res => {
						if (res.confirm) {
							uni.removeStorageSync('searchHistory')
							this.historyList = []
						}
					},
				});
			}
		}
	}
</script>

<style>

</style>
