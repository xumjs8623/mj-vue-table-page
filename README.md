# vue-admin-element
> vue-admin-element是一套基于element-ui封装的组件，主要目的是快速生成后台信息管理界面，减少在项目中的重复代码

## 安装
```
npm install vue-admin-element
```
## 快速上手

```js
// 引入vue-amap
import vueAdmin from 'vue-admin-element'
Vue.use(vueAdmin)
```

## 组件

### 表格分页组件
```js
<mj-table-pagetaion @getSelection="getSelection" :tableFrame="tablePagetaion.tableFrame" :apiAction="tablePagetaion.apiAction" :searchTag="tablePagetaion.searchTag" :searchKeyword="tablePagetaion.searchKeyword"></mj-table-pagetaion>
```
#### 参数
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
| tableFrame| 表格结构 | Object|—|—|
| apiAction| 请求数据的函数 | Function|—|—|
| searchTag| 搜索标签 | Boolean|—|—|
| searchKeyword| 搜索关键词 | Object |—|—|

#### 事件
|方法名|说明|回调参数|
|-|-|-|
| getSelection | 获取复选框选中的值 | rows
#### 示例
```js
tableFrame: {
  {
    prop: 'name',
    label: '姓名'
  },
  {
    cellType: 'slots',
    prop: 'action',
    label: '操作',
    renderCell: (scope) => {
      return (
        <el-button type="primary">
          编辑
        </el-button>
      )
    }
  }
}
```
```js
apiAction: (params) => {
return axios.get('/data/tableData.json', {params: params}).then(res => { return res.data }).catch(error => { console.log(error) })
}
```
```js
// 用于搜索按钮点击后进行搜索功能，只要把该值取一下反，table自动进行搜索
searchTag: false
```
```js
searchKeyword: {
  page: 1,
  limit: 10,
  keyword: ''
}
```
```js
getSelection: (rows) => {
  console.log(rows)
}
```
### 表单组件
```js
<mj-form :visible="dialogTag" :formData="formData" @getValue="getValue" @cancle="dialogTag=false"></mj-form>
```
#### 参数
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
| formData| 表单结构 | Array|—|—|

#### 事件
|方法名|说明|回调参数|
|-|-|-|
| getValue | 表单验证通过后提交的值 | formValues|
| cancle | 表单取消按钮后的回调 | —|

#### 示例
```js
formData: [
  {
    // 不设置类型则不会显示该字段
    field: 'id',
    value: 1
  }, {
    // 带表单验证
    type: 'text',
    field: 'name',
    label: '姓名',
    value: '张三',
    validate: [
      {required: true, message: '请输入活动名称', trigger: 'blur'}
    ]
  }, {
    // 密码字段
    type: 'password',
    field: 'password',
    label: '密码',
    value: '123456'
  }, {
    // 多选字段
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
    // 单选字段
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
    // 时间字段
    label: '创建时间',
    type: 'time',
    field: 'time',
    value: '2017-11-11 01:01:11'
  }
]
```
```js
// 点击提交后触发回调
getValue: (formValues) => {
  console.log(formValues)
}
```
```js
cancle: () => {
  // 一般用于点击取消按钮以后，关闭弹窗所用
}
```