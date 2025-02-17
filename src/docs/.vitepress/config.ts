import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "SunyzNET",
  titleTemplate: ":title | SunyzNET",
  description:
    "Docs for Sunyz Network (AS150289, aka. SunyzNET), which is an experimental IPv6-only networking project focused on educational and research purposes, operated by Yanzheng SUN.",
  head: [["link", { rel: "icon", href: "https://cdn.sunyz.net/favicons/favicon.ico" }]],
  themeConfig: {
    logo: 'https://cdn.sunyz.net/logos/sunyznetwork.webp',
    siteTitle: false,
    nav: [
      { text: "Home", link: "../" },
      { text: "Peering", link: "/peering/ix" },
      { text: "Communities", link: "/communities/internal" },
    ],
    sidebar: [
      {
        text: "About",
        items: [
          { text: "Mission", link: "/about/mission" },
          { text: "Locations", link: "/about/pops" },
        ],
      },
      {
        text: "Peering",
        items: [
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
    socialLinks: [
      { icon: "github", link: "https://github.com/SunyzNET" },
    ],
    footer: {
      copyright: 'Copyright © 2022-2025 Yanzheng Sun'
    }
  },
  lastUpdated: false,
  outDir: "../../public/docs",
  base: "/docs/",
});
