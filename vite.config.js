import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Si tu repositorio se llama ParcialReact:
  base: '/labo2parcial/', 
})