<template lang="pug">
.home-wrapper
  .first-page-wrapper
    .content-wrapper
      img(src="../assets/img/welecom.jpg" height="250" width="250")
      .desc-wrapper
        | {{$page.frontmatter.message}}
      .button-group-wrapper(v-show="isShowEnter")
        router-link.enter-btn-wrapper(:to="$page.frontmatter.actionLink") {{$page.frontmatter.actionText}}
        input.enter-btn-wrapper(placeholder="搜索" v-model="searchValue" ref="input")
      .direct-icon(v-show="isShowNext" :class="isScrollToTop?'turnLeft':'turnRight'")
        i(:class="isScrollToTop?'el-icon-arrow-down':'el-icon-arrow-up'")
  .other-page
    .link-wrapper
      .link-item(v-for="(item,index) in $page.frontmatter.links" :key="index")
        el-tooltip(effect="dark" :content="item.title" placement="bottom")
          a(:href="item.link" target="_blank")
            img(src="../assets/img/juejin.svg" height="30" width="30")
    .other-content-wrapper
      .fold-angle(v-for="(item,index) in $page.frontmatter.features"  :key="index" @click="$router.push({path:item.link})")
        .title
          i.el-icon-collection.margin-right-10
          | {{item.title}}
        .content {{item.details}}
      
      //- .fold-angle
      //-   .title 
      //-     i.el-icon-location-information.margin-right-10
      //-     | 站点传送门
      //-   .content
      //-     a(href="https://github.com/Gesj-yean" target="_blank")
      //-       img(src="../assets/img/github.png" height="30" width="30")
      //-     a(href="https://juejin.im/user/2189882895384221" target="_blank") 
      //-       img(src="../assets/img/juejin.svg" height="30" width="30")
</template>

<script>

export default {
  data () {
    return {
      isShowEnter: false,
      isShowNext: false,
      searchValue: '',
      scrollTop: 0,
      isScrollToTop: true
    }
  },
  watch: {
    searchValue (val) {
      if (val) {
        const el = this.$refs.input
        el.style.width = '200px'
      } else {
        const el = this.$refs.input
        el.style.width = '70px'
      }
    }
  },
  mounted () {
    console.log(this.$page);
    setTimeout(() => {
      this.isShowEnter = true
      setTimeout(() => {
        this.isShowNext = true
      }, 1000)
    }, 3000)
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll (e) {
      if (this.scrollTop - e.srcElement.scrollingElement.scrollTop > 0) {
        if (!this.isScrollToTop) this.isScrollToTop = true
      } else {
        if (this.isScrollToTop) this.isScrollToTop = false
      }
      this.scrollTop = e.srcElement.scrollingElement.scrollTop
    }
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/index.styl'

$font-color = #3e7db8
.home-wrapper
  width 100%
  .first-page-wrapper
    height 100vh
    width 100%
    centering()
    flex-direction column
    background rgba(230, 162, 60, 0.122)
    .content-wrapper
      height 500px
      text-align center
      img
        box-shadow 8px 7px 8px 0px #c18a3699
        border-radius 5px
        cursor pointer
        transition all 0.3s
      .desc-wrapper
        color $font-color
        font-size 30px
        font-family 'Times New Roman', Times, serif
        margin-top 100px
        width 500px
        white-space nowrap
        overflow hidden
        animation typing 3s steps(60, end), blink-caret 0.5s step-end infinite alternate
        @keyframes typing
          from
            width 0
        @keyframes blink-caret
          50%
            border-color transparent
      .direct-icon
        margin-top 30px
        font-size 40px
        position absolute
        bottom 50px
        left calc(50% - 20px)
        color $font-color
        animation moveIn 0.5s ease
      .turnLeft
        animation turnLeft 0.5s ease
        @keyframes turnLeft
          0%
            transform rotate(180deg)
          100%
            transform rotate(360deg)
      .turnRight
        animation turnRight 0.5s ease
        @keyframes turnRight
          0%
            transform rotate(180deg)
          100%
            transform rotate(360deg)
      .button-group-wrapper
        text-align center
        font-size 13.3333px
        animation moveIn 0.5s ease
        .enter-btn-wrapper
          height 40px
          box-shadow 3px 3px 5px #909399
          line-height 40px
          width 70px
          text-align center
          color #666
          border-radius 5px
          margin-top 30px
          letter-spacing 3px
          padding 0 8px
          transition all 0.3s
          display inline-block
          vertical-align middle
          background none
          border none
          text-decoration none
          &:hover
            box-shadow inset 3px 3px 5px #909399
            cursor pointer
            transform scale(0.9)
            transition all 0.3s
          &:focus
            outline-offset 0
            outline none
            width 200px
          input::-webkit-input-placeholder
            color #666
          input::-moz-placeholder /* Mozilla Firefox 19+ */
            color #666
          input:-moz-placeholder /* Mozilla Firefox 4 to 18 */
            color #666
          input:-ms-input-placeholder /* Internet Explorer 10-11 */
            color #666
          &:first-of-type
            margin-right 10px
  .other-page
    height 100vh
    background white
    background-image linear-gradient(90deg, #e6a23c1f 50%, transparent 0), linear-gradient(#fcf4e9 50%, transparent 0)
    background-size 30px 30px
    .link-wrapper
      text-align right
      .link-item
        display inline-block
    .other-content-wrapper
      width 100%
      padding 20px
      display flex
      flex-wrap wrap
      .fold-angle
        height 120px
        min-width 200px
        display inline-block
        margin 20px
        padding 20px
        folded-corner(#58a, 30px, 30deg)
        color #fff
        width calc(50% - 80px)
        transform scale(1)
        transition transform 0.25s ease-out
        &:hover
          cursor pointer
          transform scale(1.05)
        .content
          margin-top 20px
          font-weight 200
          text-indent 32px
          line-height 25px
.margin-right-10
  margin-right 10px
@keyframes moveIn
  0%
    transform translateY(-10px)
  100%
    transform translateY(0px)
a
  margin-right 10px
  img
    margin-right 10px
</style>