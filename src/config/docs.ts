import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Knowledge Base",
      href: "/docs/about/",
    },
  ],
  sidebarNav: [
    {
      title: "About",
      items: [
        {
          title: "Mission",
          href: "/docs/about",
          disabled: true,
        },
        {
          title: "Points of Presence",
          href: "/docs/about",
          disabled: true,
        },
        {
          title: "Geofeed",
          href: "/docs/about",
          disabled: true,
        },
      ],
    },
    {
      title: "Peering",
      items: [
        {
          title: "Internet Exchanges",
          href: "/docs/about",
          disabled: true,
        },
      ],
    },
  ],
};
