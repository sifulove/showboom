<template lang="html">
  <div class="" style="margin-top:13px;background:#fff;padding:0 15px;">
     <div class="titlea">
        <div class="border">
          <p>精品推荐</p>
        </div>
     </div>
     <div class="contain clear">
       <v-touch v-for="item,index in data" class="imgSize items" v-on:tap="show(index)">
         <img :src="item" alt="">
       </v-touch>
     </div>
     <v-touch v-if="bigger" class="bigger" v-on:panstart="start" v-on:panmove="move" v-on:panend="end" v-on:tap="close">
       <v-touch v-bind:style="{left:left+'px',transition:during+'s'}" class="bigcontain">
         <v-touch  v-for="item,index in data" class="imgSize" v-bind:style="{width:'100%',position:'absolute',left:index*100+'%'}">
           <img  style="" :src="item" alt="">
         </v-touch>
       </v-touch>
     </v-touch>
  </div>
</template>
<script>
export default {
  props:{
    data:Array
  },
  data(){
    return{
      bigger:false,
      styleObject:{
        width:100*this.data.length+'%'
      },
      index:0,
      startx:0,
      left:0,
      width:0,
      during:0.5
    }
  },
  mounted:function(){
    this.left=0-this.index*document.body.scrollWidth;
    this.width=document.body.scrollWidth;
  },
  methods:{
    show:function(index){
      this.index=index;
      this.left=0-this.index*document.body.scrollWidth;
      this.bigger=true;
    },
    close:function(e){
      this.bigger=e.target.className=='bigger'?false:true;
    },
    start:function(e){
      this.startx=e.center.x;
    },
    move:function(e){
      let a=e.center.x-this.startx
      this.left=a;
    },
    end:function(e){
      if(e.center.x-this.startx>0){
        this.index=this.index-1<0?0:this.index-1;
      }else if(e.center.x-this.startx==0){
      }else{
        this.index=this.index+1>this.data.length-1?this.data.length-1:this.index+1;
      }
      this.left=0-this.index*this.width;
    }
  }
}
</script>

<style lang="css" scoped>
.bigcontain img{width: 100%;height: 230px;}
.bigcontain{width:100%;overflow:visibility;margin-top:50%;transition:.5s;position: absolute;left:0;}
.bigger{width: 100%;overflow: hidden;position: fixed;height: 100%;top: 0;background: black;left:0;z-index:11111;}
.items{float: left;width: 50%;text-align: left;padding-bottom: 15px;}
.items:nth-of-type(2n){text-align: right;}
.items img{height: 110px;width:95%; }
.titlea{padding: 25px 0;text-align: center;text-indent: 0;}
.titlea p{font-size: 16px;color: #555555;position: relative;top:-8px;margin: 0 20px;background: #fff;padding: 0 3px;}
.border{background: #888888;height: 1px;display: inline-block;}
</style>
