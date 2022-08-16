import { useWindowScroll } from '@vueuse/core'

export function displayScroll() {
    if (process.client) {
        const { y } = useWindowScroll();

        window.onscroll = function () {
            let scrollY = y.value;

            if (scrollY >= 300) {
                document.querySelector<any>("#scrollArrow").classList.add("hiddenScroll");
                document.querySelector<any>("#scrollArrow").classList.remove("activeScroll");
            } else if (scrollY <= 300) {
                document.querySelector<any>("#scrollArrow").classList.remove("hiddenScroll");
                document.querySelector<any>("#scrollArrow").classList.add("activeScroll");
            }
        }
    }
}