<script setup>
const route = useRoute()

useHead({
    htmlAttrs: { lang: "fr" },
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Martial Escudero` : "Martial Escudero | Développeur Front-End"
    },
    meta: [
        { name: "author", content: "Martial Escudero" },
        { name: "copyright", content: "Martial Escudero" },
        { name: "description", content: `Développeur Front-End de ${useGetAge()} ans avec ${getExp()} d'expérience professionnelle en Agence Web et diplômé d'une Licence Professionnelle en Technologie du Développement Web à l'Université de Limoges.`},
        { name: "keywords", content: "Martial Escudero,Escudero Martial,Nexton,NEXTON,consulting,agency,Étudiant,Université de Limoges,Limoges,LPMI,Licence Pro,DEUST,Webmaster & Métiers de l'Internet,Développeur Front-End,Développeur,Développeur Web,Vidéaste,Graphisme" },

        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.martialescudero.com" },
        { property: "og:title", content: "Martial Escudero | Développeur Front-End" },
        { property: "og:description", content: "Martial Escudero - Développeur Front-End - Site Portofolio et Labo." },
        { property: "og:image", content: "https://www.martialescudero.com/martialescudero-card.jpg" },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://www.martialescudero.com" },
        { property: "twitter:title", content: "Martial Escudero | Développeur Front-End" },
        { property: "twitter:description", content: "Martial Escudero - Développeur Front-End - Site Portofolio et Labo." },
        { property: "twitter:image", content: "https://www.martialescudero.com/martialescudero-card.jpg" }
    ],
    link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: `https://www.martialescudero.com${route.fullPath !== "/" ? route.fullPath : ""}` }
    ]
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