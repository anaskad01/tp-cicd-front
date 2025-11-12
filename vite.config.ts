import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const plugins = [vue()]

if (process.env.NODE_ENV !== 'production') {
  const vueDevTools = require('vite-plugin-vue-devtools')
  plugins.push(vueDevTools())
}

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
