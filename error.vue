<script setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid"

useSeoMeta({
    titleTemplate: "%s",
    title: "Erreur 404",
})
</script>

<template>
    <div class="flex h-screen flex-col items-center justify-center gap-y-4">
        <h1 class="text-5xl font-bold">Erreur 404</h1>
        <a
            class="hypertext flex items-center gap-2"
            href="/"
        >
            <span>Retour à la page d'accueil</span>
            <ArrowLongRightIcon class="h-6 w-6" />
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
