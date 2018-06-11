<template>
  <div class="mj-tags">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable>
      {{tag.name}}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: 'mjTags',
  data () {
    return {
      tags: [
        {name: '首页'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.mj-tags{
  width: 100%;
}
</style>
