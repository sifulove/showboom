import Vue from 'vue'
import App from './App'
import router from './router'
import api from './axios/api'
import url from './assets/js/base'
Vue.prototype.$api=api
Vue.prototype.$global={imei:url.getQueryString('imei'),ajax:url.ajax,url:url.url}
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
