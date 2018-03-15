import load from './load.vue'

const component = {
  install: function(Vue){
    Vue.component('loading',load)
  }
}
export default component
