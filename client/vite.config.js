import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    tailwindcss(),
    react()
  ],

  server: {
    proxy: {
      "/browse": {
        target: "http://localhost:8000", // your backend port
        changeOrigin: true,
      },
    },
  },
})
