<script setup>
const seoTitle = "Mon Portfolio | Martial Escudero"
const seoDescription = "Le Portfolio de Martial Escudero - Développeur Front-End"

const { data: projects } = await useAsyncData(() => queryContent("projet").sort({ date: -1 }).find())

useSeoMeta({
    titleTemplate: "%s",
    title: "Mon Portfolio",
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    description: seoDescription,
    ogDescription: seoDescription,
    twitterDescription: seoDescription,
})
</script>

<template>
    <div class="container mx-auto px-5">
        <h1 class="mt-28 text-center text-5xl sm:text-left md:mt-36">Portfolio</h1>
        <div class="my-16 grid grid-cols-1 gap-20 lg:grid-cols-2 xl:grid-cols-3">
            <NuxtLink
                v-for="project in projects"
                :key="project"
                :to="project._path"
                class="h-[300px] w-full transition duration-200 ease-in-out hover:scale-[1.05] md:h-[250px] lg:h-[350px]"
            >
                <div
                    :style="`background-image: url(/content/${project.card})`"
                    class="h-5/6 rounded-t-xl bg-cover bg-center"
                />
                <div class="rounded-b-xl bg-[#202020] p-2 lg:p-4">
                    <p class="text-lg font-medium lg:text-2xl">{{ project.title }}</p>
                    <p class="text-xs text-blue-300 lg:text-sm">{{ project.type }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
