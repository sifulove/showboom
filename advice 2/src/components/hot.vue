<template lang="html">
  <div style="background:#fff;">
     <p><img :src="data.img"></p>
     <div>
        <h3 class="title">{{data.name}}</h3>
        <div class="tip">
           <i class="detail" style="margin-right:5px;"><img src="../assets/img/price.png">￥{{data.price}}</i>
           <i class="detail"><img src="../assets/img/store.png">{{data.store}}</i>
           <div class="mark">
             <span v-for="list in data.mark.split('、')">{{list}}</span>
           </div>
        </div>
     </div>
     <p v-if="dataIndex+1!=dataMax" class="limit"></p>
  </div>
</template>

<script>
export default {
  props:{
    data:Object,
    dataIndex:Number,
    dataMax:Number
  },
  data(){
    return{
    }
  },
  mounted:function(){
  }
}
</script>

<style lang="css" scoped>
.limit{height: 8px;background: #f0f0f0;}
.title{font-size: 17px;color: #555555;text-align: left;text-indent: 15px;margin: 15px 0 20px;height: 15px;line-height:15px;}
.tip{text-align: left;text-indent: 15px;font-size: 12px;color: #888888;padding-bottom: 18px;position: relative;}
.tip img{width: 10px;margin-right: 2px;}
.mark{position: absolute;right: 0px;top:-5px;}
.mark span{display: inline-block;padding: 3px 10px;font-size: 12px;height: 12px;line-height: 18px;color: #fc972a;border: 1px solid #fc972a;margin-right: 13px;text-indent: 0;}
</style>
