import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    base: "./", // or "/"
    rollupOptions: {
      external: ['firebase/app', 'firebase/firestore', 'firebase/auth'],
    },
    define: {
      'process.env': process.env
    }
  },
})
