<script setup>
const seoTitle = "Développeur Front-End - Martial Escudero"
const seoDescription = "Martial Escudero - Développeur Front-End - Site Portofolio et Labo."

useSeoMeta({
    title: "Développeur Front-End",
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
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
