<script setup>
const seoTitle = "Développeur Front-End | Martial Escudero"
const seoDescription = "Martial Escudero - Développeur Front-End - Site Portofolio et Labo."

useSeoMeta({
    titleTemplate: "%s",
    title: seoTitle,
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    description: seoDescription,
    ogDescription: seoDescription,
    twitterDescription: seoDescription
})
</script>

<template>
    <div>
        <HomepageWelcome />
        <HomepageAbout />
        <HomepageProjetcs />
        <HomepageContactMe />
    </div>
</template>
