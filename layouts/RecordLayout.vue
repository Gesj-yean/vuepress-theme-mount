<template lang="pug">
.page-wrapper
  Header
  .main-wrapper
    Introduce(:total="currentPages.length" :lastUpdated="$page.lastUpdated")
    .posts-wrapper
      .testimotionals.item-wrapper(v-for="item in currentPages" :key="item.key"  @click="$router.push(item.path)")
        .card
          .layer
          .content
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
     * @description 获取当前目录record下的博文
     */
    getCurrentPages () {
      this.currentPages = this.$site.pages.filter(item => item.path.startsWith('/record/') && item.path.endsWith('html'))
      console.log(this.$page);
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/index.styl'

.posts-wrapper
  display flex
  flex-wrap wrap
  justify-content flex-start
  .item-wrapper
    width 32%
    margin-right 2%
    padding 15px
    box-sizing border-box
    height 220px
    border-radius 5px
    margin-top 20px
    &:hover
      cursor pointer
    &:nth-child(3)
      margin-right 0
    .item-title
      color #fff
      line-height 20px
      lines(2)
    .title-discirption
      color #ffffff
      font-weight 300
      margin-top 20px
      text-indent 32px
      line-height 20px
      font-size 14px
      lines(4)
    .time
      position absolute
      bottom 0
      text-align right
      text-align right
      width 100%
      color #f7e4ae
      font-weight 300
.testimotionals .card
  position relative
  overflow hidden
  margin 0 auto
  height 100%
  background #42668c
  padding 20px
  box-sizing border-box
  box-shadow 0 10px 40px rgba(0, 0, 0, 0.5)
.testimotionals .card .layer
  z-index 1
  position absolute
  top calc(100% - 2px)
  height 100%
  width 100%
  left 0
  background linear-gradient(to bottom, #91b4d2, #aabcd4)
  transition 0.5s
.testimotionals .card .content
  z-index 2
  position relative
  height 100%
.testimotionals .card:hover .layer
  top 0
.testimotionals .card .content p
  font-size 14px
  line-height 24px
  color #fff
.testimotionals .card .content .image
  width 100px
  height 100px
  margin 0 auto
  border-radius 50%
  overflow hidden
  border 4px solid white
  box-shadow 0 10px 40px rgba(0, 0, 0, 0.5)
.testimotionals .card .conte nt .details h2
  font-size 18px
  color white
.testimotionals .card .content .details h2 span
  font-size 18px
  color purple
  transition 0.5s
.testimotionals .card:hover .content .details h2 span
  color white
  position relative
.marginright5
  margin-right 5px
img
  filter opacity(70%)
</style>