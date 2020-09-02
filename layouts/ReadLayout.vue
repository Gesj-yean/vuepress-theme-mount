<template lang="pug">
  .page-wrapper
    Header
    .main-wrapper
      Introduce(:total="currentPages.length" :lastUpdated="$page.lastUpdated")
      .posts-wrapper
        .item-wrapper(v-for="(item,index) in currentPages" :key="item.key" @click="$router.push(item.path)")
          .left
            template(v-if="index%2")
              .item-title {{item.title || item.headers[0].title || '未知'}}
              .title-discirption {{item.frontmatter.description}}
              .time 
                i.el-icon-sunny.marginright5
                | {{item.frontmatter.lastUpdated || '/'}}
            template(v-else)
              img(:src="$withBase('/default.png')" height="200px" width="200px")
          .right
            template(v-if="index%2")
              img(:src="$withBase('/default.png')" height="200px" width="200px")
            template(v-else)
              .item-title {{item.title || item.headers[0].title || '未知'}}
              .title-discirption {{item.frontmatter.description}}
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
      this.currentPages = this.$site.pages.filter(item => item.path.startsWith('/read/') && item.path.endsWith('html'))
      console.log(this.$page);
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/index.styl'

.posts-wrapper
  padding 24px 5% 0
  .item-wrapper
    margin-bottom 40px
    height 200px
    box-shadow 0 2px 13px 0 rgba(0, 0, 0, 0.06)
    background-color #fff
    border-radius 4px
    display flex
    transition all 0.3s ease
    transform scale(1)
    &:hover
      cursor pointer
      transform scale(1.03)
    .left
      flex 0 0 200px
    .right
      flex 1
      padding 24px
      position relative
      .time
        right 24px
    &:nth-child(even)
      .left
        flex 1
        padding 24px
        position relative
        .time
          left 24px
      .right
        flex 0 0 200px
        padding 0
.item-title
  color #999
  line-height 40px
  font-size 20px
.title-discirption
  color #999
  line-height 20px
  letter-spacing 2px
  lines(3)
.time
  position absolute
  bottom 24px
  line-height 50px
  color #f99704
  width calc(100% - 48px)
  text-align right
.marginright5
  margin-right 5px
img
  // filter opacity(70%)
</style>