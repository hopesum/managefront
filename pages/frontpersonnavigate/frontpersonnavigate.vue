<template>
	<view class="navigation">
<<<<<<< HEAD
		<view class="ad">
			{{currentAddress}}
		</view>
		<button class="uni-button cus-btn " type="warn" @click="handleSendAddress">位置通知</button>
		<view class="map">
			<map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude"></map>
			<!-- 	<map id="myMap" style="width: 100%; height: 280px;" :latitude="latitude" :longitude="longitude"
				:markers="markers" show-location></map> -->
			<!-- <image src="@/imgs/ditu.png"></image> -->
		</view>
=======
		<!-- 	<view class="ad">
			{{currentAddress}}
		</view> -->
		<!-- <button class="uni-button cus-btn " type="warn" @click="handleSendAddress">位置通知</button> -->
		<map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude" :circles="circles" :markers="markers"></map>
		<!-- 	<map id="myMap" style="width: 100%; height: 280px;" :latitude="latitude" :longitude="longitude"
				:markers="markers" show-location></map> -->
		<!-- <image src="@/imgs/ditu.png"></image> -->
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
		<!-- 		<view class="mingxi qy-bg-white margin-bottom-sm">
			<view class="mx">
				<view class="mx_l qy-text-grey">预计送达</view>
				<view class="mx_r">2019/11/06 08:20（58分钟内送达）</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">距离取货点</view>
				<view class="mx_r">1.4km</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">预估重量</view>
				<view class="mx_r">1kg</view>
			</view>
		</view>
		<Process></Process>
		<view class="mingxi qy-bg-white margin-top-sm">
			<view class="mx">
				<view class="mx_l qy-text-grey">物品明细</view>
				<view class="mx_r">文件</view>
			</view>
			<view class="mxs">
				<view class="mxs_l qy-text-grey">距离取货点</view>
				<view class="mxs_r">
					<view class="mxs_r_01">12321321</view>
					<view class="mxs_r_02 qy-text-grey">复制</view>
				</view>
			</view>
			<view class="mx">
				<view class="mx_l qy-text-grey">备注</view>
				<view class="mx_r">这里是备注</view>
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
			<view class="foot_r"><button class="cu-btn round bg-yellow">立即抢单</button></view>
		</view>
	 -->
	</view>
</template>

<script>
<<<<<<< HEAD
	import Process from "@/components/qy/process.vue"
	import QQMapWX from "@/common/lib/qqmap-wx-jssdk.js"
	// import amapFile from "@/common/lib/amap-wx.130.js"
	// console.log(amapFile)
	var amapFile = require('./libs/amap-wx.js')
	// console.log(amap);
	// var amap = require('./libs/amap.js')
	// console.log(amap)
	var qqmapsdk;
=======
	// import Process from "@/components/qy/process.vue"
	// import QQMapWX from "@/common/lib/qqmap-wx-jssdk.js"
	// // import amapFile from "@/common/lib/amap-wx.130.js"
	// // console.log(amapFile)
	// var amapFile = require('./libs/amap-wx.js')
	// // console.log(amap);
	// // var amap = require('./libs/amap.js')
	// // console.log(amap)
	// var qqmapsdk;
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
	export default {
		data() {
			return {
				currentAddress: '',
				longitude: '',
<<<<<<< HEAD
				latitude: ''
			}
		},
=======
				latitude: '',
				circles:[],
				markers:[]
			}
		},

>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
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
<<<<<<< HEAD

			// this.getRules()
			this.getLocation()
=======
			this.getLocation()
			// this.getRules()
			// this.getLocation()
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
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
<<<<<<< HEAD
			async getLocation() {
				var that = this;
				var myAmapFun = new amapFile.AMapWX({
					key: '025d7f19096f0221210279fd56518165',
					secretKey:'629a3bc0406b091d7e143cb3afa90e76'
				});
				uni.showLoading()
				myAmapFun.getRegeo({
					success: function(data) {
						let res = data[0]
						that.currentLatitude = res.latitude
						that.currentLongitude = res.longitude
						that.currentAddress = res.regeocodeData.formatted_address
						uni.hideLoading()
						//成功回调
					},
					fail: function(info) {
						uni.hideLoading()
						//失败回调
						console.log(info)
					}
				})
			},



=======
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
					radius: 30
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
					iconPath: '../../imgs/0.png'
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
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e

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
<<<<<<< HEAD
			openConfirm() {
				uni.showModal({
					title: '请求授权当前位置',
					content: '需要获取您的地理位置，请确认授权',
					success: (res) => {
						if (res.confirm) {
							uni.openSetting(); // 打开地图权限设置
						} else if (res.cancel) {
							uni.showToast({
								title: '你拒绝了授权，无法获得周边信息',
								icon: 'none',
								duration: 1000
							})
						}
					}
				});
			},
			toLocation: function(obj) {
				// 改变地图中心位置
				mapCtx.moveToLocation(obj)
				// 移动标记点并添加动画效果
				mapCtx.translateMarker({
					markerId: 1,
					autoRotate: true,
					duration: 100,
					destination: {
						latitude: obj.latitude,
						longitude: obj.longitude,
					},
					animationEnd() {
						console.log('animation end')
					}
				})
			},
			// 
			poitap: function(e) {
				console.log(e, "poitap")
				var obj = e.detail
				self.toLocation(obj)
			}
		},
		components: {
			Process
		}
=======
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
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e
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
<<<<<<< HEAD
			height: 300px;
=======
			height: calc(100vh - 44px);
			width: 100%;
>>>>>>> 5fa16b68fb2e9654cc11ea7caa3984e63105278e

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