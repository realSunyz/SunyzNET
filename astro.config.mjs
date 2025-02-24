import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.sunyz.net;
    style-src 'self' 'unsafe-inline' https://cdn.sunyz.net https://fonts.googleapis.com;
    img-src 'self' blob: data: https://cdn.sunyz.net;
    font-src 'self' https://cdn.sunyz.net https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'none';
    frame-ancestors 'none';
`

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
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer-when-downgrade",
      "Permissions-Policy": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
      "Access-Control-Allow-Origin": "https://sunyz.net",
      "Content-Security-Policy": cspHeader.replace(/\n/g, ''),
    },
  },
  output: "server",
  adapter: cloudflare(),
});
