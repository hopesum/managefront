<template>
	<view class="p-3">
		<view class="d-flex a-center" style="margin-bottom:20px">
			<text style="width:65px;font-size:16px">店铺名称</text>
			<text class="flex-1 bg-light p-3" style="color:#ccc" >{{shopinfo.name}}</text>
			</view>  
		<view class="d-flex a-center" style="margin-bottom:20px">
			<text style="width:65px">店铺公告</text>
			<textarea class="flex-1 bg-light p-3"  style="color:#ccc" disabled v-model="shopinfo.bulletin"></textarea> 
		</view>

		<view class="d-flex a-center" style="margin-bottom:20px">
			<text style="width:65px">配送费</text>
			<text class="flex-1 bg-light p-3"  style="color:#ccc" >{{shopinfo.deliveryPrice}}</text>
		</view>
		<view  class="d-flex a-center"  style="margin-bottom:20px">
			<text style="width:65px">配送时间</text>
			<text class="flex-1 bg-light p-3"  style="color:#ccc" >{{shopinfo.deliveryTime}}</text>
		</view>

		<view  class="d-flex a-center"  style="margin-bottom:20px">
			<text style="width:65px">配送介绍</text>
			<text class="flex-1 bg-light p-3"  style="color:#ccc">{{shopinfo.description}}</text>
			
		</view>
		<view  class="d-flex a-center"  style="margin-bottom:20px">
			<text style="width:65px">店铺评分</text>
			<uni-rate :readonly="true" :value="shopinfo.score" />
		</view>
		<view class="d-flex a-center" style="margin-bottom:20px">
			<text style="width:65px">店铺销量</text>
			<text class="flex-1 bg-light p-3"  style="color:#ccc">{{shopinfo.sellCount}}</text>
			
		</view>

		<view class="d-flex a-center"  style="margin-bottom:20px">
			<text style="width:65px">店铺活动</text>
		<textarea v-model="shopinfo.supports"  class="flex-1 bg-light p-3"  style="color:#ccc"></textarea>	
		</view>
		<view class="d-flex a-center"  style="margin-bottom:20px">
			<text style="width:65px">营业时间</text>
			<text class="flex-1 bg-light p-3"  style="color:#ccc">{{shopinfo.date}}</text>
			
		</view>
		<view  class="d-flex a-center"  style="margin-bottom:20px">
			<text style="width:65px">店铺海报</text>
			</view>
		<view class="" v-for="(item,index) in picarr" :key="index">
			<image :src="`http://127.0.0.1:5000/upload/shop/${item}`"></image>		
		</view>
		
			<text style="width:65px">店铺评价</text>
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
</template>

<script>
import uniRate from '@/components/uni-ui/uni-rate/uni-rate.vue';

export default {
	components: {
	
		uniRate
	},
	data() {
		return {
			radomarr:[],
			arr:[],
			shopinfo: {},
			picarr:[]
		};
	},
	onShow() {
		  let num=Math.random()*20
		  let username=['匿名用户','coderwhy','BLUE','yolo','Nuyoah','自救者天救','圣经','吃货',"且听风","铃微光倾城","偷得浮生","雨晨的清风","烛光里的愿紫","色的彩虹","伊人泪满面青丝","茧微醉阳光","山月","山月不知心底事","秋日薄暮","秋日薄暮用","菊花煮竹叶青","人与海棠俱醉","星霜荏苒","星辰一年一循环","指岁月渐渐流逝","绛橘色的日落","温柔的人","森林","天空","孤鲸","晚风","萤火","星河","万顷","糖","香料","绛橘色的日落","闪耀旳白梦"]
		  let comment=['很喜欢的粥','超级好吃',"价格贵",'分量少','不推荐了，超级难吃',"味道真的不错，朋友都喜欢吃。","包装感觉干净卫生，外卖小哥送餐速度快，","实在是忍不住夸赞一下，色泽比较好，而且价格优惠价格实惠，","外卖打包的真的是非常的干净整洁，色味俱佳。","今天点的这家，没想到这么实惠的东西，好特别的非常的美味可口，没错！真的是特别的美味！","你没有听错，香味也非常的独特，是我吃到的非常优秀的食物，我以后还会再来购买的！","很不错的饭菜，价格未免也太实惠了吧，","味道超级无敌可以的，，数量足，快递也贼快，","整体还是非常不错的，超级满足，下次再来，实在是太好吃了，","这么良心的商家太少有了。"]
		   let png=['http://127.0.0.1:5000/avatar/1.jpg','http://127.0.0.1:5000/avatar/2.jpg','http://127.0.0.1:5000/avatar/3.jpg','http://127.0.0.1:5000/avatar/4.jpg','http://127.0.0.1:5000/avatar/5.jpg','http://127.0.0.1:5000/avatar/6.jpg','http://127.0.0.1:5000/avatar/7.jpg','http://127.0.0.1:5000/avatar/8.jpg','http://127.0.0.1:5000/avatar/9.jpg','http://127.0.0.1:5000/avatar/0.jpg']
		  let resultarr=[]
		  
		  for(var i=0;i<=num;i++){
		   const obj= {
		      username:username[Math.floor(Math.random()*39)],
		      rateTime:1680057011103*Math.random()*2,
		      rateType: 0,
		      text: comment[Math.floor(Math.random()*16)],
		      avatar:png[Math.floor(Math.random()*11)],
		    }
		    resultarr.push(obj)
		  }
		  this.radomarr=resultarr
		this.getData();
		uni.request({
			url:"http://127.0.0.1:5000/shop/ratings",
			method:'GET',
			success:(res)=>{
				console.log(res.data.data,36052)
				this.arr=[...res.data.data,...this.radomarr]
			}
		})
	},
	created() {
		this.getData();
	},
	methods: {
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
		getData() {
			uni.request({
				url: 'http://127.0.0.1:5000/shop/info',
				method: 'GET',
				success: res => {
					console.log(res);
					this.shopinfo = res.data.data;
					this.picarr=this.shopinfo.pics
				}
			});
		}
	}
};
</script>

<style>
	.rightitem{
		border:1px solid #ccc;
	}
</style>
