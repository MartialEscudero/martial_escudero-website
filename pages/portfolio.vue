<script setup>
useHead({
    title: "Portfolio",
    meta: [
        { name: "description", content: "Le Portfolio de Martial Escudero - Développeur Front-End" },

        { property: "og:url", content: "https://www.martialescudero.com/portfolio" },
        { property: "og:title", content: "Mon Portfolio | Martial Escudero" },
        { property: "og:description", content: "Le Portfolio de Martial Escudero - Développeur Front-End." },

        { property: "twitter:url", content: "https://www.martialescudero.com/portfolio " },
        { property: "twitter:title", content: "Mon Portfolio | Martial Escudero" },
        { property: "twitter:description", content: "Le Portfolio de Martial Escudero - Développeur Front-End." }
    ]
})

const apiUrl = import.meta.env.VITE_API_URL

const { data: projects } = await useAsyncData(() => $fetch(`${apiUrl}/projects?populate=%2A&sort=id:desc&filters[ShowIt][$eq]=true`))
</script>

<template>
    <div class="container mx-auto px-5">
        <h1 class="text-5xl text-center sm:text-left mt-28 md:mt-36">Portfolio</h1>
        <div class="my-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20">
            <NuxtLink v-for="project in projects.data" :to="'/projet/' + project.attributes.Slug"
                class="h-[300px] md:h-[250px] lg:h-[350px] w-full hover:scale-[1.05] transition ease-in-out duration-200">
                <div :style="`background-image: url(${project.attributes.Image.data.attributes.formats.medium.url})`"
                    class="rounded-t-xl h-5/6 bg-cover bg-center" />
                <div class="rounded-b-xl bg-[#202020] p-2 lg:p-4">
                    <p class="text-lg lg:text-2xl font-medium">{{ project.attributes.Title }}</p>
                    <p class="text-xs lg:text-sm text-blue-300">{{ project.attributes.Type }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>