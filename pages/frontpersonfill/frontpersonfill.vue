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
				<view class="title">姓<span class="padding-left padding-right"></span>&nbsp;&nbsp;名：</view>
				<input placeholder="请输入" name="input" v-model="name"></input>
			</view>
			<view class="cu-form-group " style="justify-content: flex-start;">
				<view class="title">性<span class="padding-left padding-right"></span>&nbsp;&nbsp;别：&nbsp;</view>
				<view> 
					<radio-group @change="radioChange">
						<radio name="name1" class="radio" :checked="radio=='男'?true:false" value="男"></radio>男
						<span class="padding-left"></span>
						<radio name="name1" class='radio' :checked="radio=='女'?true:false" value="女"></radio>女
					</radio-group>
				</view>

			</view>
			<view class="cu-form-group " style="justify-content: flex-start;">
				<view class="title">申请业务：</view>
				<view> 
					<radio-group @change="radioChangetype">
						<radio name="name1" class="radio" :checked="radio=='外卖'?true:false" value="外卖"></radio>外卖
						<span class="padding-left-sm"></span>
						<radio name="name1" class='radio' :checked="radio=='其它'?true:false" value="其它"></radio>其它
						<span class="padding-left-sm"></span>
					<!-- 	<radio name="name1" class='radio' :checked="radio=='B'?true:false" value="B"></radio>货运
						<span class="padding-left-sm"></span>
						<radio name="name1" class='radio' :checked="radio=='B'?true:false" value="B"></radio>家政 -->
					</radio-group>
				</view>
			
			</view>
			<view class="cu-form-group ">
				<view class="title">身份证号：</view>
				<input placeholder="请输入" name="input" v-model="idnumber"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title">户籍所在地：</view>
				<input placeholder="请输入" name="input" v-model="address"></input>
			</view>
		</view>
		<view class="pic bg-white padding">
			<view class="pic_01" @click="uploadimgone">
				<img v-if="oneimg" :src="oneimg"></img>
				<img v-else src="../../imgs/shen.png"></img>
				请上传身份证正面
			</view>
			<view class="pic_01" @click="uploadimgtwo">
<img v-if="twoimg" :src="twoimg"></img>
				<img v-else src="../../imgs/shen.png"></img>
				请上传身份证反面
			</view>
			<view class="pic_01" @click="uploadimgthree">
				<img v-if="threeimg" :src="threeimg"></img>
				<img v-else src="../../imgs/shen.png"></img>
				请上传手持身份证照片
			</view>
			<view class="pic_01" @click="uploadimgfour">
				<img v-if="fourimg" :src="fourimg"></img>
				<img v-else src="../../imgs/shen.png"></img>
				请上传个人自拍照
			</view>
		</view>
	<button class="addressbtn" style="background-color:royalblue" @click="start">开始认证</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idnumber:"",
				name:'',
				sex:'男',
				typeabout:'',
				address:"",
				numList: [{
					name: '基本信息'
				}, {
					name: '身份证明'
				}, {
					name: '认证成功'
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
				oneimg:'',
				twoimg:'',
				threeimg:"",
				fourimg:"",
				userid:''
			};
		},
		methods:{
			radioChangetype(e){
				this.typeabout=e.target.value
			},
			start(){
			uni.getStorage({
					key:'frontuserinfo',
					success:(res)=>{
						console.log(res.data.id)
						this.userid=res.data.id
					}
				})
				const params={name:this.name,sex:this.sex,idnumber:this.idnumber,typeabout:this.typeabout,address:this.address,oneimgurl:this.oneimg,twoimgurl:this.twoimg,threeimgurl:this.threeimg,fourimgurl:this.fourimg,userid:this.userid}
		uni.request({
			url: 'http://127.0.0.1:5000/deliveryman/adddeliveryInfo',
			data: params,
			method: 'POST',
			success: res => {
				console.log(res);
				if (res.data.code == 0) {
					uni.showToast({
						title: `实名成功`,
						success:()=>{
							this.NumSteps()
						uni.navigateTo({
							  url: '../aboutperson/aboutperson'
						});	
						}
						
					})
					
					
					
				
				} else {
					uni.showToast({
						title: `注册失败`
					});
				}
			}
		});
			
			},
			radioChange(e){
				this.sex=e.target.value
				console.log(this.name)
			console.log(e,'男女')	
			},
			NumSteps() {
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1				
			},
			uploadimgone(){
			uni.chooseImage({
				count:1,
				success:(res)=>{
					console.log(res)
				const {tempFilePaths,tempFiles}=res
				const file = tempFiles[0]
				
				uni.uploadFile({
					url: 'http://127.0.0.1:5000/deliveryman/deliveryimg_upload',
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
							this.oneimg ='http://127.0.0.1:5000'+ response.imgUrl
						}
					}
				});
				
				
				
				}
			})	
			},
			uploadimgtwo(){
			uni.chooseImage({
				count:1,
				success:(res)=>{
					console.log(res)
				const {tempFilePaths,tempFiles}=res
				const file = tempFiles[0]
				
				uni.uploadFile({
					url: 'http://127.0.0.1:5000/deliveryman/deliveryimg_upload',
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
							this.twoimg ='http://127.0.0.1:5000'+ response.imgUrl
						}
					}
				});
				
				
				
				}
			})	
			},
			uploadimgthree(){
			uni.chooseImage({
				count:1,
				success:(res)=>{
					console.log(res)
				const {tempFilePaths,tempFiles}=res
				const file = tempFiles[0]
				
				uni.uploadFile({
					url: 'http://127.0.0.1:5000/deliveryman/deliveryimg_upload',
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
							this.threeimg ='http://127.0.0.1:5000'+ response.imgUrl
						}
					}
				});
				
				
				
				}
			})	
			},
			uploadimgfour(){
			uni.chooseImage({
				count:1,
				success:(res)=>{
					console.log(res)
				const {tempFilePaths,tempFiles}=res
				const file = tempFiles[0]
				
				uni.uploadFile({
					url: 'http://127.0.0.1:5000/deliveryman/deliveryimg_upload',
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
							this.fourimg ='http://127.0.0.1:5000'+ response.imgUrl
							this.NumSteps()
						}
					}
				});
				
				
				
				}
			})	
			}
			
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
