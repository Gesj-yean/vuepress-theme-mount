<template lang="pug">
  .page-wrapper
    Header
    .main-wrapper
      .return-wrapper(@click="$router.go(-1)") {{current}}
      .content-wrapper
        Content
    Footer
</template>

<script>
import Header from "../global-components/Header.vue"
import Footer from "../global-components/Footer.vue"
const catalogue = new Map([['record', '笔记'], ['read', '读书'], ['project', '项目Mark'], ['other', '吧啦吧啦']])
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      catalogue,
      current: ''
    }
  },
  created () {
    this.current = this.catalogue.get(this.$page.path.split('/')[1]) || '/'
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/index.styl'

.return-wrapper
  color #999
  border-left solid 2px #1f6fb5
  padding-left 15px
  display flex
  justify-content space-between
  font-size 18px
.content-wrapper
  width 60%
  margin-left 20%
</style>