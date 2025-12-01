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
        src: "https://umami.sunyz.net/cloud.js",
        "data-website-id": "3f56f50f-ea4c-4ed9-8deb-5c342efa689b",
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
  cleanUrls: true,
  lastUpdated: true,  
  outDir: "../../public/docs",
  base: "/docs/"
});
