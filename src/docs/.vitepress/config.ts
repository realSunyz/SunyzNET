import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en",
  title: "SunyzNET",
  titleTemplate: ":title | Sunyz Network Docs",
  description:
    "Docs for Sunyz Network (AS150289, aka. SunyzNET), which is an experimental networking project focused on educational and research purposes.",
  head: [
    [
      "link",
      { rel: "icon", href: "https://cdn.sunyz.net/favicons/favicon.ico" },
    ],
    [
      "script",
      {
        src: "https://analytics.sunyz.net/script.js",
        "data-website-id": "b14beceb-8732-424c-8e13-d1454c93ace1",
      },
    ],
  ],
  themeConfig: {
    logo: "https://cdn.sunyz.net/logos/sunyznetwork.webp",
    siteTitle: false,
    nav: [
      { text: "About", link: "/about/mission" },
      { text: "Peering", link: "/peering/policy" },
      { text: "Communities", link: "/communities/information" },
    ],
    sidebar: [
      {
        text: "About",
        items: [
          { text: "Mission", link: "/about/mission" },
          { text: "Contact", link: "/about/contact" },
        ],
      },
      {
        text: "Peering",
        items: [
          { text: "General Policy", link: "/peering/policy" },
          { text: "Internet Exchanges", link: "/peering/ix" },
          { text: "Direct Session", link: "/peering/direct" },
        ],
      },
      {
        text: "Algorithm",
        items: [
          { text: "Received Routes", link: "/algorithm/import" },
          { text: "Exported Routes", link: "/algorithm/export" },
        ],
      },
      {
        text: "BGP Communities",
        items: [
          { text: "Information Communities", link: "/communities/information" },
          { text: "Control Communities", link: "/communities/control" },
          { text: "Code Definition", link: "/communities/codes" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/SunyzNET" }],
    footer: {
      copyright: "Copyright © 2022-2025 Yanzheng Sun",
    },
  },
  // locales: {
  //   root: {
  //     label: "English",
  //     lang: "en",
  //   },
  //   "zh-cn": {
  //     label: "简体中文",
  //     lang: "zh-Hans",
  //     description:
  //       "Sunyz Network 技术支持文档（AS150289, aka. SunyzNET）。我们是一个以教育和研究为目的的实验性全球网络。",
  //     themeConfig: {
  //       nav: [
  //         { text: "关于", link: "/zh-cn/about/mission" },
  //         { text: "对等互联", link: "/zh-cn/peering/policy" },
  //         { text: "BGP 社区", link: "/zh-cn/communities/information" },
  //       ],
  //       sidebar: [
  //         {
  //           text: "关于",
  //           items: [
  //             { text: "愿景", link: "/zh-cn/about/mission" },
  //             { text: "联系方式", link: "/zh-cn/about/contact" },
  //           ],
  //         },
  //         {
  //           text: "对等互联",
  //           items: [
  //             { text: "一般政策", link: "/zh-cn/peering/policy" },
  //             { text: "通过 IX", link: "/zh-cn/peering/ix" },
  //             { text: "私有会话", link: "/zh-cn/peering/direct" },
  //           ],
  //         },
  //         {
  //           text: "算法",
  //           items: [
  //             { text: "导入路由", link: "/zh-cn/algorithm/import" },
  //             { text: "导出路由", link: "/zh-cn/algorithm/export" },
  //           ],
  //         },
  //         {
  //           text: "BGP 社区",
  //           items: [
  //             { text: "信息类社区", link: "/zh-cn/communities/information" },
  //             { text: "控制类社区", link: "/zh-cn/communities/control" },
  //             { text: "代码定义", link: "/zh-cn/communities/codes" },
  //           ],
  //         },
  //       ],
  //       footer: {
  //         copyright: "版权所有 © 2022-2025 Yanzheng Sun",
  //       },
  //     },
  //   },
  // },
  cleanUrls: true,
  lastUpdated: true,  
  outDir: "../../public/docs",
  base: "/docs/",
});
