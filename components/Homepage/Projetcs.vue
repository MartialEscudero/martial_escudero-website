<script setup>
const { data: projects } = await useAsyncData(() => queryContent("projet").sort({ date: -1 }).limit(4).find())
</script>

<template>
    <div class="container mx-auto px-5 pt-10">
        <h2 class="text-center text-5xl sm:text-left">Derniers projets</h2>
        <div class="mt-20 mb-10 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 lg:my-20 xl:gap-y-28 xl:gap-x-40">
            <NuxtLink v-for="project in projects" :key="project" :to="project._path" class="h-[300px] w-full transition duration-200 ease-in-out hover:scale-[1.05] md:h-[250px] lg:h-[350px] xl:h-[500px]">
                <div :style="`background-image: url(/content/${project.card})`" class="h-5/6 rounded-t-xl bg-cover bg-center" />
                <div class="rounded-b-xl bg-[#202020] p-2 lg:p-4">
                    <p class="text-lg font-medium lg:text-2xl">{{ project.title }}</p>
                    <p class="text-xs text-blue-300 lg:text-sm">{{ project.type }}</p>
                </div>
            </NuxtLink>
        </div>
        <div class="flex flex-col items-center justify-center">
            <p class="my-5 text-center text-sm text-gray-500">et plus ...</p>
            <NuxtLink class="button" to="/portfolio">Découvrir tous mes projets</NuxtLink>
        </div>
    </div>
</template>