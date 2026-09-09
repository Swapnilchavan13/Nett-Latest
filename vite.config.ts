import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), // Added Tailwind v4 plugin
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