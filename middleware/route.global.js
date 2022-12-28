export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== from.path && process.client) {
        setTimeout(() => {
            document.querySelector("#scrollNavbar").classList.remove("navbarScroll")
            document.querySelector("#scrollNavbar").classList.add("navbarTop")
        }, 10)
    }
})