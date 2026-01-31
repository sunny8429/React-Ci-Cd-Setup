import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using test functions (describe, it, expect) globally
    environment: 'jsdom', // Sets up a browser-like DOM environment
    setupFiles: './src/setupTests.js', // Specifies a file to run before each test
  },
})
