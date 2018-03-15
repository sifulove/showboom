<template>
    <div :style="'background-image:url('+data.background+')'" class="contain">
        <!-- <img style="opacity:0.6;" :src="data.img[0]" alt=""> -->
        <div class="main">
            <i v-if="data.shop_cuisine" class="right">{{data.shop_cuisine}}</i>
            <div class="title">
               {{data.shop_name}}
            </div>
            <div class="hot">
               <img style="width:13px;margin:0px 3px;" v-for="item in hot" :src="item" alt="">
            </div>
            <p class="common">人均消费：￥{{data.shop_consumption}}元/人</p>
            <p class="common">地址：{{data.shop_address}}</p>
            <p class="common">营业时间：{{data.shop_hours}}</p>
            <p style="margin-bottom:19px;" class="common">电话：{{data.shop_tel}}</p>
            <div class="desc">
              <i v-for="dataimg in data.img"  class="three"><img :src="dataimg" alt=""></i>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
  export default{
    props:{
      data:Object
    },
    data(){
      return{
        hot:null
      }
    },
    mounted:function(){
      let hot;
      switch(this.data.shop_star)
      {
      case '1':
        hot=['/static/img/fire_1.png','/static/img/fire_2.png','/static/img/fire_2.png','/static/img/fire_2.png','/static/img/fire_2.png']
        break;
      case '2':
        hot=['/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_2.png','/static/img/fire_2.png','/static/img/fire_2.png']
        break;
      case '3':
        hot=['/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_2.png','/static/img/fire_2.png']
        break;
      case '4':
        hot=['/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_2.png']
        break;
      case '5':
        hot=['/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_1.png','/static/img/fire_1.png']
        break;
      default:
        hot=['/static/img/fire_2.png','/static/img/fire_2.png','/static/img/fire_2.png','/static/img/fire_2.png','/static/img/fire_2.png']
      }
    this.hot=hot;
    },
    methods:{

  }
}
</script>
<style scoped>
  .desc{padding-bottom: 20px; }
  .three{display: inline-block;width: 30%;}
  .three img{width: 80%;height:80px;}
  .common{margin-bottom: 13px;text-align: left;padding: 0 30px;}
  .hot{margin-bottom: 25px;font-size:0;}
  .right{position: absolute;top: 0;left:0;width: 45px;font-style: normal;color:#fff;font-size:13px;background: #fdb723;text-align: center;width: 140px;line-height: 40px;transform: rotateZ(-45deg);left: -50px;letter-spacing: 2px;}
  .main{overflow: hidden;font-size:13px;color: #777777;padding:32px 0 0;margin:0 15px;background: #fff;border-radius: 5px;-webkit-box-shadow:0px 3px 3px #333333; box-shadow:0px 3px 3px #333333;min-height: 100px;position: relative;}
  .contain{background-color: #fff;padding-bottom:25px;padding-top: 116px;background-size: 100% 224px;margin-bottom: 16px;background-repeat: no-repeat;}
  .title{font-size:18px;color: #555555;letter-spacing: 1px;margin-bottom: 11px;}
</style>
