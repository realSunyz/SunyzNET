import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en",
  title: "SunyzNET",
  titleTemplate: ":title | SunyzNET",
  description:
    "Docs for Sunyz Network (AS150289, aka. SunyzNET), which is an experimental IPv6-only networking project focused on educational and research purposes, operated by Yanzheng SUN.",
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
      { text: "Communities", link: "/communities/internal" },
    ],
    sidebar: [
      {
        text: "About",
        items: [
          { text: "Mission", link: "/about/mission" },
          { text: "Geofeed", link: "/about/geofeed" },
          { text: "Contact", link: "/about/contact" },
        ],
      },
      {
        text: "Peering",
        items: [
          { text: "General Policy", link: "/peering/policy" },
          { text: "Internet Exchanges", link: "/peering/ix" },
          { text: "Direct Peer", link: "/peering/direct" },
        ],
      },
      {
        text: "BGP Communities",
        items: [
          { text: "Internal Communities", link: "/communities/internal" },
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
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    "zh-cn": {
      label: "简体中文",
      lang: "zh-Hans",
      description:
        "Docs for Sunyz Network (AS150289, aka. SunyzNET), which is an experimental IPv6-only networking project focused on educational and research purposes, operated by Yanzheng SUN.",
      themeConfig: {
        nav: [
          { text: "关于", link: "/zh-cn/about/mission" },
          { text: "对等互联", link: "/zh-cn/peering/policy" },
          { text: "BGP 社区", link: "/zh-cn/communities/internal" },
        ],
        sidebar: [
          {
            text: "关于",
            items: [
              { text: "愿景", link: "/zh-cn/about/mission" },
              { text: "Geofeed", link: "/zh-cn/about/geofeed" },
              { text: "联系方式", link: "/zh-cn/about/contact" },
            ],
          },
          {
            text: "对等互联",
            items: [
              { text: "一般政策", link: "/zh-cn/peering/policy" },
              { text: "互联网交换点", link: "/zh-cn/peering/ix" },
              { text: "直接对等互联", link: "/zh-cn/peering/direct" },
            ],
          },
          {
            text: "BGP 社区",
            items: [
              { text: "内部社区", link: "/zh-cn/communities/internal" },
              { text: "控制社区", link: "/zh-cn/communities/control" },
              { text: "代码定义", link: "/zh-cn/communities/codes" },
            ],
          },
        ],
        footer: {
          copyright: "版权所有 © 2022-2025 Yanzheng Sun",
        },
      },
    },
  },
  cleanUrls: true,
  lastUpdated: false,
  outDir: "../../public/docs",
  base: "/docs/",
});
