import { defineConfig } from 'vitepress'
import { readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const srcDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const diaryFiles = readdirSync(srcDir)
  .filter((f) => f.match(/^\d{4}-\d{2}-\d{2}-日记-\d+\.md$/))
  .sort()
  .reverse()

const diaries = diaryFiles.map((f) => ({
  text: f.replace(/\.md$/, ''),
  link: '/' + f.replace(/\.md$/, ''),
}))

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
