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
      id: "b14beceb-8732-424c-8e13-d1454c93ace1",
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
