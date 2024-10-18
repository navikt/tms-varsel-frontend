import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
const {TMS_APP_BASE_URL, TMS_MIN_SIDE_URL, TMS_VARSLER_API_URL} = loadEnv(import.meta.env, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  define: {
    "import.meta.env.TMS_APP_BASE_URL":process.env.TMS_APP_BASE_URL,
    "import.meta.env.TMS_MIN_SIDE_URL":process.env.TMS_MIN_SIDE_URL,
    "import.meta.env.TMS_VARSLER_API_URL":process.env.TMS_VARSLER_API_URL,
  },
  base: "/minside/varsler-ny",
  build: {
    assetsPrefix: "https://cdn.nav.no/min-side/tms-varsler-frontend"
  },
  integrations: [react()],
  i18n: {
    defaultLocale: "nb",
    locales: ["nn", "en", "nb"],
    routing: {
      prefixDefaultLocale: false
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  experimental: {
    serverIslands: true
  },
});