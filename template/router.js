import Vue from 'vue'
import Router from 'vue-router'
import MjTablePagetion from './views/MjTablePagetion.vue'
import MjForm from './views/MjForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mjTablePagetion',
      component: MjTablePagetion
    },
    {
      path: '/mjForm',
      component: MjForm
    }
  ]
})
