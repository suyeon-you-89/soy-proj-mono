import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core-ui': path.resolve(__dirname, '../../@core/ui/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@core-ui/styles/_global.scss" as *; `
      }
    }
  }
})
