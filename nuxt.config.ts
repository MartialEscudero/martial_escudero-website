export default defineNuxtConfig({
    css: [
        "@/assets/css/style.css"
    ],
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
    ],
})