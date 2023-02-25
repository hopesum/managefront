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
		
				
					customFormData: {
						account: '',
						password: '',
					
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
		
				submit(ref) {
					this.$refs[ref].validate().then(res => {
						console.log('success', res);
						uni.showToast({
							title: `校验通过`
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
</style>