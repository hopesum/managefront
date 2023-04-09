<template>
	<view class="login" >
	  <van-nav-bar title="登录"  />
      <view class="qkw" >如花</view>
		<view class='dl'>
		  <view class='dl_l'>登录</view>
		  <view class='dl_r'>注册</view>
		  <view class='arrow arrow-up'></view>
		</view>
		<view class='name'>
			<view class="name_l"><text class="iconfont icon-phone" ></text></view>
			<view class="name_r"><input class="uni-input" focus placeholder="请输入" /></view>
		</view>
		<view class='yzm'>
			<view class="name_l"><text class="iconfont icon-mail" ></text></view>
			<view class="name_r"><input class="uni-input" focus placeholder="请输入短信验证码" /></view>
			<view class="yzm_r">发送验证码</view>
		</view>
		<view class='btn'>登录</view>
		<view class='wj'>忘记密码</view>
	</view>
</template>

<script>
	export default {
		data() {
			return { 
			};
		},
		components: { },
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">  
.login{background-color: #fff;min-height: 100vh;
	.qkw{background-color: #1A61D9;color: #EDF3FE;font-size: 22px;text-align: center;padding: 60px 0;}
	.dl{color: #EDF3FE;display: flex;background-color: #1A61D9;padding: 10px 0;position: relative;}
	.dl_l{width: 50%;text-align: center;}
	.dl_r{width: 50%;text-align: center;}
	.arrow { display: inline-block; width: 0px; height: 0px; border: 6px solid transparent; overflow: hidden;position: absolute;left: 23%;bottom: 0px;}
	.arrow-up { border-top: none; border-bottom-color: #EDF3FE; }
	.name{padding: 20px 0px 5px ;margin: 15px 20px;border-bottom: 1px solid #F4F4F4;display: flex;}
	.name_l{padding: 3px 10px 0 0;}
	.yzm{padding: 6px 0px;border-bottom: 1px solid #F4F4F4;margin: 10px 20px;display: flex;}
	.yzm_l{padding: 3px 10px 0 0;}
	.name_r{width: 60%;}
	.yzm_r{background-color: #44BB00;color: #fff;line-height: 30px;padding: 0 10px;font-size: 12px;margin-left: 15px;border-radius: 3px;}
	.btn{margin: 50px 20px 10px;background-color: #44BB00;color: #fff;height: 45px;text-align: center;line-height: 45px;border-radius: 3px;}
	.wj{padding: 0 20px;text-align: right;color: #4A4A4A;font-size: 12px;}
}	
</style>
