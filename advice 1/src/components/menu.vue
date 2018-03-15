<template>
   <div style="font-size:0;" class="">
      <!-- <router-link v-on:click="count($event)" style="display:block;padding:10px;padding-bottom:0;" v-for="item in data" :key="item.id" :to="'/tips/'+item.id+'-'+item.server_name">
        <img style="width:100%;" :src="item.server_img" alt="">
      </router-link> -->
      <div style="display:block;padding:10px;padding-bottom:0;" v-for="item in data" :key="item.id">
        <img :data-name="item.server_name" :data-id="item.id" v-on:click="count($event)" style="width:100%;" :src="item.server_img" alt="">
      </div>
   </div>
</template>
<script type="text/javascript">
  export default{
    props:{
      data:Array
    },
    data(){
      return{
      }
    },
    mounted:function(){
    },
    methods:{
     count:function(e){
       const dataid=e.target.dataset.id;
       const self=this;
       this.$global.ajax({
         url:self.$global.url,
         method:'post',
         data:{
           id:dataid,
           service:'counter',
           pro:'S003'
         },
         success:function(res){
           console.log(res)
         }
       })
       this.$router.push('/tips/'+e.target.dataset.id+'-'+e.target.dataset.name);
     }
  }
}
</script>
<style scoped>
</style>
