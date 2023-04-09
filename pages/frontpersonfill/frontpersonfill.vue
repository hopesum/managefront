<template>
	<view class="fill">
		<view class="bg-white padding margin-bottom-sm" @tap="NumSteps">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num"  :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="bg-white margin-bottom-sm">
			<view class="cu-form-group ">
				<view class="title">姓<span class="padding-left padding-right"></span>名</view>
				<input placeholder="请输入" name="input"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title">性<span class="padding-left padding-right"></span>别</view>
				<view> 
					<radio-group @change="radioChange">
						<radio name="name1" class="radio" :checked="radio=='A'?true:false" value="A"></radio>男
						<span class="padding-left"></span>
						<radio name="name1" class='radio' :checked="radio=='B'?true:false" value="B"></radio>女
					</radio-group>
				</view>

			</view>
			<view class="cu-form-group ">
				<view class="title">申请业务</view>
				<view> 
					<radio-group @change="radioChange">
						<radio name="name1" class="radio" :checked="radio=='A'?true:false" value="A"></radio>外卖
						<span class="padding-left-sm"></span>
						<radio name="name1" class='radio' :checked="radio=='B'?true:false" value="B"></radio>代驾
						<span class="padding-left-sm"></span>
						<radio name="name1" class='radio' :checked="radio=='B'?true:false" value="B"></radio>货运
						<span class="padding-left-sm"></span>
						<radio name="name1" class='radio' :checked="radio=='B'?true:false" value="B"></radio>家政
					</radio-group>
				</view>
			
			</view>
			<view class="cu-form-group ">
				<view class="title">身份证号</view>
				<input placeholder="请输入" name="input"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title">户籍所在地</view>
				<input placeholder="请输入" name="input"></input>
			</view>
		</view>
		<view class="pic bg-white padding">
			<view class="pic_01">
				<img src="@/imgs/shen.png"></img>
				请上传身份证正面
			</view>
			<view class="pic_01">
				<img src="@/imgs/shen.png"></img>
				请上传身份证反面
			</view>
			<view class="pic_01">
				<img src="@/imgs/shen.png"></img>
				请上传手持身份证照片
			</view>
			<view class="pic_01">
				<img src="@/imgs/shen.png"></img>
				请上传个人自拍照
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
					name: '实名认证'
				}, {
					name: '申请类型'
				}, {
					name: '现场培训'
				}, ],
				num: 0,
				radio: 'A',
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
			};
		},
		methods:{
			radioChange(){
				
			},
			NumSteps() {
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1				
			},
			
		}
	}
</script>

<style lang="scss">
.fill{
	.pic{display: flex;flex-wrap: wrap;justify-content: space-between;
		.pic_01{width: 46%;text-align: center;padding-bottom: 5px;line-height: 25px;
			img{width: 100%;height: 120px;border-radius: 5px;box-shadow: 0 0 5px #EDEDED;}
		}
	}
}
</style>
