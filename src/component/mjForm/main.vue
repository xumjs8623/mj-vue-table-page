<template>
  <div>
    <el-form :model="formData">
        <el-form-item v-for="(item, index) in formData" :key="index" :label="item.label" label-width="80px">
          <el-input placeholder="" v-model="item.value"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'mjForm',
  data () {
    return {
    }
  },
  props: {
    formData: {
      type: Array,
      default: () => {
        return [{
          type: 'text',
          field: 'name',
          label: '姓名',
          value: '张三'
        }]
      }
    }
  }
}
</script>
