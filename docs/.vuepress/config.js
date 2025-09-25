import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "编程笔记",
  description:
    "基础详解;框架;项目开发;工程化;浏览器;",
  head: [
    [
      'link',
      { rel: 'icon', href: 'logo.svg' }
    ]
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '技术笔记', prefix: '/technical_notes/',
        children: [
          {
            text: '前端基础知识',
            prefix: 'front_end/',
            children: [
              { text: 'html基础', link: 'html基础.md' },
              { text: 'CSS基础', link: 'CSS基础.md' },
              { text: 'JavaScript基础', link: 'JavaScript基础.md' }
            ]
          },
        ],
      }
    ]
  })
})