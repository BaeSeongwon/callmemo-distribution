import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { siteMetaPlugin } from './vite-plugins/site-meta'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [siteMetaPlugin(root), react(), tailwindcss()],
  base: '/callmemo-distribution/',
})
