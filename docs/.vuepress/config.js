import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "前端知识详解",
  description:
    "基础详解;框架;项目开发;工程化;浏览器;、使用过程中如碰到问题，请到Github进行提问。 https://github.com",
  head: [
    [
      'link', 
      { rel: 'icon', href: 'logo.svg' }
    ]
  ],
  bundler: viteBundler(),
  theme: defaultTheme(),
})