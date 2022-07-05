import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @ts-ignore
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": path.resolve(__dirname, "src"),
    coms: path.resolve(__dirname, "src/components")
  }
})
