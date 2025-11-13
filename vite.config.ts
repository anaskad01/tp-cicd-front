import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async () => {
  const plugins = [vue()]

  if (process.env.NODE_ENV !== 'production') {
    const vueDevTools = await import('vite-plugin-vue-devtools')
    if (vueDevTools?.default) {
      plugins.push(vueDevTools.default())
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
