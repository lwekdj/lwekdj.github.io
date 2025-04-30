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
      title:"Hello, Lwek！",
      motto:"喵喵喵喵",
      urls:[
        "https://i.pximg.net/img-master/img/2013/04/07/01/53/07/34844544_p0_master1200.jpg"
      ],
      waveTheme: "fish",
      style:"filter-dot",
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
