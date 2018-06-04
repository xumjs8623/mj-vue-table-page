import TablePagetaion from './component/tablePagetaion/main.vue'
const components = [
  TablePagetaion
]
const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default {install}
