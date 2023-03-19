import { useWindowScroll } from "@vueuse/core"

export function onScroll() {
    if (process.client) {
        const { y } = useWindowScroll()
        const route = useRoute()

        window.onscroll = function () {
            let scrollY = y.value

            if (scrollY >= 300) {
                document.querySelector("#scrollNavbar").classList.remove("navbarTop")
                document.querySelector("#scrollNavbar").classList.add("navbarScroll")

                if (route.fullPath === "/") {
                    document.querySelector("#scrollArrow").classList.add("hiddenArrow")
                    document.querySelector("#scrollArrow").classList.remove("activeArrow")
                }
            } else if (scrollY <= 300) {
                document.querySelector("#scrollNavbar").classList.add("navbarTop")
                document.querySelector("#scrollNavbar").classList.remove("navbarScroll")

                if (route.fullPath === "/") {
                    document.querySelector("#scrollArrow").classList.remove("hiddenArrow")
                    document.querySelector("#scrollArrow").classList.add("activeArrow")
                }
            }
        }
    }
}

export function setCrossMenu() {
    document.querySelector("#scrollNavbar").classList.remove("navbarScroll")
    document.querySelector("#scrollNavbar").classList.add("navbarTop")
}

export function disableScroll() {
    document.body.classList.add("h-full")
    document.body.classList.add("overflow-hidden")
}

export function enableScroll() {
    document.body.classList.remove("h-full")
    document.body.classList.remove("overflow-hidden")
}
