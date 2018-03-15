<template lang="html">
  <div class="container">
    <div class="loading">
      <div class="svg">
        <svg xmlns="" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
         <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(127.23 25 25)">
           <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
           </path>
         </svg>
      </div>
      <p class="text">加载中</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }

}
</script>

<style lang="css" scoped>
.container{position: fixed;top: 0;left:0;width: 100%;height: 100%;background: rgba(0,0,0,0.6)}
.loading{padding: 3px 0;text-align: center;position: absolute;top: 50%;left: 50%;width: 80px;background: #fff;margin-left: -40px;margin-top: -40px;}
.svg{width: 50px;display: inline-block;}
.text{font-size: 13px;letter-spacing: 1px;}
</style>
