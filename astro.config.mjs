// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://elydelva.dev",
  output: "static",
  build: { inlineStylesheets: "always" },
  // Prefetch linked pages as soon as the user hovers an <a>, so by the time
  // they click the HTML + assets are already warm and the VT can start
  // immediately instead of waiting on a network round-trip.
  prefetch: { defaultStrategy: "hover", prefetchAll: false },
  markdown: {
    shikiConfig: {
      themes: {
        light: "rose-pine-dawn",
        dark: "rose-pine-moon",
      },
      wrap: false,
    },
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
