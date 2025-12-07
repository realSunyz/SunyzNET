import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Sunyz Network",
  description: "Sunyz Network (AS150289, aka. SunyzNET) is an experimental networking project focused on educational and research purposes.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
        ]
      }
    ],

    socialLinks: [
    ]
  }
})
