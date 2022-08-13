<template>
    <div class="xl:mt-44 md:mt-36 sm:mt-28 h-full sm:mb-7 tablet">
        <h1 class="container mx-auto lg:text-left sm:text-center text-5xl mb-2" data-aos="fade-right">
            Portfolio
        </h1>
        <div v-if="this.projets.length == 0" class="text-center">
            <p class="mt-36">
                Si vous voyez ce texte, c'est qu'il y a eu un problème lors de l'appel de l'API.<br>
            </p>
            <p class="mt-5 error">
                Je vous invite à <a rel="noopener" class="transition ease-in duration-200 cursor-pointer"
                    @click="refreshPage">rafraîchir</a> la page ou alors revenir plus tard.
            </p>
            <p class="mt-5 error">
                Vous pouvez aussi <a rel="noopener" class="transition ease-in duration-200" href="http://urlr.me/rnjv1"
                    target="_blank">cliquer ici</a> pour patienter.
            </p>
        </div>
        <div v-else
            class="container mx-auto grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-x-0 gap-y-20 mt-32 xl:mb-10">
            <div class="mx-auto card" v-for="projet in projets" :key="projet.item" data-aos="fade-up">
                <NuxtLink :to="'/projet/' + projet.attributes.Slug">
                    <img lt="Image illustration vers le projet" class="img-fluid w-full" :src="apiUrl + projet.attributes.Image.data.attributes.formats.small.url">
                    <div class="p-5">
                        <h2 class="xl:text-2xl sm:text-l mt-1">{{ projet.attributes.Title }}</h2>
                        <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">{{ projet.attributes.Type }}</h3>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    head() {
        return {
            title: 'Mon Portfolio | Martial Escudero',
            meta: [
                { hid: 'description', name: 'description', content: 'Mon Portfolio avec tous mes projets - Martial Escudero - Étudiant & Développeur Web.' },

                { hid: 'og:url', name: 'og:url', content: 'https://www.martialescudero.com/portfolio' },
                { hid: 'og:title', name: 'og:title', content: 'Mon Portfolio | Martial Escudero' },
                { hid: 'og:description', name: 'og:description', content: 'Mon Portfolio avec tous mes projets - Martial Escudero - Étudiant & Développeur Web.' },

                { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.martialescudero.com/portfolio' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Mon Portfolio | Martial Escudero' },
                { hid: 'twitter:description', name: 'twitter:description', content: 'Mon Portfolio avec tous mes projets - Martial Escudero - Étudiant & Développeur Web.' },
            ],
        }
    },

    data() {
        return {
            apiUrl: 'https://strapi.martialescudero.com'
        }
    },

    computed: {
        ...mapGetters('store', ['projets']),
    },

    methods: {
        refreshPage() {
            location.reload();
        }
    },

    mounted() {
        window.scroll(0, 0)
    }
}
</script>

<style scoped>
.error a {
    color: #93C5FD;
}

.error a:hover {
    background: #93C5FD;
    color: #0e0e0e;
}

.card {
    background: #202020;
    border-radius: 20px;
    width: 90%;
    height: 100%;
}

.card img {
    margin: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

@media screen and (max-width: 640px) {
    .card {
        width: 90%;
    }
}
</style>
