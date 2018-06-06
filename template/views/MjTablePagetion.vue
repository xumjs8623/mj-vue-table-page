<template>
  <mj-table-pagetaion @setSelection="setSelection" :tableFrame="tablePagetaion.tableFrame" :apiAction="tablePagetaion.apiAction" :searchTag="tablePagetaion.searchTag" :searchKeyword="tablePagetaion.searchKeyword"></mj-table-pagetaion>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      tablePagetaion: {
        tableFrame: [
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'age',
            label: '年龄'
          },
          {
            prop: 'address',
            label: '地址'
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
        ],
        tableConfig: {},
        apiAction: (params) => {
          return axios.get('/data/tableData.json', {params: params}).then(res => { return res.data }).catch(error => { console.log(error) })
        },
        searchKeyword: {
          page: 1,
          limit: 10
        },
        searchTag: false
      }
    }
  },
  methods: {
    setSelection (val) {
      console.log(val)
    }
  }
}
</script>
