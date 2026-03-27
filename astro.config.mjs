import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap"; // 👈 agregá esta línea

// https://astro.build/config
export default defineConfig({
  site: 'https://joacoportfolioanalis.netlify.app', // 👈 este debe ser tu dominio real publicado
  integrations: [tailwind(), robotsTxt(), sitemap()], // 👈 agregá sitemap aquí
});