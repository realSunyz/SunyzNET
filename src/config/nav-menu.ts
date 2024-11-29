import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Tools",
      items: [
        {
          title: "PeeringDB",
          href: "http://peeringdb.com/asn/150289",
        },
      ],
    },
  ],
  links: [
    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
