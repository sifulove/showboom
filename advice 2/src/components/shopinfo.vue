<template lang="html">
  <div class="">
       <div class="imgSize">
         <img :src="data.img" alt="">
       </div>
       <div class="tips">
         <p>人均消费：￥{{data.price}}元/人</p>
         <p style="background:fff ;line-height: 20px;padding-right: 50px;">地址：{{data.address}}<img style="vertical-align:sub;width:13px;margin-left:3px;" src="../assets/img/daohang.png"></p>
         <p>营业时间：{{data.timeing}}</p>
         <p>电话：{{data.tel}}</p>
         <p v-if="data.type">菜系：{{data.type}}</p>
         <p style="position:relative;">评价：<i><span v-for="item in data.mark.split('、')">{{item}}</span></i></p>
         <span v-bind:style="styleObject" class="store" v-on:click="store">{{storeinfo}}</span>
       </div>
  </div>
</template>

<script>
export default {
  props:{
    data:Object
  },
  data(){
    return{
      styleObject: {
        backgroundImage:'url('+require('../assets/img/store-1.png')+')'
      },
      storeinfo:'收藏'
    }
  },
  mounted:function(){
    if(this.data.store){
      this.styleObject={backgroundImage:'url('+require('../assets/img/store-2.png')+')'}
    }else {
      this.styleObject={backgroundImage:'url('+require('../assets/img/store-1.png')+')'}
    }
  },
  methods:{
    store:function(){
      if(this.data.store){return false;}else{this.data.store=true;this.storeinfo='已收藏';this.styleObject={backgroundImage:'url('+require('../assets/img/store-2.png')+')'}}
    }
  }
}
</script>

<style lang="css" scoped>
.tips .store{line-height: 12px;position: absolute;top:14px;right:15px;font-size: 12px;color: #888888;padding-top: 18px;background-position:  center 0 ;background-repeat: no-repeat;background-size: 15px;}
.tips p{margin-top: 11px;font-size: 16px;color: #555555;line-height: 14px;}
.tips{text-align: left;padding-left: 15px;background: #fff;padding-top: 3px;position: relative;padding-bottom: 25px;}
/* .tips i{position: absolute;right: 0;top:-5px;} */
.tips i span{display: inline-block;padding: 3px 10px;font-size: 12px;height: 12px;line-height: 18px;color: #fc972a;border: 1px solid #fc972a;margin-right: 13px;text-indent: 0;}
</style>
