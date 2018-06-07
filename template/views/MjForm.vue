<template>
  <div>
    <el-button type="primary" @click="dialogTag=true">打开表单弹窗</el-button>
    <el-button type="primary" @click="dialogTag=false">关闭表单弹窗</el-button>
    <el-dialog title="" :visible="dialogTag">
      <mj-form :visible="dialogTag" :formData="formData" @getValue="getValue" @cancle="dialogTag=false"></mj-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogTag: true,
      formData: [
        {
          field: 'id',
          value: 1
        },
        {
          type: 'text',
          field: 'name',
          label: '姓名',
          value: '张三',
          validate: [
            {required: true, message: '请输入活动名称', trigger: 'blur'}
          ]
        }, {
          type: 'password',
          field: 'password',
          label: '密码',
          value: '张三'
        }, {
          type: 'select',
          field: 'role',
          label: '角色',
          value: 1,
          data: [
            {
              label: '管理员',
              value: 1
            },
            {
              label: '会员',
              value: 2
            }
          ]
        }, {
          type: 'radio',
          field: 'sex',
          label: '性别',
          value: 1,
          data: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        }, {
          label: '创建时间',
          type: 'time',
          field: 'time',
          value: '2017-11-11 01:01:11'
        }]
    }
  },
  methods: {
    getValue (value) {
      console.log(value)
    }
  }
}
</script>
