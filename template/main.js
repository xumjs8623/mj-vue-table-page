import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import vueAdminElement from '../src'
Vue.use(vueAdminElement)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
