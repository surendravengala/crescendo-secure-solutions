import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/crescendo-secure-solutions/',
  plugins: [react()],
})