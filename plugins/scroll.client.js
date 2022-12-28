export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("page:finish", async () => {
        window.scrollTo(0, 0)
    })
})