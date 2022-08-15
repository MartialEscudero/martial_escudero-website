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
            postcssOptions: require("./postcss.config.js"),
        },

        transpile: [
            "@heroicons/vue"
        ],
    },
    
    buildModules: [
        '@pinia/nuxt',
    ],
})