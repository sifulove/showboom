<template>
    <div style="font-size:0;">
      <Lstitle :data="title"></Lstitle>
      <img style="width:100%;" src="../assets/img/1.jpg" alt="">
      <Lsmenu :data="menu"></Lsmenu>
      <p class="limit"><i>我是有底线的哦</i></p>
    </div>
</template>
<script type="text/javascript">
  import Lstitle from '../components/mainTitle.vue'
  import Lsmenu from '../components/menu.vue'
  export default{
    data(){
      return{
        title:{key:false,title:'一公里美食'},
        menu:null
       }
    },
    components:{Lstitle,Lsmenu},
    mounted:function(){
      const self=this;
      this.$global.ajax({
        url:self.$global.url,
        method:'post',
        data:{
          imei:this.$global.imei,
          service:'HotelAround',
          pro:'S003'
        },
        success:function(res){
          if(res.code==0){
            self.menu=res.data;
          }
        },
        fail:function(res){
          alert('网络错误，清稍后重试。')
        }
      })
      // this.$api.GetMenu({
      //   data:{
      //     imei:this.$global.imei,
      //     service:'HotelAround',
      //     pro:'S003'
      //   },
      //   fn:function(res){
      //     if(res.data.code==0){
      //       self.menu=res.data.data;
      //     }
      //   }
      // })
    },
    methods:{

  }
}
</script>
<style scoped>
   .limit{height: 0px;line-height: 1px;border-top:1px dashed #bfbfbf;margin:34px 0 18px;text-align: center;}
   .limit i{font-size:11px;color:#939393;display: inline-block;font-style: normal;background: #fff;padding: 0 10px;height: 11px;margin-top: -1px;}
</style>
