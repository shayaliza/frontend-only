import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'masked-icon.svg', 'robots.txt', 'apple-touch-icon.png'],
    })
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
