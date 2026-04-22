import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/sigma/', 
  plugins: [
    vue(),
    {
      name: 'watch-external',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('tailwind.config.js') || file.endsWith('tailwind.config.cjs')) {
          server.ws.send({ type: 'full-reload' })
        }
      },
    }
  ],
  server: {
    watch: {
      usePolling: true,
    }
  }
})