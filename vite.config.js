import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias:{
          components: "/src/components",
          assets: "/src/assets",
          pages: "/src/pages",
          hooks: "/src/hooks",
          action: "/src/action",
          store: "/src/store",
          consts: "/src/consts",
        }
    }
})
