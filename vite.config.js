import { defineConfig } from 'vite'

// Dev proxy: forward /api to the local Express server at :4000
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
