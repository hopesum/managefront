<template>
	<view class="navigation">
		<!-- 	<view class="ad">
			{{currentAddress}}
		</view> -->
		<!-- <button class="uni-button cus-btn " type="warn" @click="handleSendAddress">位置通知</button> -->
		<map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude" :circles="circles" :markers="markers" @markertap="addressclick"></map>
	
	
				<view class="mingxi qy-bg-white margin-bottom-sm">
			<view class="mx">
				<view class="mx_l qy-text-grey">预计送达</view>
				<view class="mx_r">{{orderinfo.deliveryTime?orderinfo.deliveryTime:'暂无'}}</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">取物点</view>
				<view class="mx_r">山河饼局</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">送达地点</view>
				<view class="mx_r">{{orderinfo.deliverAddress?orderinfo.deliverAddress:"暂无"}}</view>
			</view>
		</view>
		<!-- <Process>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</Process> -->
		<view class="mingxi qy-bg-white margin-top-sm">
			<view class="mx">
				<view class="mx_l qy-text-grey">订单状态</view>
				<view class="mx_r">{{orderinfo.orderState?orderinfo.orderState:'暂无'}}</view>
			
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey">订单号</view>
				<view class="mxs_r">
					<view class="mxs_r_01">{{orderinfo.orderNo?orderinfo.orderNo:'暂无'}}</view>
					<view class="mxs_r_02 qy-text-grey">复制</view>
				</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">备注</view>
				<view class="mx_r">{{orderinfo.remarks?orderinfo.remarks:'暂无'}}</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey">收入详情</view>
				<view class="mxs_r">
					<view class="mxs_r_01">时段奖励</view>
					<view class="mxs_r_02 ">¥2.5</view>
				</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey"></view>
				<view class="mxs_r">
					<view class="mxs_r_01">平台配送费</view>
					<view class="mxs_r_02 ">¥2.5</view>
				</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey"></view>
				<view class="mxs_r">
					<view class="mxs_r_01">小费</view>
					<view class="mxs_r_02 ">¥2.5</view>
				</view>
			</view>
		</view>
		<view class="H50"></view>
		<view class="foot">
			<view class="foot_l">
				<view class="foot_l_01 qy-text-red">¥<span>2.5</span></view>
				<view class="foot_l_02">小费 ¥ 2.0</view>
			</view>
			<view class="foot_r"><button class="cu-btn round bg-yellow" @click="jump_fill(orderinfo.orderNo)">立即抢单</button></view>
		</view>
	 
	</view>
</template>

