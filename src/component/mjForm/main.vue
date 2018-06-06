<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules">
        <el-form-item v-for="(item, index) in formData" :key="index" :label="item.label" label-width="80px" :prop="item.field">
          <!-- 文本输入类型 -->
          <template v-if="item.type === 'text'">
            <el-input placeholder="" v-model="item.value"></el-input>
          </template>
          <!-- 密码输入类型 -->
          <template v-if="item.type === 'password'">
            <el-input v-model="item.value" type="password" placeholder=""></el-input>
          </template>
          <!-- 下拉选择类型 -->
          <template v-if="item.type === 'select'">
            <el-select v-model="item.value" placeholder="">
              <el-option v-for="(subItem, subIndex) in item.data" :key="subIndex" :label="subItem.label" :value="subItem.value"></el-option>
            </el-select>
          </template>
          <!-- 单选框类型 -->
          <template v-if="item.type === 'radio'">
            <el-radio-group v-model="item.value">
              <el-radio v-for="(subItem, subIndex) in item.data" :key="subIndex" :label="subItem.label" :value="subItem.value"></el-radio>
            </el-radio-group>
          </template>
          <!-- 日期选择类型 -->
          <template v-if="item.type === 'time'">
            <el-date-picker type="date" placeholder="选择日期" v-model="item.value" style="width: 100%;"></el-date-picker>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">提交</el-button>
          <el-button>取消</el-button>
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
  computed: {
    form: function () {
      let formData = {}
      for (let x in this.formData) {
        formData[this.formData[x].field] = this.formData[x].value
      }
      return formData
    },
    rules: function () {
      let formRules = {}
      for (let x in this.formData) {
        if (this.formData[x].hasOwnProperty('validate')) {
          formRules[this.formData[x].field] = this.formData[x].validate
        }
      }
      return formRules
    }
  },
  props: {
    formData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    // 提交表单
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('getValue', this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
