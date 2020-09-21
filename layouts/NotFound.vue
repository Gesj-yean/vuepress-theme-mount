<template lang="pug">
  .not-found-wrapper
    img.main(src="../assets/img/404.png" height="150px" width="380px")
    .desc 对不起，页面找不到了。
</template>

<script>
export default {

};
</script>

<style lang="stylus" scoped>
.not-found-wrapper
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  font-size 50px
  text-align center
  background-size cover
  background-image url('../assets/img/404bg.jpeg')
  .main
    margin-top 25%
  .desc
    color #fff
    font-size 20px
</style>
