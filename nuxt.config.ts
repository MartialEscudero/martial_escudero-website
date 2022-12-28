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
    build: {
        transpile: [
            "@heroicons/vue"
        ]
    },
    modules: [
        "@vueuse/nuxt"
    ]
})