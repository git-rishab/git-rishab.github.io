import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        nodeResolve({ mainFields: ['module', 'main'] }),
        commonjs()
      ]
    },
    chunkSizeWarningLimit: 5000,
    outDir: 'build'
  }
})
