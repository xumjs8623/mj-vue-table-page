import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import aaa from '../src'
Vue.use(aaa)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
