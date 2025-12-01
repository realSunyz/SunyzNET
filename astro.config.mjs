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
      endpointUrl: "https://umami.sunyz.net",
      id: "3f56f50f-ea4c-4ed9-8deb-5c342efa689b",
      trackerScriptName: "cloud.js"
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
