export default defineNuxtConfig({
    css: [
        "@/assets/css/style.css"
    ],
    typescript: {
        strict: true
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    modules: [
        "@nuxt/devtools",
        "@vueuse/nuxt",
        "@nuxt/content",
        ["@nuxtjs/eslint-module", { 
            "lintOnStart": true 
        }]
    ],
})