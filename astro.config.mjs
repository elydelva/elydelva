// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkMermaidjs from "remark-mermaidjs";

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
  integrations: [
    mdx({
      remarkPlugins: [
        [
          remarkMermaidjs,
          {
            mermaidConfig: {
              theme: "base",
              themeVariables: {
                fontFamily: '"Inter Variable", system-ui, sans-serif',
                fontSize: "13px",
                primaryColor: "#f0e4d8",
                primaryBorderColor: "#b89278",
                primaryTextColor: "#432818",
                secondaryColor: "#ede0d4",
                secondaryBorderColor: "#b89278",
                secondaryTextColor: "#432818",
                tertiaryColor: "#f5ede6",
                tertiaryBorderColor: "#b89278",
                tertiaryTextColor: "#432818",
                lineColor: "#8a6654",
                textColor: "#432818",
                titleColor: "#432818",
                edgeLabelBackground: "#faf6f2",
                mainBkg: "#f0e4d8",
                nodeBorder: "#b89278",
                clusterBkg: "#f5ede6",
                clusterBorder: "#b89278",
              },
            },
          },
        ],
      ],
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
