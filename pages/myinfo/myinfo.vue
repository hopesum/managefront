<template>
	<view class="p-1 m-2">
		<image src="../../static/images/图片1.png" mode="widthFix"></image>
		<view
			class="row p-2 border-bottom border-light-secondary animated fadeIn faster d-flex j-c a-c" >
			<view class="span-3">
				<image :src="imgUrl"  class="w-100" style="width:64px;height:64px;border-radius:50%">
				</image>
			</view>
			
			<view class="span-10 pl-3 d-flex flex-column">
				<view class="font-md font-weight">账号：{{name}}</view>
				<view class="font-md font-weight">类型：{{newtype}}</view>
		
			</view>
			
			</view>
			<view class="font-md font-weight">{{title}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"",
				newtype:'',
			type:''	,
			imgUrl:"",
			name:''
			}
		},
		onShow(){
			console.log("chuxian")
		uni.getStorage({
			key:'frontuserinfo',
			success:(res)=>{
				console.log(res)
				this.type=res.data.type
				if(this.type==3){
					this.newtype='外卖员'
					this.title="春天不会迟到，外卖员准时帮你送到"
					console.log("waimy")
				}else if(this.type==2){
					this.newtype='顾客'
					this.title="我们将继续为您提供最真诚的服务，并不断努力做到“没有最好，只有更好”！"
				}else{
					this.newtype='商家'
					this.title="生意兴隆通四海，海阔天空任你飞，飞向云霄，一展凌云壮志。. 财源茂盛达三江，江深水远凭你游，游到龙宫，再现王者风采。"
					
				}
				console.log(this.type,999)
				this.imgUrl=res.data.imgUrl
				this.name=res.data.account
			}
		})	
		},
		onload(){
			uni.getStorage({
				key:'frontuserinfo',
				success:(res)=>{
					console.log(res)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
