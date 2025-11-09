import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cardapio_online/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
