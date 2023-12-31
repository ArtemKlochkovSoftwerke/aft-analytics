import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aft-analytics/',
  plugins: [
    vue(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
              @import "@/styles/main.scss";
              @import "@/styles/mixins.scss as *";
            `
      }
    }
  }
})
