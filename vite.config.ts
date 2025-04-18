import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml: {
        enforce: 'pre',
        transform(html) {
          return html.replace(
            /<title>(.*?)<\/title>/,
            '<title>TellATale</title>'
          )
        }
      }
    }
  ],
  base: '/kamal2730.github.io/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
