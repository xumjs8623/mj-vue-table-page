<template>
  <mj-table-pagetaion :dbClick="dbClick" :tableConfig="{extend: true}" @getSelection="getSelection" :tableFrame="tablePagetaion.tableFrame" :apiAction="tablePagetaion.apiAction" :searchTag="tablePagetaion.searchTag" :searchKeyword="tablePagetaion.searchKeyword">
    <template slot-scope="slots">
      <div>
        <el-button>{{slots.row.name}}</el-button>
      </div>
    </template>
  </mj-table-pagetaion>
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
                <el-button type="primary" on-click={() => this.editHandle(scope.row)}>
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
    dbClick (row, event) {
      console.log('双击事件')
      console.log(row)
      console.log(event)
    },
    getSelection (val) {
      console.log(val)
    },
    editHandle (item) {
      console.log(item)
    }
  }
}
</script>
