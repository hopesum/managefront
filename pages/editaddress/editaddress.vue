<template>
	<view class="box">
		<uni-forms ref="baseForm" :modelValue="baseFormData">
			<uni-forms-item label="姓名" required><uni-easyinput v-model="baseFormData.name" placeholder="请输入收货姓名" /></uni-forms-item>
			<uni-forms-item label="电话" required><uni-easyinput v-model="baseFormData.phone" placeholder="请输入手机号码" /></uni-forms-item>
			<uni-forms-item label="地址" required><uni-easyinput v-model="baseFormData.address" placeholder="请输入收货地址" @focus="openaddress" /></uni-forms-item>
		</uni-forms>
		<button @click="submitForm">保存</button>
		<softsl-address-picker :show="showLocation" @confirm="confirmdq" @cancel="showLocation = false"></softsl-address-picker>


	</view>
</template>

<script>
import uniForms from '@/components/uni-ui/uni-forms/components/uni-forms/uni-forms.vue';
import uniFormsItem from '@/components/uni-ui/uni-forms/components/uni-forms-item/uni-forms-item.vue';
import uniEasyinput from '@/components/uni-ui/uni-easyinput/uni-easyinput.vue';
import softslAddressPicker from '../../components/softsl-address-picker/softsl-address-picker.vue';
export default {
	components: {
		uniForms,
		uniEasyinput,
		uniFormsItem,
		softslAddressPicker
	},
	data() {
		return {
			addinfo:{
				province: '',
				city: '',
				county: '',
				village: ''
			},
			baseFormData: {
				name: '',
				phone: '',
				address: '',
				province: '',
				city: '',
				county: '',
				village: ''
			},
			userid: '',
			showss: true,
			showLocation: false,
			form: {
				area: ''
			},

			rules: {
				area: [
					{
						required: true,
						message: '请选择所在地区',
						trigger: ['change', 'blur']
					}
				]
			},

			show: false, // picker是否展示

			id: 8,
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [
				{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				},
				{
					latitude: 39.9,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}
			]
		};
	},
	onLoad(){
		uni.getStorage({
					key: 'addressinfo',
				
					success: (res)=> {
					  this.baseFormData=res.data
						// console.log('res',res);
						// this.addinfo.province=this.baseFormData.province
						// this.addinfo.city=this.baseFormData.city
						// this.addinfo.county=this.baseFormData.county
						// this.addinfo.village=this.baseFormData.village
				
					},
					
				});
	},
	
	methods: {
		openaddress() {
			this.showLocation = true;
		},
		submitForm() {
			let { name, phone, province, city, county, village,id } = this.baseFormData;
			let addressparams = { name, phone, province, city, county, village, userid: this.userid,id };
          uni.request({
			  url:'http://127.0.0.1:5000/frontaddress/editaddress',
			  method:'POST',
			  data:addressparams,
			  success:(e)=>{
				  console.log('www',e)
			
				  uni.showToast({
				  	title:e.data.msg,
				  	success:(es)=>{
						// console.log('毛护士',es)
						uni.navigateTo({
							url:'../showaddress/showaddress'
						})
					}
				  })
			  }
		  })
			console.log(addressparams, 886);
		},
		confirmdq(e) {
			console.log(985211, e);
			const stringsaddress = JSON.parse(JSON.stringify(e.names));
			this.baseFormData.province = e.names[0];
			this.baseFormData.city = e.names[1];
			this.baseFormData.county = e.names[2];
			this.baseFormData.village = e.names[3];

			console.log(stringsaddress, 999);
			let newstring = stringsaddress.join();
			console.log(newstring, 888);
			this.baseFormData.address = newstring;

			this.showLocation = false;
			console.log(this.baseFormData, 9866);

			uni.getStorage({
				key: 'frontuserinfo',
				success: res => {
					this.userid = res.data.id;
					console.log(this.userid, 360);
				}
			});
		},
		change() {
			this.show = true;
		},

		confirm(e) {
			// 省市区拼接
			this.form.area = e.province.label + e.city.label + e.area.label;
		}
	}
};
</script>

<style>
.addressbtn {
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	padding: 10rpx;
	height: 88rpx;
	line-height: 88rpx;
	background-color: '#FF6347';
}
.box {
	padding: 10px;
}
</style>
