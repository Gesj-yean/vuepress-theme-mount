<template lang="pug">
.total-posts-wrapper 
  .left 总计 {{total}} 篇
  .right 更新于 {{lastUpdated}}
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    lastUpdated: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="stylus">
.total-posts-wrapper
  color #999
  border-left solid 2px $textColorLight
  padding-left 15px
  display flex
  justify-content space-between
  font-size 18px
</style>
