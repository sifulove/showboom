
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><router-link to="/tips/3-商务宴请"><img src="../assets/img/banner-1.jpg"></router-link></swiper-slide>
    <swiper-slide><router-link to="/tips/4-便利店"><img src="../assets/img/banner-2.jpg"></router-link></swiper-slide>
    <swiper-slide><router-link to="/shop/4-bluefrog蓝蛙-3"><img src="../assets/img/banner-3.jpg"></router-link></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
           autoplay:true,
           direction:'horizontal',
           loop:true,
           pagination: {
            el: '.swiper-pagination',
           },
        }
      }
    }
  }
</script>
<style scoped>
img{width: 100%;}
</style>
