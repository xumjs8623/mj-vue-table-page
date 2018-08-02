<template>
  <div>
    <el-button type="primary" @click="goUrl('/mjForm')">mjForm</el-button>
    <el-button type="primary" @click="goUrl('/mjTablePagetion')">mjTablePagetion</el-button>
    <el-button type="primary" @click="goUrl('/mjTags')">mjTags</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    goUrl (url) {
      this.$router.push(url)
    }
  }
}
</script>
