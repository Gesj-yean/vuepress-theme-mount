<template lang="pug">
  .page-wrapper
    Header
    .main-wrapper
      Introduce(:total="currentPages.length" :lastUpdated="$page.lastUpdated")
      .container(ref="waterfall")
        .item(v-for="(item, index) in currentPages" :key="index" ref="waterfall-item"  @click="$router.push(item.path)")
          .title {{item.title}}
          .desc {{item.frontmatter.description}}
          .time 
            i.el-icon-sunny.marginright5
            | {{item.frontmatter.lastUpdated || '/'}}
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
      currentPages: [],
    }
  },
  created () {
    this.getCurrentPages()
  },
  mounted () {
    this.getWatterfallHeight()
  },
  methods: {

    /**
     * @description 获取当前目录other下的博文
     */
    getCurrentPages () {
      this.currentPages = this.$site.pages.filter(item => item.path.startsWith('/other/') && item.path.endsWith('html'))
      console.log(this.$page);
    },


    /**
     * @description 获取瀑布流元素高度，3列
     */
    getWatterfallHeight () {
      setTimeout(() => {
        const nodes = this.$refs['waterfall-item']
        let firstColumn = 0
        let secondColumn = 0
        let thirdColumn = 0
        for (let i = 0; i < nodes.length; i++) {
          if (i % 3 === 0) {
            firstColumn += nodes[i].offsetHeight
          } else if (i % 3 === 1) {
            secondColumn += nodes[i].offsetHeight
          } else {
            thirdColumn += nodes[i].offsetHeight
          }
        }
        this.$refs['waterfall'].style.height = Math.max(firstColumn, secondColumn, thirdColumn) + 100 + 'px'
        this.$refs['waterfall'].style.opacity = 1
      }, 200)
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  display flex
  flex-flow column wrap
  align-content space-between
  /* 容器必须有固定高度 */
  height 660px
  /* 非必须 */
  border-radius 3px
  padding 20px
  width 90%
  margin 24px auto
  counter-reset items
  opacity 0
.item
  width 32%
  /* 非必须 */
  position relative
  margin-bottom 2%
  border-radius 3px
  box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  color #fff
  padding 24px
  box-sizing border-box
  cursor pointer
  .title
    color #1f2f3d
    margin-bottom 24px
    font-size 20px
  .desc
    color #5e6d82
    letter-spacing 2px
    text-indent 36px
    line-height 22px
    margin-bottom 24px
  .time
    position absolute
    bottom 24px
    color #f99704
    text-align right
    width calc(100% - 48px)
/* 将内容块重排为3列 */
.item:nth-child(3n+1)
  order 1
.item:nth-child(3n+2)
  order 2
.item:nth-child(3n)
  order 3
/* 强制换列 */
.container::before, .container::after
  content ''
  flex-basis 100%
  width 0
  order 2
</style>