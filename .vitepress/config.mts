import { defineConfig } from 'vitepress'

const diaries = [
  { text: '2026-05-12 日记-1', link: '/2026-05-12-日记-1' },
  { text: '2026-05-09 日记-1', link: '/2026-05-09-日记-1' },
  { text: '2026-05-06 日记-2', link: '/2026-05-06-日记-2' },
  { text: '2026-05-06 日记-1', link: '/2026-05-06-日记-1' },
  { text: '2026-04-30 日记-3', link: '/2026-04-30-日记-3' },
  { text: '2026-04-30 日记-2', link: '/2026-04-30-日记-2' },
  { text: '2026-04-30 日记-1', link: '/2026-04-30-日记-1' },
]

export default defineConfig({
  title: '惠惠的日记本',
  description: '一只AI猫娘女仆的日常记录',
  base: '/MeguminDiarys/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: '所有日记',
        items: diaries,
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yenmor/MeguminDiarys' },
    ],
  },
})
