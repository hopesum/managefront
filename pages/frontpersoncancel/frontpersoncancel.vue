<template>
	<view class="cancel">
		<view class="title">请选择取消原因</view>
		<view class="padding flex flex-direction ">
			<button class="cu-btn margin-tb-sm lg round" :class="[xuan==0?'lines-yellow' :'lines-gray' ]"
			@click="xuan=0">联系不上顾客</button>
			<button class="cu-btn margin-tb-sm lg round" :class="[xuan==1?'lines-yellow' :'lines-gray' ]"
			@click="xuan=1">顾客地址有变</button>
			<button class="cu-btn margin-tb-sm lg round" :class="[xuan==2?'lines-yellow' :'lines-gray' ]"
			@click="xuan=2">顾客定位错误</button>
			<button class="cu-btn margin-tb-sm lg round" @click="xuan=3"
			:class="[xuan==3?'lines-yellow' :'lines-gray' ]">车坏了/没电等意外</button>
		</view>
		<view class="qita">
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="其他取消理由"></textarea>
		</view>
		<view class="padding flex flex-direction margin-top-xl ">
			<button class="cu-btn bg-yellow lg round">确认取消</button>
		</view>
		<view class="liaojie qy-text-grey"><view class="iconfont icon-bangzhu"></view>了解取消规则</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				xuan:0
			};
		}
	}
</script>

<style lang="scss">
.cancel{background-color: #fff;min-height: 100vh;
	.title{padding: 30px 0 0px;text-align: center;font-size: 18px;}
	.qita{border: 1px solid #EFEFEF;margin: 0 10px;border-radius: 5px;box-shadow: 0px 0px 4px #EFEFEF;padding: 10px 5px;
		textarea{width: 100%;height: 100px;}
	}
	.liaojie{justify-content: center;display: flex;padding: 10px;}
}
</style>
