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
        this.$router.push('/')
      }
  }
}
</script>
<style scoped>
  .title{font-size:19px;color:#353535;padding:18px 0;}
</style>
