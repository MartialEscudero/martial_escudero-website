<template>
    <div class="home">
        <HomeWelcome />
        <HomeAbout />
        <HomeProjets />
        <HomeContactMe />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Martial ESCUDERO | Étudiant - Développeur Web",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.",
                },

                {
                    hid: "og:url",
                    property: "og:url",
                    content: "https://www.martialescudero.com",
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "Martial Escudero | Étudiant - Développeur Web",
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: "Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.",
                },

                {
                    hid: "twitter:url",
                    property: "twitter:url",
                    content: "https://www.martialescudero.com",
                },
                {
                    hid: "twitter:title",
                    property: "twitter:title",
                    content: "Martial Escudero | Étudiant - Développeur Web",
                },
                {
                    hid: "twitter:description",
                    property: "twitter:description",
                    content: "Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.",
                },
            ],
        };
    },
};
</script>
