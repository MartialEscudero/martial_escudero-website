<script lang="ts">
import { mapActions } from 'pinia'
import { mainStore } from '@/stores/mainStore'

export default {
    setup() {
        useHead({
            htmlAttrs: { lang: "fr" },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            titleTemplate: "%s | Martial Escudero",
            meta: [
                { name: "author", content: "Martial Escudero" },
                { name: "copyright", content: "Martial Escudero" },
                { name: "description", content: "Site Portofolio et Labo de Martial Escudero - Développeur Front-End." },
                { name: 'keywords', content: "Martial Escudero,Escudero Martial,Nexton,NEXTON,consulting,Étudiant,Université de Limoges,Limoges,LPMI,Licence Pro,DEUST,Webmaster & Métiers de l'Internet,Développeur Front-End,Développeur,Développeur Web,Vidéaste,Graphisme" },

                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://www.martialescudero.com" },
                { property: "og:title", content: "Développeur Front-End | Martial Escudero" },
                { property: "og:description", content: "Site Portofolio et Labo de Martial Escudero - Développeur Front-End." },
                { property: "og:image", content: "https://www.martialescudero.com/martialescudero-card.jpg" },

                { property: "twitter:card", content: "summary_large_image" },
                { property: "twitter:url", content: "https://www.martialescudero.com" },
                { property: "twitter:title", content: "Développeur Front-End | Martial Escudero" },
                { property: "twitter:description", content: "Site Portofolio et Labo de Martial Escudero - Développeur Front-End." },
                { property: "twitter:image", content: "https://www.martialescudero.com/martialescudero-card.jpg" },
            ],
        });
    },

    methods: {
        ...mapActions(mainStore, ['getProjects'])
    },

    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="h-screen md:scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-slate-700">
        <LayoutNavbar/>
        <main>
            <slot/>
        </main>
        <LayoutFooter/>
    </div>
</template>