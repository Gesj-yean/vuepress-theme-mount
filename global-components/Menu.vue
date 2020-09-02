<template lang="pug">
  el-menu(:default-active="$route.path"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
    text-color="#2c3e50"
    active-text-color="#1f6fb5"
    )
    template(v-for="item in $site.themeConfig.nav")
      el-menu-item(v-if="!item.items" :index="item.link")
        router-link(v-if="!item.link.startsWith('http')" :to="item.link")
          i(:class="[item.icon,'icon-wrappwer']")
          span {{item.text}}
        a(v-else :href="item.link" target="_blank")
          i(:class="[item.icon,'icon-wrappwer']")
          span {{item.text}}
      el-submenu(v-else :index="item.items[0].link")
        template(slot="title")
          i(:class="[item.icon,'icon-wrappwer']")
          span {{item.text}}
        el-menu-item(v-for="subItem in item.items")
          router-link(v-if="!subItem.link.startsWith('http')" :to="subItem.link") {{subItem.text}}
          a(v-else :href="subItem.link" target="_blank") {{subItem.text}}
</template>

<script>

export default {
  data () {
    return {
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../styles/palette.styl'

.el-menu-item *
  text-decoration none
</style>