<script>
	// import Process from "@/components/qy/process.vue"
	// import QQMapWX from "@/common/lib/qqmap-wx-jssdk.js"
	// // import amapFile from "@/common/lib/amap-wx.130.js"
	// // console.log(amapFile)
	// var amapFile = require('./libs/amap-wx.js')
	// // console.log(amap);
	// // var amap = require('./libs/amap.js')
	// // console.log(amap)
	// var qqmapsdk;
	export default {
		data() {
			return {
				currentAddress: '',
				longitude: '',
				latitude: '',
				circles:[],
				markers:[],
				orderinfo:{}
			}
		},

		onShow() {
			// qqmapsdk = new QQMapWX({
			// 	key: '5ZUBZ-M2XHJ-3LYFT-DGUNO-MYHH7-GSFAS'
			// });
			// qqmapsdk.search({
			// 	keyword: '酒店',
			// 	success: function(res) {
			// 		console.log(res);
			// 	},
			// 	fail: function(res) {
			// 		console.log(res);
			// 	},
			// 	complete: function(res) {
			// 		console.log(res);
			// 	}
			// });

			// console.log('6666')
			// self = this
			// 获取当前map
			// mapCtx = wx.createMapContext('myMap')
			// self.getAuthorizeInfo()
			// uni.getLocation({
			// 	type: 'gcj02',
			// 	success: (res) => {
			// 		this.latitude = res.latitude
			// 		this.longitude = res.longitude
			// 		console.log('当前位置的经度：' + res.longitude);
			// 		console.log('当前位置的纬度：' + res.latitude);
			// 	}
			// });
			// uni.onLocationChange(function (res) {
			// 			console.log('纬度：' + res.latitude);
			// 			console.log('经度：' + res.longitude);
			// 		});
			// console.log(888)
			// uni.chooseLocation({
			// 	success: (res) => {
			// 		console.log('位置名称：' + res.name);
			// 		console.log('详细地址：' + res.address);
			// 		console.log('纬度：' + res.latitude);
			// 		console.log('经度：' + res.longitude);
			// 	}
			// })
			// console.log(898)
		},
		onLoad() {
			this.getLocation()
			this.getnessinfo()
			// this.getRules()
			// this.getLocation()
			// this.getSignRecord()


			// uni.request({
			// 	url: 'https://apis.map.qq.com/ws/location/v1/network',
			// 	method: 'POST',
			// 	Header: 'Content-Type:application/json',
			// 	data: {
			// 		key: "5ZUBZ-M2XHJ-3LYFT-DGUNO-MYHH7-GSFAS",
			// 		device_id: 869896021034807
			// 	},

			// 	success: (res) => {
			// 		console.log('success')
			// 	}
			// })
			// uni.getLocation({
			// 	success:(e)=>{
			// 		console.log(e)
			// 		// console.log(latitude,longitude,888)

			// 	}
			// uni.onLocationChange(function (res) {
			// 	console.log('纬度：' + res.latitude);
			// 	console.log('经度：' + res.longitude);
			// });
			// console.log(888)
			// uni.chooseLocation({
			// 	success: (res) => {
			// 		console.log('位置名称：' + res.name);
			// 		console.log('详细地址：' + res.address);
			// 		console.log('纬度：' + res.latitude);
			// 		console.log('经度：' + res.longitude);
			// 	}
			// })

			// this.getAuthorizeInfo()
			// this.getLocationInfo()
			// this.openConfirm()
			// this.toLocation()
		},

		methods: {
			jump_fill(no){
				uni.request({
					url:"http://127.0.0.1:5000/order/editorderstate",
					method:'POST',
					data:{orderNo:no,orderState:'配送中'},
					success:(res)=>{
						console.log(res,"真好")
						uni.showToast({
							title:'抢单成功',
							success:()=>{
								setTimeout(()=>{
								uni.navigateTo({
									url: '../horsemanindex/horsemanindex'
								});	
								},1000)
							}
						})
					}
				})
		
				
			},
			getnessinfo(){
				uni.getStorage({
					key:'orderinfodelivery',
					success:(res)=>{
						// const result=JSON.parse(res.info)
						console.log(res.data,888,996)
						this.orderinfo=JSON.parse(res.data)
					}
				})
			},
			addressclick(){
				console.log('点击了目标位置')
			// console.log(e,'点击了目标位置')	
			},
			getLocation() {
				let that = this
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log(res);
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						that.longitude = res.longitude
						that.latitude = res.latitude
						that.setCircles()
					}
				});
			},
			setCircles(){
				this.circles.push({
					longitude: this.longitude,
					latitude: this.latitude,
					radius: 20
				})
			},
			setMarkers(){
				this.markers.push({
					id: 1, // Number
					title: '11111111111111', // String-标注点名
					rotate: 180, // Number - 顺时针旋转的角度，范围 0 ~ 360，默认为 0
					alpha: 1, // 默认1，无透明，范围 0 ~ 1
					latitude: this.latitude,
					longitude: this.longitude,
					width: 30,
					height: 30,
					iconPath: '../../imgs/0.jpg'
				})
			}
			// async getLocation() {
			// 	debugger
			// 	var that = this;
			// 	var myAmapFun = new amapFile.AMapWX({
			// 		key: '025d7f19096f0221210279fd56518165',
			// 		secretKey: '629a3bc0406b091d7e143cb3afa90e76'
			// 	});
			// 	uni.showLoading()
			// 	myAmapFun.getRegeo({
			// 		success: function(data) {
			// 			console.log(data);
			// 			let res = data[0]
			// 			that.currentLatitude = res.latitude
			// 			that.currentLongitude = res.longitude
			// 			that.currentAddress = res.regeocodeData.formatted_address
			// 			uni.hideLoading()
			// 			//成功回调
			// 		},
			// 		fail: function(info) {
			// 			uni.hideLoading()
			// 			//失败回调
			// 			console.log(info)
			// 		}
			// 	})
			// },

			// chooseLocation() {
			// 	let that = this
			// 	uni.chooseLocation({
			// 		success: function(res) {
			// 			that.latitude = res.latitude
			// 			that.longitude = res.longitude
			// 			that.address = res.address
			// 			that.$refs.redialog.open()
			// 		}
			// 	});
			// },
			// async getLocation() {
			// 	var that = this;
			// 	var myAmapFun = new amapFile.AMapWX({
			// 		key: 'e5129a400ca9e8cdd6d239205f81241f'
			// 	});
			// 	console.log(myAmapFun);
			// 	uni.showLoading()
			// 	myAmapFun.getRegeo({
			// 		success: function(data) {
			// 			// let res = data[0]
			// 			// that.currentLatitude = res.latitude
			// 			// that.currentLongitude = res.longitude
			// 			// that.currentAddress = res.regeocodeData.formatted_address
			// 			// uni.hideLoading()
			// 			//成功回调
			// 		},
			// 		fail: function(info) {
			// 			uni.hideLoading()
			// 			//失败回调
			// 			console.log(info)
			// 		}
			// 	})
			// },
			// getAuthorizeInfo() {
			// 	uni.authorize({
			// 		scope: 'scope.userLocation',
			// 		success() { // 允许授权
			// 			self.getLocationInfo();
			// 		},
			// 		fail() { // 拒绝授权
			// 			self.openConfirm();
			// 			console.log("你拒绝了授权，无法获得周边信息")
			// 		}
			// 	})
			// },
			// 获取地理位置
			// getLocationInfo() {
			// 	uni.getLocation({
			// 		type: 'wgs84',
			// 		success(res) {
			// 			console.log(res, "当前位置");
			// 			// 移动到当前位置
			// 			self.toLocation(res)
			// 			self.latitude = res.latitude;
			// 			self.longitude = res.longitude;
			// 		}
			// 	});
			// },
			// 再次获取授权
			// 当用户第一次拒绝后再次请求授权
			// openConfirm() {
			// 	uni.showModal({
			// 		title: '请求授权当前位置',
			// 		content: '需要获取您的地理位置，请确认授权',
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				uni.openSetting(); // 打开地图权限设置
			// 			} else if (res.cancel) {
			// 				uni.showToast({
			// 					title: '你拒绝了授权，无法获得周边信息',
			// 					icon: 'none',
			// 					duration: 1000
			// 				})
			// 			}
			// 		}
			// 	});
			// },
			// toLocation: function(obj) {
			// 	// 改变地图中心位置
			// 	mapCtx.moveToLocation(obj)
			// 	// 移动标记点并添加动画效果
			// 	mapCtx.translateMarker({
			// 		markerId: 1,
			// 		autoRotate: true,
			// 		duration: 100,
			// 		destination: {
			// 			latitude: obj.latitude,
			// 			longitude: obj.longitude,
			// 		},
			// 		animationEnd() {
			// 			console.log('animation end')
			// 		}
			// 	})
			// },
			// 
			// poitap: function(e) {
			// 	console.log(e, "poitap")
			// 	var obj = e.detail
			// 	self.toLocation(obj)
			// }
		},
		// components: {
		// 	Process
		// }
	}
