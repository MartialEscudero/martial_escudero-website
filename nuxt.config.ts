export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: { lang: "fr" },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        }
    },
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
        ["@nuxtjs/eslint-module", { "lintOnStart": true }]
    ],
})