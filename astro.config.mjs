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
  server: {
    headers: {
      "Content-Security-Policy": "default-src https: data: 'unsafe-inline' 'unsafe-eval'",
      "Access-Control-Allow-Origin": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.sunyz.net; style-src 'self' 'unsafe-inline' https://cdn.sunyz.net https://fonts.googleapis.com; img-src 'self' blob: data: https://cdn.sunyz.net; font-src 'self' https://cdn.sunyz.net https://fonts.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-src 'none'; frame-ancestors 'none';",
      "Permissions-Policy": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
      "Referrer-Policy": "no-referrer-when-downgrade",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    },
  },
  output: "server",
  adapter: cloudflare(),
});
