import MjTablePagetaion from './component/mjTablePagetaion/main.vue'
import MjForm from './component/mjForm/main.vue'
import MjTags from './component/mjTags/main.vue'
const components = [
  MjTablePagetaion,
  MjForm,
  MjTags
]
const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default {install}
