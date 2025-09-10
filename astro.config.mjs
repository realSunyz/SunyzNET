import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import yeskunallumami from "@yeskunall/astro-umami";

export default defineConfig({
  site: "https://sunyz.net",
  integrations: [
    icon(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    yeskunallumami({
      domains: ["sunyz.net"],
      endpointUrl: "https://analytics.sunyz.net",
      id: "a8aaa218-a8e5-4aaa-a631-23d431cdc5bd",
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
