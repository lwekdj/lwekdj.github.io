import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',
  themeConfig: {
    ui:{
      primary:"#03a9f4"
    },
    hero:{
      title:"Hello Lwek!",
      motto:"圣火昭昭，圣光耀耀。凡我弟子，喵喵喵喵！",
      urls:[
        "https://pic1.imgdb.cn/item/6812f2b858cb8da5c8d5da78.jpg"
      ],
      waveTheme: 'ripple',
      style:"filter-grid",
      typewriter:true,
    },
    notice:{
      message:"测试一下公告功能喵"
    },
    footer: {
      since: 2025,
    },
  },

  unocss: { safelist },
})