</script>

<style lang="scss">
	.ad {
		font-size: 12px;
		color: #cccccc;
		text-align: center;
		margin-top: 10px;
	}

	.navigation {
		.map {
			// height: calc(100vh - 44px);
			height: calc(100vh - 250px);
			// height:50%;
			width: 100%;

			image {
				width: 100%;
				height: 300px;
			}
		}

		.mingxi {
			padding: 10px;

			.mx {
				display: flex;
				padding-bottom: 10px;

				.mx_l {
					width: 90px;
					flex-shrink: 0;
					text-align: right;
					padding-right: 20px;
				}

				.mx_r {
					color: #767676;
				}
			}

			.mxs {
				display: flex;
				padding-bottom: 10px;

				.mxs_l {
					width: 90px;
					flex-shrink: 0;
					text-align: right;
					padding-right: 20px;
				}

				.mxs_r {
					display: flex;
					justify-content: space-between;
					color: #767676;
					flex-grow: 1;
				}
			}
		}

		.H50 {
			height: 100px;
		}

		.foot {
			position: fixed;
			bottom: 0;
			background-color: #fff;
			width: 100%;
			padding: 10px;
			display: flex;
			justify-content: space-between;

			.foot_l {
				display: flex;

				.foot_l_01 span {
					font-size: 24px;
					padding-right: 5px;
				}

				.foot_l_02 {
					padding-top: 8px;
					color: #767676;
				}
			}
		}
	}
</style>