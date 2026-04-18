import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'watch-external', // Самописный плагин-помощник
      handleHotUpdate({ file, server }) {
        if (file.endsWith('tailwind.config.js') || file.endsWith('tailwind.config.cjs')) {
          server.ws.send({ type: 'full-reload' }) // Полная перезагрузка при смене конфига
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