<script setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid"

useHead({
    title: "Erreur 404"
})
</script>

<template>
    <div class="h-screen flex flex-col justify-center items-center gap-y-4">
        <h1 class="text-5xl font-bold">Erreur 404</h1>
        <a class="hypertext flex items-center gap-2" href="/">
            <span>Retour à la page d'accueil</span>
            <ArrowLongRightIcon class="w-6 h-6" />
        </a>
    </div>
</template>

<style>
.gap-y-4 {
    row-gap: 1rem;
}

.gap-2 {
    gap: 0.5rem;
}
</style>