import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePugPlugin from 'vite-plugin-pug';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePugPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
