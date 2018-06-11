import Vue from 'vue'
import Router from 'vue-router'
import MjTablePagetion from './views/MjTablePagetion.vue'
import MjForm from './views/MjForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 列表分页
    {
      path: '/mjTablePagetion',
      component: MjTablePagetion
    },
    // 表单
    {
      path: '/mjForm',
      component: MjForm
    },
    // 动态标签
    {
      path: '/mjTags',
      component: () => import('./views/MjTags.vue')
    }
  ]
})
