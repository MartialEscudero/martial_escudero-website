<script lang="ts">
    import { ChevronDoubleDownIcon } from "@heroicons/vue/outline";

    textRotate([
        "Web Developer.",
        "Front-End Developer.",
        "Full-Stack JS Developer.",
        "Web Designer.",
        "Video Maker.",
        "Tout est en anglais juste pour le style."
    ]);

    displayScroll();

    export default {
        components: { ChevronDoubleDownIcon },
    }
</script>

<template>
    <div id="topHomePage" class="relative h-screen flex flex-col justify-center items-center z-0">
        <div>
            <h1>
                <span class="block font-bold text-4xl md:text-6xl">Hello,</span>
                <span class="block text-lg md:text-5xl my-2 md:my-4">My name is <span class="font-bold text-blue-300">Martial Escudero.</span></span>
            </h1>
            <p class="txt-rotate text-sm md:text-lg"></p>
        </div>
        <div id="scrollArrow" class="absolute bottom-5">
            <ChevronDoubleDownIcon v-scroll-to="{el: '#about', offset: -100, duration: 800}" class="animate-bounce h-10 w-10 cursor-pointer opacity-50"/>
        </div>
    </div>
</template>