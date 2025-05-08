import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { addonWaline } from 'valaxy-addon-waline'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-fa-fort-awesome',
  'i-line-md-folder-twotone',
  'i-fa-archive',
  'i-fa-edit',
  'i-fa-chain',
  'i-fa-leaf',
  'i-fa-feed'
]

export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',
  themeConfig: {
    ui:{
      primary:"#03a9f4"
    },
    hero:{
      title:"HELLO LWEK!",
      motto:"责人之心责己，恕已之心恕人。",
      urls:[
        "https://pic1.imgdb.cn/item/6812f2b858cb8da5c8d5da78.jpg"
      ],
      waveTheme: 'ripple',
      style:"filter-grid",
      typewriter:true,
    },
    footer: {
      since: 2025,
    },
    navbar:[
      {
        icon: 'i-fa-fort-awesome',
        locale: 'menu.home',
        link: '/',
      },
      {
        icon: 'i-line-md-folder-twotone',
        locale: 'menu.categories',
        link: '/categories',
      },
      {
        icon: 'i-fa-archive',
        locale: 'menu.archives',
        link: '/archives',
      },
      {
        text: '友链',
        icon: 'i-fa-chain',
        link: '/links',
      },
      {
        text: '关于',
        icon: 'i-fa-leaf',
        link: "/about",
        target: '_blank',
      },
      {
        text: 'RSS',
        icon: 'i-fa-feed',
        link: '/atom.xml',
        target: '_blank',
      },
    ],
    sidebar:[
      {
        text: '🏰',
        locale: 'menu.home',
        link: '/',
      },
      {
        text: '🗂️',
        locale: 'menu.archives',
        link: '/archives/',
      },
      {
        text: '📂',
        locale: 'menu.categories',
        link: '/categories/',
      },
      {
        text: '🏷️',
        locale: 'menu.tags',
        link: '/tags/',
      },
    ],
    navbarOptions:{
      title:["Lwek's", "Blog"],
      invert: ['home'],
      showMarker: true,
      autoHide: true,
    },
    scrollToTop:true
  },
  addons:[
    addonWaline({
      serverURL:"https://comments.lwek.world",
      comment:true,
    }),
  ],
  unocss: { safelist },
})
