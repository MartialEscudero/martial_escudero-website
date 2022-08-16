import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "@/assets/css/style.css",
    ],
    
    typescript: {
        strict: true
    },

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },

        transpile: [
            "@heroicons/vue"
        ],
    },
    
    buildModules: [
        '@pinia/nuxt',
    ],
})