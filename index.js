const moment = require('moment');
module.exports = {
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }],
    ['@vuepress/back-to-top']
  ]
}