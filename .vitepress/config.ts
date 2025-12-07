import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en",
  title: "SunyzNET",
  titleTemplate: ":title | Sunyz Network",
  description:
    "Sunyz Network (AS150289, aka. SunyzNET) is an experimental networking project focused on educational and research purposes.",
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
      { text: "About", link: "/docs/about/mission" },
      { text: "Peering", link: "/docs/peering/policy" },
      { text: "Communities", link: "/docs/communities/information" },
    ],
    sidebar: [
      {
        text: "About",
        items: [
          { text: "Mission", link: "/docs/about/mission" },
          { text: "Contact", link: "/docs/about/contact" },
        ],
      },
      {
        text: "Peering",
        items: [
          { text: "General Policy", link: "/docs/peering/policy" },
          { text: "Internet Exchanges", link: "/docs/peering/ix" },
          { text: "Direct Session", link: "/docs/peering/direct" },
        ],
      },
      {
        text: "Algorithm",
        items: [
          { text: "Received Routes", link: "/docs/algorithm/import" },
          { text: "Exported Routes", link: "/docs/algorithm/export" },
        ],
      },
      {
        text: "BGP Communities",
        items: [
          { text: "Information Communities", link: "/docs/communities/information" },
          { text: "Control Communities", link: "/docs/communities/control" },
          { text: "Code Definition", link: "/docs/communities/codes" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2022-2025 Sunyz Network",
    },
  },
  cleanUrls: true,
  srcDir: "./",
  sitemap: {
    hostname: 'https://sunyz.net'
  }
});
