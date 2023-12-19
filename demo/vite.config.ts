import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const isProduction = process.env.NODE_ENV === 'production'
export default defineConfig({
  base: isProduction? '/yi-infinite-loading-vue3/' : '/',
  plugins: [vue()],
})
