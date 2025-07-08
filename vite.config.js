import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/NishchithRao-hub.github.io/',
// })

export default defineConfig({
  plugins: [react()],
  base: '/',
})

// Test local production build
// npm run build

// This will generate a dist/ folder with production files.
// You can preview it locally with:
// npm run preview

// Deploy to GitHub Pages:
// npx vite-gh-pages

// This will:
// Push your dist/ contents to the gh-pages branch
// GitHub Pages will serve the site from there

// Verify Deployment URL
// Go to:
// 📎 https://NishchithRao-hub.github.io/
// It may take ~30–60 seconds to show the new version.

// Add Deploy Script
// To make future deploys easier, add this to package.json:
// "scripts": {
//   "dev": "vite",
//   "build": "vite build",
//   "preview": "vite preview",
//   "deploy": "vite-gh-pages"
// }

// Then you can deploy with:
// npm run deploy



