import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel expects this by default
  },
  base: './', // Sometimes needed if you're using relative paths
})
