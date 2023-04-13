<template>
  <view class="Process padding-xs" >
   <view class="process_01">
		<view class="process_01_l">
			<view class="process_01_l_01 qy-bg-yellow text-white">
				<view class="text">取</view>
			</view>
		</view>
		<view class="process_01_r">
			<view class="">地址</view>
			<span>山河饼局</span>
		</view>
	</view>
	<view class="process_01">
		<view class="process_01_l">
			<view class="process_01_l_01 qy-bg-red text-white">
				<view class="text">送</view>
			</view>
		</view>
		<view class="process_01_r">
			<view class="process_01_r_01">地址</view>
			<span>{{title}}</span>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  name: 'Title-c',
  props: ['title'],
  data() {
    return {
      id:"",
	  newtitle:''
    } 
  },
   mounted(){ 
	   // if(this.title.length>10){ console.log(this.title)}
	   console.log(Object.prototype.toString.call(this.title))
	  
	  // if(this.title.includes('city')){
		 // const title=JSON.parse(this.title)
		 // this.newtitle=title.province+title.city+title.county+title.village
	  // }else{
		 // this.newtitle= this.title
	  // }
	 
  }
}
</script>

<style lang="less">
.Process{background-color: #fff;padding: 10px;
	.process_01{display: flex;padding: 10px 0;justify-content: space-between;border-bottom: 1px solid #FAFAFA;
		.process_01_l{width: 10%;display:flex;align-items: center;
			.process_01_l_01{width: 20px;height: 20px;text-align: center;line-height: 20px;font-size: 12px;
			border-radius:16px 16px 16px 0;
			-webkit-transform:rotate(-45deg);
			-moz-transform: ratate(-45deg);
			transform:rotate(-45deg);
				.tex{transform:rotate(45deg);}
			}
		}
		.process_01_r{width: 88%;font-size: 16px;font-weight: 600;
			.process_01_r_01{padding-bottom: 5px;}
			span{font-size: 12px;font-weight: 100;}
		}
	}
	.icon-map{
	
	}
	
} 
</style>
