<script lang="ts" setup>
    useHead({
        htmlAttrs: { lang: 'fr' },
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, maximum-scale=1",
        titleTemplate: "%s | Martial Escudero",
        meta: [
            { name: 'author',       content: 'Martial Escudero' },
            { name: 'copyright',    content: 'Martial Escudero' },
            { name: "description", content: "Site Portofolio et Labo de Martial Escudero - Développeur Front-End." },

            { hid: 'og:type',         property: 'og:type',          content: 'website' },
            { hid: 'og:url',          property: 'og:url',           content: 'https://www.martialescudero.com' },
            { hid: 'og:title',        property: 'og:title',         content: 'Développeur Front-End | Martial Escudero' },
            { hid: 'og:description',  property: 'og:description',   content: 'Site Portofolio et Labo de Martial Escudero - Développeur Front-End.' },
            { hid: 'og:image',        property: 'og:image',         content: '/martialescudero-card.jpg' }, 

            { hid: 'twitter:card',          property: 'twitter:card',         content: 'summary_large_image' },
            { hid: 'twitter:url',           property: 'twitter:url',          content: 'https://www.martialescudero.com' },
            { hid: 'twitter:title',         property: 'twitter:title',        content: 'Développeur Front-End | Martial Escudero' },
            { hid: 'twitter:description',   property: 'twitter:description',  content: 'Site Portofolio et Labo de Martial Escudero - Développeur Front-End.' },
            { hid: 'twitter:image',         property: 'twitter:image',        content: '/martialescudero-card.jpg' }, 
        ],
    });
</script>

<template>
    <div>
        <LayoutNavbar />
        <main>
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>
