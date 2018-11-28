<template>
<!-- 传入参数
tableFrame 表格结构 Object  {label 字段中文名 String, prop 字段名称 String, minWidth 最小宽度 String}
tableConfig 饿了么table组成参数集合
apiAction api请求方法
searchKeyword 搜索关键词 Object
searchTag 是否执行搜索 Boolean
dbClick 双击事件 传入row参数 Function
privilegeId 权限id String
-->
  <el-row>
    <el-col :span="24">
      <el-table v-bind="tableConfig" :data="tableData" border stripe size="mini" class="common-talbe" ref="multipleTable" @selection-change="handleSelectionChange" highlight-current-row @row-click="handleCurrentChange" @row-dblclick="dbClickFun">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="expand" v-if="tableConfig && tableConfig.extend">
          <template slot-scope="props">
            <slot v-bind="props">
            </slot>
          </template>
        </el-table-column>
        <mj-column v-for="(item, index) in tableFrame" v-bind="item" :key="index"></mj-column>
      </el-table>
    </el-col>
    <el-col :span="24" class="common-page">
      <el-pagination
        @size-change="handleChangeSize"
        @current-change="handleChangeCurrent"
        :current-page="pages.currPage"
        :page-sizes="[10, 50, 100, 200, 500, 1000]"
        :page-size="pages.pageSize"
        :layout="layout"
        :total="pages.total">
      </el-pagination>
    </el-col>
  </el-row>
</template>
<script>
import mjColumn from './column'
export default {
  name: 'mjTablePagetaion',
  components: {
    mjColumn
  },
  data () {
    return {
      tableData: [],
      pages: {
        total: 0,
        currPage: 1,
        pageSize: 10
      }
    }
  },
  watch: {
    searchTag: function () {
      this.searchKeyword.page = 1
      this.tableList()
    }
  },
  props: {
    tableFrame: {
      type: Array,
      required: true
    },
    // api地址
    apiAction: {
      type: Function,
      required: true
    },
    // 搜索关键词
    searchKeyword: {
      type: Object,
      required: true,
      validator: function (value) {
        let startTset = false
        let limitTest = false
        for (let x in value) {
          if (x.indexOf('page') !== -1) {
            startTset = true
          }
          if (x.indexOf('limit') !== -1) {
            limitTest = true
          }
        }
        return startTset && limitTest
      }
    },
    // 搜索标签
    searchTag: {
      type: Boolean,
      required: true
    },
    // 双击事件
    dbClick: {
      type: Function,
      default: () => {
        return (value) => {
          console.log(value)
        }
      }
    },
    privilegeId: {
      type: String
    },
    // element本身配置项
    tableConfig: {
      type: Object
    },
    layout: {
      default: () => {
        return 'total, sizes, prev, pager, next, jumper'
      },
      type: String
    }
  },
  created () {
    this.tableList()
  },
  methods: {
    // 获取列表信息
    tableList () {
      if (this.apiAction) {
        this.apiAction(this.searchKeyword)
          .then(data => {
            if (data.code === 1 || data.success) {
              this.tableData = data.list
              this.pages.total = data.total
            }
          })
      }
    },
    // 双击事件
    dbClickFun (row, event) {
      if (this.privilegeId) {
        let actionTag = false
        let privilegeIds = JSON.parse(sessionStorage.getItem('privilege'))
        for (let i = 0, len = privilegeIds.length; i < len; i++) {
          if (privilegeIds[i].actionId === this.privilegeId) {
            actionTag = true
          }
        }
        if (actionTag) {
          this.dbClick(row, event)
        } else {
          this.$message({
            message: '无权限查看',
            type: 'error',
            duration: '1500',
            onClose: () => {
              return false
            }
          })
        }
      } else {
        // 没传权限id则一律放过
        this.dbClick(row, event)
      }
    },
    // 修改当前页
    handleChangeCurrent (currPage) {
      this.searchKeyword.page = Number(currPage)
      this.tableList()
    },
    // 修改每页条数
    handleChangeSize (size) {
      this.searchKeyword.page = 1
      this.searchKeyword.limit = size
      this.tableList()
    },
    // 全选操作
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.$emit('getSelection', val)
    },
    // 单选操作
    handleCurrentChange (row) {
      this.$refs.multipleTable.clearSelection()
      this.$refs.multipleTable.toggleRowSelection(row)
    }
  }
}
</script>
<style scoped>
.common-page{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.common-talbe{
  border-top: solid 1px #ebeef5;
}
</style>
