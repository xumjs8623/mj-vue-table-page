<template>
  <div>
    <el-dialog title="" :visible.sync="dialogTag">
      <mj-form></mj-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogTag: true
    }
  }
}
</script>
