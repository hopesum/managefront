<template>
	<view class="content">
		<view class="head">骑手端</view>
		<view class="page_bd page_bd_spacing">
			<view class="kind-list">
				<block v-for="(item, index) in list" :key="item.id">
					<view class="kind-list_item">
						<view :id="item.id" class="tui-flex kind-list_item-hd" :class="{ 'kind-list_item-hd_show': item.open }" @tap="kindToggle">
							<view class="tui-flex_item" style="color:#ff9448">{{ item.name }}</view>
							<image class="kind-list_img" :class="['tui-img-' + index]" :src="'/static/' + index + '.png'"></image>
						</view>
						<view class="kind-list_item-bd" :class="{ 'kind-list_item-bd_show': item.open }">
							<view class="tui-cells" :class="{ 'tui-cells_show': item.open }">
								<block v-for="(page, index2) in item.pages" :key="index2">
									<navigator :url="page.page" class="tui-cell tui-cell_access">
										<view class="tui-cell_bd">{{ page.name }}</view>
										<view class="tui-cell_ft tui-cell_ft_in-access"></view>
									</navigator>
								</block>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
				list: [
					{
						id: 'index',
						name: '全部应用',
						open: false,
						pages: [
							{
								name: '骑手首页',
								page: '../horsemanindex/horsemanindex'
							},
							{
								name: '实名认证',
								page: '../frontpersonfill/frontpersonfill'
							},
							{
								name: '骑手定位',
								page: '../frontpersonnavigate/frontpersonnavigate'
							},
							{
								name: '订单取消',
								page: '../frontpersoncanselfromshop/frontpersoncanselfromshop'
							},
							{
								name: '订单详情',
								page: '../frontpersonorderdetail/frontpersonorderdetail'
							},
						
							{
								name: '取消订单',
								page: '../frontpersoncancel/frontpersoncancel'
							},
						]
					},
				]
				
			}
		},
		components:{
			
		},
		onLoad() {},
		methods: {
			kindToggle: function(e) {
				
				var id = e.currentTarget.id,
					list = this.list;
				for (var i = 0, len = list.length; i < len; ++i) {
					if (list[i].id == id) {
						list[i].open = !list[i].open;
					} else {
						list[i].open = false;
					}
				}
				this.list = list;
			},
			jump_address(){
				uni.navigateTo({
					url: '/pages/address/address'
				});
			},
			jump_finish(){
				uni.navigateTo({
					url: '/pages/finish/finish'
				});
			},
			jump_message(){
				uni.navigateTo({
					url: '/pages/message/message'
				});
			},
			jump_orderdetail(){
				uni.navigateTo({
					url: '/pages/order-detail/order-detail'
				});
			},
			jump_money(){
				uni.navigateTo({
					url: '/pages/money/money'
				});
			},
			jump_integral(){
				uni.navigateTo({
					url: '/pages/integral/integral'
				});
			}
		}
	}
</script>

<style lang='scss'>
	.content {
		.head{padding: 25px 10px 30px 10px;text-align: center;font-size: 20px;background-color: #fff;
		}
			
		.tui-page-title {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 70rpx 0 30rpx 0;
		}
		
		.tui-logo {
			height: 120rpx;
			width: 120rpx;
		}
		
		.tui-title {
			font-size: 64rpx;
			padding-left: 20rpx;
			color: #333;
			position: relative;
		}
		
		.tui-link {
			color: #5677fc;
		}
		
		.tui-cell {
			padding: 10px 15px;
			position: relative;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
		
		.tui-cell:before {
			content: ' ';
			position: absolute;
			top: 0;
			right: 0;
			border-top: 1px solid #eaeef1;
			color: #eaeef1;
			left: 15px;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
		}
		
		.tui-cell:first-child:before {
			display: none;
		}
		
		.tui-cell_active {
			background-color: #f7f7f9;
		}
		
		.tui-cell_bd {
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			flex: 1;
		}
		
		.tui-cell_ft {
			text-align: right;
			color: #999;
		}
		
		.tui-cell_access {
			color: inherit;
		}
		
		.tui-cell_ft_in-access {
			padding-right: 13px;
			position: relative;
		}
		
		.tui-cell_ft_in-access:after {
			content: ' ';
			height: 11px;
			width: 11px;
			border-width: 2px 2px 0 0;
			border-color: #b2b2b2;
			border-style: solid;
			-webkit-transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
			transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
			position: absolute;
			top: 50%;
			margin-top: -7px;
			right: 2px;
		}
		
		.tui-form-preview_item {
			overflow: hidden;
		}
		
		.tui-flex {
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
		}
		
		.tui-flex_item {
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			flex: 1;
		}
		
		.tui-page-desc {
			color: #666;
			font-size: 28rpx;
			text-align: center;
			padding-bottom: 50rpx;
		}
		
		.tui-flex {
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
		
		.tui-cells {
			margin-top: 0;
			opacity: 0;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
			-webkit-transition: 0.3s;
			transition: 0.3s;
		}
		
		.tui-cells:before,
		.tui-cells:after {
			display: none;
		}
		
		.tui-cells_show {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		
		.tui-cell:before {
			right: 15px;
		}
		
		.kind-list_item {
			margin: 10px 0;
			background-color: #fff;
			border-radius: 2px;
			overflow: hidden;
		}
		
		.kind-list_item:first-child {
			margin-top: 0;
		}
		
		.kind-list_img {
			width: 20px;
			height: 20px;
		}
		
		.tui-img-1,
		.tui-img-2,
		.tui-img-8 {
			width: 32px !important;
			height: 32px !important;
		}
		
		.tui-img-7 {
			width: 28px !important;
			height: 28px !important;
		}
		
		.kind-list_item-hd {
			padding: 20px;
			-webkit-transition: opacity 0.3s;
			transition: opacity 0.3s;
		}
		
		.kind-list_item-hd_show {
			opacity: 0.4;
		}
		
		.kind-list_item-bd {
			height: 0;
			overflow: hidden;
		}
		
		.kind-list_item-bd_show {
			height: auto;
		}
		
		.tui-badge {
			position: absolute;
			width: 80rpx;
			height: 30rpx;
			border-radius: 30rpx 30rpx 30rpx 0;
			color: #fff;
			background: #eb0909;
			font-size: 25rpx;
			font-weight: 400;
			display: flex;
			align-items: center;
			justify-content: center;
			transform: scale(0.8) translateX(100%);
			transform-origin: center center;
			top: -8rpx;
			right: 0;
		}
	}
</style>
