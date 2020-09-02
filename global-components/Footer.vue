<template lang="pug">
  .footer-wrapper Gesj @小可爱乌冬的铲屎官 2020
</template>

<script>
export default {

};
</script>

<style scoped lang="stylus">
@import '../styles'

.footer-wrapper
  height 50px
  border-top solid 1px $borderColor
  display flex
  flex-direction row
  justify-content center
  align-items center
  letter-spacing 2px
  textContent()
  box-sizing border-box
  &:hover
    box-shadow 5px 5px 20px 1px $borderColor
</style>
