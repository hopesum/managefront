<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full><text class="uni-h6">美味餐饮品质＋，纯正美味香万家</text></uni-card>
		<uni-section title="wake食铺  欢迎您" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm" :modelValue="baseFormData" :rules="customRules">
					<uni-forms-item label="用户名" required name="account"><uni-easyinput v-model="baseFormData.account" placeholder="请输入用户名" /></uni-forms-item>
					<uni-forms-item label="密码" required name="password">
						<uni-easyinput type="password" v-model="baseFormData.password" placeholder="请输入密码" />
					</uni-forms-item>
					<uni-forms-item label="类型" required name="type"><uni-data-checkbox v-model="baseFormData.type" :localdata="types" /></uni-forms-item>
					<uni-forms-item label="头像" name="imgUrl">
						<button class="uni-button" @click="upload">选择头像</button>
						<img :src="baseFormData.imgUrl" alt="" srcset="" />
					</uni-forms-item>

					<!-- <image :src="imageUrl"></image> -->
					<!-- <button @click="submitimage">上传文件</button> -->
				</uni-forms>

				<button class="main-bg-color" @click="submit('baseForm')">注册</button>
			</view>
		</uni-section>
	</view>
</template>

<script>
import uniSegmentedControl from '@/components/uni-ui/uni-segmented-control/uni-segmented-control.vue';
import uniEasyinput from '@/components/uni-ui/uni-easyinput/uni-easyinput.vue';
import uniSection from '@/components/uni-ui/uni-section/uni-section.vue';
import uniCard from '@/components/uni-ui/uni-card/components/uni-card/uni-card.vue';
import uniForms from '@/components/uni-ui/uni-forms/components/uni-forms/uni-forms.vue';
import uniFormsItem from '@/components/uni-ui/uni-forms/components/uni-forms-item/uni-forms-item.vue';
import uniDatetimePicker from '@/components/uni-ui/uni-datetime-picker/uni-datetime-picker.vue';
import uniDataCheckbox from '@/components/uni-ui/uni-data-checkbox/uni-data-checkbox.vue';
import uniFilePicker from '@/components/uni-ui/uni-file-picker/uni-file-picker.vue';
export default {
	components: {
		uniForms,
		uniCard,
		uniFormsItem,
		uniSection,
		uniEasyinput,
		uniSegmentedControl,
		uniDataCheckbox,
		uniDatetimePicker,
		uniFilePicker
	},
	data() {
		return {
			// 头像路径
			// imageUrl: '',
			// 图片设置
			imageStyles: {
				width: 64,
				height: 64,
				border: {
					radius: '50%'
				}
			},
			// 基础表单数据
			baseFormData: {
				account: '',
				password: '',
				type: 2,
				imgUrl: []
			},

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

			// 自定义表单校验规则
			customRules: {
				account: {
					rules: [
						{
							required: true,
							errorMessage: '账号不能为空'
						}
					]
				},
				password: {
					rules: [
						{
							required: true,
							errorMessage: '密码不能为空'
						}
					]
				}
			}
		};
	},
	computed: {},
	onLoad() {},
	onReady() {
		// 设置自定义表单校验规则，必须在节点渲染完毕后执行
		this.$refs.baseForm.setRules(this.customRules);
	},
	methods: {
		// submitimage() {
		// 	uni.chooseFile({
		// 		count: 1, //默认100
		// 		type: 'image',
		// 		extension: ['.png', '.jpg'],
		// 		success: res => {
		// 			console.log(JSON.stringify(res.tempFilePaths));

		// 			// tempFilePath可以作为img标签的src属性显示图片
		// 			const tempFilePaths = res.tempFiles;
		// 			this.imageUrl = tempFilePaths;
		// 		}
		// 	});
		// },
		submit(ref) {
			this.$refs[ref]
				.validate()
				.then(res => {
					uni.request({
						url: 'http://127.0.0.1:5000/frontuser/addfrontuser',
						data: res,
						method: 'POST',
						success: res => {
							console.log(res);
							if (res.data.code == 0) {
								uni.showToast({
									title: `注册成功`
								});
								uni.navigateTo({
									url: '../login/login'
								});
							} else {
								uni.showToast({
									title: `注册失败`
								});
							}
						}
					});
				})
				.catch(err => {
					console.log('err', err);
				});
		},
		// success(e) {
		// 	const {tempFilePaths , tempFiles} = e
		// 	// console.log(e.tempFiles[0]);
		// 	// this.imageUrl=e.tempFiles[0].path
		// 	this.baseFormData.imgUrl=e.tempFiles[0].path
		// },
		upload() {
			let that = this;
			// this.$refs.files.upload();
			// console.log(e, 999);
			uni.chooseImage({
				count: 1,
				success(res) {
					const { tempFilePaths, tempFiles } = res;
					console.log(tempFiles);
					// that.baseFormData.imgUrl = tempFilePaths[0];

					//发送请求
					const file = tempFiles[0];
					console.log(file);
					uni.uploadFile({
						url: 'http://127.0.0.1:5000/frontuser/frontuserimg_upload',
						method: 'POST',
						name:'file',
						filePath:tempFilePaths[0],
						success: res => {
							let response = JSON.parse(res.data)
							console.log(response,'************');
							if(response.code===0){
								uni.showToast({
									title:'上传成功'
								})
								that.baseFormData.imgUrl ='http://127.0.0.1:5000'+ response.imgUrl
							}
						}
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.example {
	padding: 15px;
	background-color: #fff;
}

.segmented-control {
	margin-bottom: 15px;
}

.button-group {
	margin-top: 15px;
	display: flex;
	justify-content: space-around;
}

.form-item {
	display: flex;
	align-items: center;
}

.button {
	display: flex;
	align-items: center;
	height: 35px;
	margin-left: 10px;
}
.example-body {
	// padding: 8px;
	padding-top: 0;
	margin-bottom: 18rpx;
}

.custom-image-box {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.text {
	margin-right: 14rpx;
	font-size: 14px;
	color: #333;
}

.btnimg {
	display: inline-block;
	width: 150rpx;
	font-size: 12px;
}
</style>
