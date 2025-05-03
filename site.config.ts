import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://lwekdj.github.io/',
  lang: 'zh-CN',
  title: 'Lwek 测试',
  author: {
    name: 'Lwek',
    avatar:'https://avatars.githubusercontent.com/u/209656811',

  },
  description: '谁会闲的没事看我主页呢╮(￣▽￣)╭',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/lwekdj',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/605890667',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: false,
  },
})
