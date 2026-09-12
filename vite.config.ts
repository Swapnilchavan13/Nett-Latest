import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // Required for TanStack file-based routing
    tailwindcss(),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: 'build',
    cssMinify: false,
  },
})