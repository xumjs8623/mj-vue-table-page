import MjTablePagetaion from './component/mjTablePagetaion/main.vue'
import MJForm from './component/mjForm/main.vue'
const components = [
  MjTablePagetaion,
  MJForm
]
const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default {install}
