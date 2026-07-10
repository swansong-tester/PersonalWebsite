import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name for GitHub Pages
// (site serves from https://<user>.github.io/PersonalWebsite/).
// If the repo is renamed or a custom domain is added, update this.
export default defineConfig({
  plugins: [react()],
  base: '/PersonalWebsite/',
})
