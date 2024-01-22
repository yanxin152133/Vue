import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),], resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }, server: {
        host: '0.0.0.0',
        base: '/cyx'
    // }, base: process.env.NODE_ENV === "development" ? "/" : "/cyx/", // 默认 '/'
    }, base: process.env.NODE_ENV === "development" ? "/" : "/", // 默认 '/'
    build: {
        outDir: 'cyx', // 默认是 'dist'  
    }
})
