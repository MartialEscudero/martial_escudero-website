<script setup>
import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid"

useHead({
    title: "Mon CV",
    meta: [
        { name: "description", content: "Le CV de Martial Escudero - Développeur Front-End" },

        { property: "og:url", content: "https://www.martialescudero.com/cv" },
        { property: "og:title", content: "Mon CV | Martial Escudero" },
        { property: "og:description", content: "Le CV de Martial Escudero - Développeur Front-End." },

        { property: "twitter:url", content: "https://www.martialescudero.com/cv" },
        { property: "twitter:title", content: "Mon CV | Martial Escudero" },
        { property: "twitter:description", content: "Le CV de Martial Escudero - Développeur Front-End." }
    ]
})

const apiUrl = import.meta.env.VITE_API_URL

const { data: cv } = await useAsyncData(() => $fetch(`${apiUrl}/links?filters[id][$eq]=3`))
</script>

<template>
    <div class="container mx-auto px-5">
        <h1 class="text-5xl text-center sm:text-left mt-28 md:mt-36">CV</h1>
        <div class="my-16 grid grid-col xl:grid-cols-2 gap-10 xl:gap-y-32">
            <div class="flex justify-center items-center">
                <p class="text-4xl font-bold">Moi.</p>
            </div>
            <div class="space-y-5">
                <p>
                    Actuellement <span class="font-bold">Développeur Front-End</span>
                    chez <a class="hypertext" href="https://www.nexton-agency.com/" rel="noopener" target="_blank">NEXTON</a>
                    , je suis diplômé d'une <a class="hypertext" href="/lpmi-presentation.png" rel="noopener" target="_blank">Licence Professionnelle - Métiers de l'informatique : Conduite de projet - Technologie du développement web</a>
                    et d'un <a class="hypertext" href="https://www.sciences.unilim.fr/tic/deust-webmaster-metiers-internet/" rel="noopener" target="_blank">DEUST Webmaster & Métiers de l'Internet</a>
                    tout deux à l’Université de Limoges.
                </p>
                <p>Passionné et autodidacte depuis toujours, je saurais m'investir et vous accompagnez dans vos projets.
                </p>
                <div class="flex justify-center mt-2">
                    <a class="button flex items-center w-fit" :href="cv.data[0].attributes.Url" target="_blank">
                        <DocumentArrowDownIcon class="w-6 h-6 mr-1"/>
                        <span>Télécharger mon CV</span>
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-4xl font-bold mt-20 md:mt-0">Expériences.</p>
            </div>
            <div class="section">
                <div class="card">
                    <p class="title">NEXTON - Développeur Front-End <span class="font-normal">| CDI</span></p>
                    <span class="date">Juin 2021 à maintenant - SAINT-AUGUSTIN</span>
                    <div class="infos">
                        <p class="desc">Développeur Front-End chez NEXTON dans la pôle Agence.</p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">NEXTON - Développeur Front-End Junior <span class="font-normal">| Stage</span></p>
                    <span class="date">3 mois - SAINT-AUGUSTIN</span>
                    <div class="infos">
                        <p class="desc">Stage de 3 mois dans le cadre de mon DEUST Webmaster & Métiers de l’Internet.
                        </p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">HortusBox - Développeur Front-End Junior <span class="font-normal">| Stage</span></p>
                    <span class="date">2 mois - BORDEAUX</span>
                    <div class="infos">
                        <p class="desc">Stage de 2 mois dans le cadre de mon DEUST Webmaster & Métiers de l’Internet.
                        </p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">OTI Ventadour-Egletons-Monédières - Webmaster <span class="font-normal">| CDI</span></p>
                    <span class="date">1 mois - ÉGLETONS</span>
                    <div class="infos">
                        <p class="desc">Stage de 1 mois dans le cadre de mon DEUST Webmaster & Métiers de l’Internet.
                        </p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">COM COM Service Ordures Ménagères <span class="font-normal">| Adjoint Technique</span></p>
                    <span class="date">JUILLET 2018 à DÉCEMBRE 2021 (par période) - ÉGLETONS</span>
                    <div class="infos">
                        <p class="desc">Emploi saisonnier durant chaque période de vacances scolaires.</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-4xl font-bold mt-20 md:mt-0">Diplôme.</p>
            </div>
            <div class="section">
                <div class="card">
                    <p class="title">Université de Limoges, Faculté Sciences Et Techniques <span class="font-normal">| Licence Pro</span></p>
                    <span class="date">SEPTEMBRE 2021 / JUILLET 2022 - LIMOGES</span>
                    <div class="infos">
                        <p class="desc">Licence Professionnelle – Métiers de l'informatique : Conduite de Projet - Développement Web.</p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">MOOC Gestion de projet</p>
                    <span class="date">OCTOBRE 2021</span>
                    <div class="infos">
                        <p class="desc">MOOC Gestion de projet - Spécialisation Management d'Équipe Projet & Spécialisation Outils et Applications Web pour la gestion de projet.</p>
                        <p class="add">Dans le cadre de ma Licence Professionnelle.</p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">Université de Limoges, Faculté Sciences Et Techniques <span class="font-normal">| DEUST</span></p>
                    <span class="date">SEPTEMBRE 2019 / JUILLET 2021 - LIMOGES</span>
                    <div class="infos">
                        <p class="desc">DEUST – Webmaster & Métiers de l’Internet : Parcours Développement Web et Plateformes Mobiles.</p>
                        <p class="add">Mention Bien.</p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">Lycée Pierre Caraminot <span class="font-normal">| Baccalauréat</span></p>
                    <span class="date">JUILLET 2019 - ÉGLETONS</span>
                    <div class="infos">
                        <p class="desc">Baccalauréat Scientifique spécialité et option Sciences de l’Ingénieur.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>