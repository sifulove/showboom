<template>
   <div class="menu clear">
      <!-- <div style="display:block;padding:10px;padding-bottom:0;" v-for="item in data" :key="item.id">
        <img :data-name="item.server_name" :data-id="item.id" v-on:click="count($event)" style="width:100%;" :src="item.server_img" alt="">
      </div> -->
      <div class="list" v-for="item in data" :key="item.id" :data-id="item.id" :data-name="item.text" v-on:click="count($event)">
         <img :src="item.img">
         <p>{{item.text}}</p>
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
       let el=e.target.dataset.id?e.target:e.target.parentElement;
       const self=this;
       this.$router.push('/tips/'+el.dataset.id+'-'+el.dataset.name);
     }
  }
}
</script>
<style scoped>
.menu{border-top:1px solid #c2c2c2;border-bottom:1px solid #c2c2c2;}
.list{float: left;width: 20%;text-align: center;}
.list img{margin: 20px 0 14px;width: 34px;}
.list p{font-size:16px;color:#555555;padding-bottom: 21px;font-weight: 400;}
</style>
