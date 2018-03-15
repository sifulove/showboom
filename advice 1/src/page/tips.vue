<template>
    <div id="container" style="background:#4c3304;height: 100%;overflow: auto;">
      <div id="list">
        <Lstitle :data="title"></Lstitle>
        <Lsitem v-for="item in message" :key="item.id" :data="item"></Lsitem>
      </div>
    </div>
</template>
<script type="text/javascript">
  import Lstitle from '../components/title.vue'
  import Lsitem from '../components/item.vue'
  export default{
    data(){
      return{
        title:{key:true,title:'深夜食堂'},
        onoff:true,
        message:[],
        isend:false
      }
    },
    components:{Lstitle,Lsitem},
    mounted:function(){
      const data=this.$route.params.id.split('-');
      let minh=document.getElementById('list').offsetHeight;
      let onoff=true;
      let page=1;
      const self=this;
      this.title={key:true,title:data[1]}
      this.$global.ajax({
        url:self.$global.url,
        data:{
          id:data[0],
          service:'HotelAroundDetail',
          pro:'S003',
          page:page
        },
        method:'post',
        success:function(res){
          if(res.code==0){
            self.message=res.data.info;
            page=2;
          }
        },
        fail:function(res){
          alert('网络错误，请稍后重试。')
        }
      })
      document.getElementById('container').onscroll=function(e){

          const h1=document.getElementById('list').offsetHeight;
          const h=h1-document.documentElement.clientHeight;
          onoff=h1>minh?true:onoff;
          minh=h1>minh?h1:minh;
          const scrollTop = document.getElementById('container').scrollTop || document.getElementById('container').pageYOffset || document.getElementById('container').scrollTop;
          if(scrollTop>=h){
            if(onoff&&!self.isend){
               onoff=false;
               console.log(page)
               self.$global.ajax({
                 url:self.$global.url,
                 data:{
                   id:data[0],
                   service:'HotelAroundDetail',
                   pro:'S003',
                   page:page
                 },
                 method:'post',
                 success:function(res){
                   if(res.code==0){
                     self.message=res.data.info&&res.data.info.length>0?self.message.concat(res.data.info):self.message;

                     page++;
                     if(page>res.data.pageCount){
                       self.isend=true;
                     }
                   }
                 },
                 fail:function(res){
                   alert('网络错误，请稍后重试。')
                 }
               })

          }

        }
      }

    },
    methods:{
  }
}
</script>
<style scoped>

</style>
