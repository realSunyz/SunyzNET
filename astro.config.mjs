import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sunyz.net",
  integrations: [
    icon(),
    sitemap(),
    react(),
    tailwind({  
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});