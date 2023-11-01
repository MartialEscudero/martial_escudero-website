<script setup>
const route = useRoute()

useHead({
    titleTemplate: title => title ? `${title} - Martial Escudero` : "Développeur Front-End - Martial Escudero",
    htmlAttrs: {
        lang: "fr"
    },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Martial Escudero" },
        { name: "copyright", content: "Martial Escudero" },
        { name: "keywords", content: "Martial Escudero,Escudero Martial,Nexton,NEXTON,consulting,agency,Étudiant,Université de Limoges,Limoges,LPMI,Licence Pro,DEUST,Webmaster & Métiers de l'Internet,Développeur Front-End,Développeur,Développeur Web,Vidéaste,Graphisme" },
        { name: "description", content: `Développeur Front-End de ${useGetAge()} ans avec ${getExp()} d'expérience professionnelle en Agence Web et diplômé d'une Licence Professionnelle en Technologie du Développement Web à l'Université de Limoges.` },
    ],
    link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: `https://www.martialescudero.com${route.fullPath !== "/" ? route.fullPath : ""}` },
    ],
})

useSeoMeta({
    ogType: "website",
    twitterCard: "summary_large_image",
    ogImage: "https://www.martialescudero.com/martialescudero-card.jpg",
    twitterImage: "https://www.martialescudero.com/martialescudero-card.jpg"
})

function getExp() {
    const date = new Date()
    const currentYear = date.getFullYear()
    const startYear = 2022

    const exp = currentYear - startYear

    return exp === 1 ? `${exp} an` : `${exp} ans`
}
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#93c5fd" />
        <NuxtPage />
    </NuxtLayout>
</template>
