<template lang="pug">
  .header-wrapper
    img(class="logo-wrapper"
      v-if="$site.themeConfig.logo"
      :src="$withBase($site.themeConfig.logo)")
    .function-wrapper
      Menu
      SearchBox
</template>

<script>
import SearchBox from '@SearchBox'
import Menu from './Menu'
export default {
  components: {
    SearchBox,
    Menu
  }
};
</script>

<style scoped lang="stylus">
@import '../styles'

.header-wrapper
  height 60px
  textContent()
  padding 0 20px
  border-bottom solid 1px $borderColor
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  box-sizing border-box
  &:hover
    box-shadow 5px 5px 20px 1px $borderColor
  .logo-wrapper
    height 50px
    flex-shrink 0
    font-size 30px
  .function-wrapper
    display flex
    flex-direction row
    align-items center
.search-box input
  cursor text
  width 8rem
  height 1.6rem
  color #acaeb3
  display inline-block
  border 1px solid #cfd4db
  border-radius 2rem
  line-height 1.5rem
  padding 0 0.5rem 0 2rem
  background #fff url('/assets/img/search.83621669.svg') 0.6rem 0.3rem no-repeat
</style>
