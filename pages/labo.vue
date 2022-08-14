<script lang="ts">
export default  {
    setup() {
        useHead({
            title: "Le Labo",
            meta: [
                { name: "description", content: "Labo" },

                { hid: "og:url",          property: "og:url",           content: "https://www.martialescudero.com/labo" },
                { hid: "og:title",        property: "og:title",         content: "Le Labo | Martial Escudero" },
                { hid: "og:description",  property: "og:description",   content: "Le Labo de Martial Escudero - Développeur Front-End." },


                { hid: "twitter:url",           property: "twitter:url",          content: "https://www.martialescudero.com/labo" },
                { hid: "twitter:title",         property: "twitter:title",        content: "Le Labo | Martial Escudero"  },
                { hid: "twitter:description",   property: "twitter:description",  content: "Le Labo de Martial Escudero - Développeur Front-End." },
            ],
        })
    },
}
</script>

<template>
    <p>Le Labo</p>
</template>