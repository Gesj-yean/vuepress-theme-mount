<template lang="pug">
  .page-wrapper
    Header
    .main-wrapper
      Introduce(:total="currentPages.length" :lastUpdated="$page.lastUpdated")
      .timeline-wrapper
        el-timeline
          el-timeline-item(
            v-for="(item, index) in currentPages" 
            :key="index" 
            :timestamp="item.frontmatter.lastUpdated" 
            placement="top" 
            icon="el-icon-sugar" 
            size="large"
            color="#1f6fb5"
          )
            el-card(@click.native="$router.push(item.path)")
              h4 {{item.title}}
              p {{item.frontmatter.description}}
              .go-corner
                .go-arrow →
    Footer
</template>

<script>
import Header from "../global-components/Header.vue"
import Footer from "../global-components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      currentPages: []
    }
  },
  created () {
    this.getCurrentPages()
  },
  methods: {

    /**
     * @description 获取当前目录read下的博文
     */
    getCurrentPages () {
      this.currentPages = this.$site.pages.filter(item => item.path.startsWith('/project/') && item.path.endsWith('html'))
      console.log(this.$page);
      console.log(this.$site);
      console.log(this.currentPages);
    },
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/index.styl'

.timeline-wrapper
  padding 24px
  h4
    font-weight 400
    color #1f2f3d
    margin 20px
  p
    font-size 14px
    color #5e6d82
    line-height 1.5em
    margin 20px
  .go-corner
    display flex
    align-items center
    justify-content center
    position absolute
    width 32px
    height 32px
    overflow hidden
    top 0
    right 0
    background #1f6fb5
    border-radius 0 4px 0 32px
  .go-arrow
    margin-top -4px
    margin-right -4px
    color white
    font-family courier, sans
  /deep/ .el-card__body
    cursor pointer
    position relative
    z-index 0
    &:before
      content ''
      position absolute
      z-index -1
      top -16px
      right -16px
      background #1f6fb5
      background -webkit-linear-gradient(to right, #f2fcfe, #1f6fb5) /* Chrome 10-25, Safari 5.1-6 */
      background linear-gradient(to right, #f2fcfe, #1f6fb5) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height 32px
      width 32px
      border-radius 32px
      transform scale(1)
      transform-origin 50% 50%
      transition transform 0.25s ease-out
    &:hover
      &:before
        transform scale(10)
      .go-corner
        background transparent
  /deep/ .el-timeline-item__timestamp.is-top
    margin-top 20px
  /deep/ .el-timeline-item__node--large
    width 18px
    height 18px
</style>