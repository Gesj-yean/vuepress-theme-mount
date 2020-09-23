# vuepress-theme-mount

## 简介
`vuepress-theme-mount` 这个主题来源于作者想要实现属于自己的博客，在众多 `WordPress`，`hexo`等较为成熟的博客中选择了一个并未广泛使用的 `vuepress` 作为基础开发而来。由于在开发时关于 `vuepress` 的开发文档并不全，对于想要使用 `vuepress` 开发自定义主题的开发者不友好，在开发的同时写了一篇教程：[VuePress 开发个人博客进阶之自定义主题](https://juejin.im/post/6869565504756023310) 帮助大家，对于开发主题有任何疑问，可在这篇文章中先查找。
## 预览
- 「首页」
![image](https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo1.png)
- 「首页入口」
![image](https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo2.png)
- 「笔记」
![image](https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo3.png)
- 「读书」
![image](https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo4.png)

## 主题安装

```
npm i vuepress-theme-mount
npm i pug // 主题采用 pug 开发
npm i pug-plain-loader
```

## 主题配置
- record 文件夹
> 该文件夹用于记录博客。必须有一个 `README.md`，内容如下：
```README.md
---
layout: RecordLayout
description: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'
---
```
> 其他博客格式如下：
```
---
layout: ContentPage
description: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'
lastUpdated: '2020-01-01'
---
# 内容
```

- read 文件夹
> 该文件夹用于记录读书笔记。必须有一个 `README.md`，内容如下：
```README.md
---
layout: ReadLayout
---
```
> 其他博客格式如下：
```
---
layout: ContentPage
---
# 内容
```

- project 文件夹
> 该文件夹用于记录项目总结。必须有一个 `README.md`，内容如下：
```README.md
---
layout: ProjectLayout
description: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'
lastUpdated: '2020-01-01'
---
```
> 其他博客格式如下：
```
---
layout: ContentPage
description: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'
lastUpdated: '2020-01-03'
---
# 内容
```

- other 文件夹
> 该文件夹用于一段小文字。必须有一个 `README.md`，内容如下，注意，这一段 `description` 需要与正文内容相同。
```README.md
---
layout: OtherLayout
title: 'xx感想'
description: // 全部内容
---
# 标题
// 全部内容
```
> 其他博客格式如下：
```
---
layout: OtherLayout
title: 'xx感想'
description: // 全部内容
---
# 标题
// 全部内容
```

## 首页
主题提供了一个首页 (Homepage) 的布局。想要使用它，需要在根级 README.md 的 YAML front matter 指定 home: true。

以下是一个如何使用的例子：

```
# /README.md
---
message: Welcome to my Blog
actionText: Start →
actionLink: /about
features:
- title: 笔记
  link: /record
  details: 行走的每一步。
- title: 读书
  link: /read
  details: 读书是要有笔记的呀。
- title: 项目 Mark
  link: /project
  details: 每一段的记录，这是我的脚步。
- title: 吧啦吧啦
  link: /other
  details: 来这里说一说。
links:
- title: Github
  link: https://github.com/Gesj-yean
  icon: github
- title: 掘金
  link: https://juejin.im/user/2189882895384221
  icon: juejin
---
```
