import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-index-html-route',
      configureServer(server) {
        server.middlewares.use('/index.html', (_req, res, next) => {
          // rewrite to SPA root so React Router handles it
          _req.url = '/'
          next()
        })
      },
    },
  ],
})
