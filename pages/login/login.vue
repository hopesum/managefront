<template>
	<view class="box">
		           <uni-section title="欢迎您" type="line">
						<view class="example">
							<!-- 自定义表单校验 -->
							<uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData" >
								<uni-forms-item label="账号" required name="account">
									<uni-easyinput v-model="customFormData.account" placeholder="请输入账号" style="borderColor:'#ff6543'"/>
								</uni-forms-item>
								<uni-forms-item label="密码" required name="password">
									<uni-easyinput type="password" v-model="customFormData.password" placeholder="请输入密码" />
								</uni-forms-item>
								<uni-forms-item label="类型" required name="type">
									<view class="checkclass">
										<uni-data-checkbox v-model="customFormData.type" :localdata="types" />
										
									</view>
									
									</uni-forms-item>
							</uni-forms>
							<button  class="main-bg-color" @click="submit('customForm')">登录</button>
						</view>
					</uni-section>
					
					<view class="register">还没有账号?  
					<text class="regi" @click="gotoregister">立即注册</text></view>
					</view>
		</template>
	
	
	<script>
		
		import uniSegmentedControl from "@/components/uni-ui/uni-segmented-control/uni-segmented-control.vue"
		import uniEasyinput from "@/components/uni-ui/uni-easyinput/uni-easyinput.vue"
		import uniSection from "@/components/uni-ui/uni-section/uni-section.vue"
		import uniCard from "@/components/uni-ui/uni-card/components/uni-card/uni-card.vue"
		import uniForms from "@/components/uni-ui/uni-forms/components/uni-forms/uni-forms.vue"
		import uniFormsItem from "@/components/uni-ui/uni-forms/components/uni-forms-item/uni-forms-item.vue"
		import uniDatetimePicker from "@/components/uni-ui/uni-datetime-picker/uni-datetime-picker.vue"
		import uniDataCheckbox from "@/components/uni-ui/uni-data-checkbox/uni-data-checkbox.vue"
		import {mapMutations} from 'vuex'
		export default {
			components:{
				uniForms,
				uniCard,
				uniFormsItem,
				uniSection,
				uniEasyinput,
				uniSegmentedControl,
				uniDataCheckbox,
				uniDatetimePicker,
			},
			data() {
				return {
		// 单选数据源
		types: [
			{
				text: '商家',
				value: 1
			},
			{
				text: '顾客',
				value: 2
			},
			{
				text: '外卖员',
				value: 3
			}
		],
				
					customFormData: {
						account: '',
						password: '',
						type:'',
					
					},
					// 自定义表单校验规则
					customRules: {
						account: {
							rules: [{
								required: true,
								errorMessage: '账号不能为空'
							}]
						},
						password: {
							rules: [{
								required: true,
								errorMessage: '密码不能为空'
							}]
						},
						type:{
							rules: [{
								required: true,
								errorMessage: '请选择类型'
							}]
						}
	
					}
				
			}},
			
			computed: {
			
			},
			onLoad() {},
			onReady() {
				// 设置自定义表单校验规则，必须在节点渲染完毕后执行
				this.$refs.customForm.setRules(this.customRules)
			},
			methods: {
		...mapMutations(['setuserid']),
				submit(ref) {
					this.$refs[ref].validate().then(res => {
						console.log('success', res);
						const params=res
						uni.showToast({
							title: `校验通过`,
							success:(res)=>{
								uni.request({
									url:'http://127.0.0.1:5000/frontuser/frontcheckLogin',
									data:params,
									method:"POST",
									success:(res)=>{
									
										if(res.data.code==0){
											let frontinfo=JSON.parse(JSON.stringify(res.data.data[0]))
											this.setuserid(frontinfo.id)
											console.log(frontinfo,333);
											uni.setStorage({
												key: 'frontuserinfo',
												data: frontinfo,
												success: function () {
													console.log('success保存用户信息成功');
												},
												
											});
											if(res.data.role=='外卖员'){
												uni.navigateTo({
													url:'../aboutperson/aboutperson'
												})
											}else{
												console.log(res,996)
												uni.switchTab({
													url: '/pages/index/index'
												});
												uni.showToast({
													title:res.data.msg,
													
												})
											}
										
										}else{
											uni.showToast({
												title:res.data.msg,
												
											})
										}
									},
									
									
								})
							}
						})
					}).catch(err => {
						console.log('err', err);
					})
				},
				gotoregister(){
					console.log(86451)
					uni.navigateTo({
						url:"../register/register"
					})
				}
			}
		}
	</script>


<style>
		.example {
			padding: 15px;
			background-color: #fff;
		}
			
		.register{
			position:relative;
			left:400rpx;
			font-size:13px;
			color:#ccc;
			
		}
		.regi{
			margin-left:10rpx;
			color:black;
			font-size:14px;
		}
		.checkclass{
			margin-top:7px;
		}
</style>