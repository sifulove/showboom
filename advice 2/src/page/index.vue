<template>
    <div style="font-size:0;">
      <Lstitle :data="title"></Lstitle>
      <Loop></Loop>
      <Lsmenu :data="menu"></Lsmenu>
      <p class="limit"></p>
      <div v-for="item,index in hot" v-on:click="skip(item.id,item.name,index)">
        <Hot :data="item" :dataIndex="index" :dataMax="hot.length"></Hot>
      </div>
    </div>
</template>
<script type="text/javascript">
  import Lstitle from '../components/mainTitle.vue'
  import Loop from '../components/loop.vue'
  import Lsmenu from '../components/menu.vue'
  import Hot from '../components/hot.vue'
  export default{
    data(){
      return{
        title:{key:false,title:'一公里美食'},
        menu:[{text:'深夜食堂',img:require('../assets/img/1_07.png'),id:0},{text:'本地推荐',img:require('../assets/img/2_09.png'),id:1},{text:'无肉不欢',img:require('../assets/img/3_11.png'),id:2},{text:'商务宴请',img:require('../assets/img/4_13.png'),id:3},{text:'便利店',img:require('../assets/img/5_15.png'),id:4}],
        hot:[  {id:1,img:require('../assets/img/shop/1/1/1.jpg'),name:'小郡肝串串香火锅',price:'119',store:234,mark:'干净卫生、朋友聚会、回头客多'},
          {id:2,img:require('../assets/img/shop/1/2/1.jpg'),name:'重庆辛麻道腰片火锅',price:'102',store:224,mark:'牛肉很赞、上菜快、菜品健康'}]
       }
    },
    components:{Lstitle,Lsmenu,Loop,Hot},
    mounted:function(){
      const self=this;
      // this.$global.ajax({
      //   url:self.$global.url,
      //   method:'post',
      //   data:{
      //     imei:this.$global.imei,
      //     service:'HotelAround',
      //     pro:'S003'
      //   },
      //   success:function(res){
      //     if(res.code==0){
      //       self.menu=res.data;
      //     }
      //   },
      //   fail:function(res){
      //     alert('网络错误，清稍后重试。')
      //   }
      // })
    },
    methods:{
      skip:function(id,name,index){
        this.$router.push('/shop/'+id+'-'+name+'-'+index)
      }
  }
}
</script>
<style scoped>
.limit{height: 8px;background: #f0f0f0;}
</style>
