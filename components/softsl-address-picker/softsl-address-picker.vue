<template>
		<u-picker :show="show" ref="uPicker" :title="title" :showToolbar="showToolbar" :itemHeight="itemHeight"
			:cancelText="cancelText" :cancelColor="cancelColor" :confirmText="confirmText" :confirmColor="confirmColor"
			:loading="loading" :visibleItemCount="visibleItemCount" :defaultIndex="indexs" :columns="columns"
			:closeOnClickOverlay="closeOnClickOverlay" @confirm="confirm" @close="close" @cancel="cancel"
			@change="changeHandler" keyName="name">
		</u-picker>
</template>

<script>
	import data from "./data.json"
	export default {
		name:"address-picker",
		props: {
			show: {
				type: Boolean,
				default: () => false
			},
			title: {
				type: String,
				default: () => "选择地区"
			},
			showToolbar: {
				type: Boolean,
				default: () => true
			},
			itemHeight: {
				type: [String, Number],
				default: () => 44
			},
			cancelText: {
				type: String,
				default: () => "取消"
			},
			cancelColor: {
				type: String,
				default: () => "#909193"
			},
			confirmText: {
				type: String,
				default: () => "确认"
			},
			confirmColor: {
				type: String,
				default: () => "#3c9cff"
			},
			visibleItemCount: {
				type: [String, Number],
				default: () => 5
			},
			loading: {
				type: Boolean,
				default: () => false
			},
			indexs: Array,
			closeOnClickOverlay: Boolean,
			addressData:{
				type:Object,
				default:()=>{}
			}
		},
		data() {
			return {
				columns: [],
				province:[],
				city:[],
				area:[],
				street:[],
			};
		},
		created(){
			this.init();
		},
		methods:{
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					indexs,
					picker = this.$refs.uPicker
				} = e
				if (columnIndex === 0) {
					this.city = this.formatData(this.province[indexs[0]].id);
					this.area = this.formatData(this.city[indexs[1]].id);
					this.street = this.formatData(this.area[indexs[2]].id);
					picker.setColumnValues(1, this.city);
					picker.setColumnValues(2, this.area);
					picker.setColumnValues(3, this.street);
				}
				if (columnIndex === 1) {
					this.area = this.formatData(this.city[indexs[1]].id);
					this.street = this.formatData(this.area[indexs[2]].id);
					picker.setColumnValues(2, this.area);
					picker.setColumnValues(3, this.street);
				}
				if (columnIndex === 2) {
					this.street = this.formatData(this.area[indexs[2]].id);
					picker.setColumnValues(3, this.street);
				}
			},
			formatData(id){
				let arr = [];
				for(let key in data[id]){
					arr.push({
						name:data[id][key],
						id:key
					})
				}
				return arr;
			},
			init(){
				//省
				this.province = this.formatData(86);
				//市
				this.city = this.formatData(this.province[0].id);
				//区
				this.area = this.formatData(this.city[0].id);
				//街道
				this.street = this.formatData(this.area[0].id);
				this.columns = [
					this.province,this.city,this.area,this.street
				]
			},
			confirm(e) {
				let ids = e.value.map(i => i.id)
				let names = e.value.map(i => i.name)
				this.$emit("confirm", {ids:ids,names:names});
			},
			close() {
				this.$emit("close");
			},
			open() {
				this.$emit("open");
			},
			cancel(){
				this.$emit("cancel");
			}
		}
	}
</script>

<style>

</style>