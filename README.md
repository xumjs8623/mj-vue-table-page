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
<mj-table-pagetaion @setSelection="setSelection" :tableFrame="tablePagetaion.tableFrame" :apiAction="tablePagetaion.apiAction" :searchTag="tablePagetaion.searchTag" :searchKeyword="tablePagetaion.searchKeyword"></mj-table-pagetaion>
```
### 表单组件
```js
<mj-form :visible="dialogTag" :formData="formData" @getValue="getValue" @cancle="dialogTag=false"></mj-form>
```