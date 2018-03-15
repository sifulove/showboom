import Vue from 'vue'
import App from './App'
import router from './router'
import url from './assets/js/base'
import VueTouch from 'vue-touch'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import loading from './components/loading'
Vue.use(loading)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$global={imei:url.getQueryString('imei'),ajax:url.ajax,url:url.url}
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
