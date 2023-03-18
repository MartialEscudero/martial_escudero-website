<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid"
import Typed from "typed.js"

let textBase = ref("")

const textTyping = [
    "Front-End Developer.",
    "Full-Stack JS Developer.",
    "Web Designer.",
    "Video Maker.",
    "Tout est en anglais juste pour le style."
]

onMounted(() => {
    try {
        if (process.client) {
            new Typed(".text-typing", {
                strings: textTyping,
                typeSpeed: 100,
                backSpeed: 50,
                loop: true
            })
        }
    } catch {
        textBase.value = textTyping[0]
    }
})
</script>

<template>
    <div id="topHomePage" class="relative z-0 flex h-screen flex-col items-center justify-center">
        <div>
            <h1>
                <span class="block text-4xl font-bold md:text-6xl">Hello,</span>
                <span class="my-2 block text-lg md:my-4 md:text-5xl">My name is <span class="font-bold text-blue-300">Martial Escudero.</span></span>
            </h1>
            <p class="text-sm md:text-lg">&nbsp;<span class="text-typing ml-[-2px]" v-text="textBase" /></p>
        </div>
        <div id="scrollArrow" class="absolute bottom-5">
            <ChevronDoubleDownIcon v-scroll-to="{ el: '#about', offset: -100, duration: 800 }" class="h-10 w-10 animate-bounce opacity-50" />
        </div>
    </div>
</template>