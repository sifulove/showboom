<template>
       <div v-on:click="skip" class="title">
         {{data.title}}
       </div>
</template>
<script type="text/javascript">
  export default{
    props:{
      data:Object
    },
    data(){
      return{
      }
    },
    mounted:function(){

    },
    methods:{
      skip:function(event){
        if(!this.data.key){return false;}
        this.$router.back(-1)
      }
  }
}
</script>
<style scoped>
  .title{background: rgba(0,0,0,0.35) url(../assets/img/6.png)  no-repeat;background-position: 10px center;background-size: 19px 19px;font-size:19px;color:#353535;padding:18px 0;text-align: center;position: fixed;top: 0;width: 100%;z-index: 100;color: #fff;}
</style>
