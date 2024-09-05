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
      manifest : {
        "name": "Techsnap",
        "short_name": "TS",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "lang": "en",
        "scope": "/",
        "description": "An one step destination for your career",
        "theme_color": "#ffffff",
        "orientation": "any",
        "icons": [
          { "src": "/faviconmobile.png", "sizes": "192x192", "type": "image/png" },
          { "src": "/favicon.png", "sizes": "512x512", "type": "image/png" },
          {
            "src": "/favicon.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ],
        "categories": ["education", "career"],
        "screenshots": [
          {
            "src": "/screenshot1.png",
            "type": "image/png",
            "sizes": "540x720",
            "form_factor": "narrow"
          },
          {
            "src": "/screenshot2.png",
            "type": "image/png",
            "sizes": "720x540",
            "form_factor": "wide"
          }
        ]
      }
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
