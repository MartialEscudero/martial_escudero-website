<script setup>
const { data: projects } = await useAsyncData(() => queryContent("projet").sort({ date: -1 }).limit(4).find())
</script>

<template>
    <div class="container px-5 mx-auto pt-10">
        <h2 class="text-5xl text-center sm:text-left">Derniers projets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-20 mb-10 lg:my-20 gap-16 md:gap-16 xl:gap-y-28 xl:gap-x-40">
            <NuxtLink v-for="project in projects" :key="project" :to="project._path" class="h-[300px] md:h-[250px] lg:h-[350px] xl:h-[500px] w-full hover:scale-[1.05] transition ease-in-out duration-200">
                <div :style="`background-image: url(/content/${project.card})`" class="rounded-t-xl h-5/6 bg-cover bg-center" />
                <div class="rounded-b-xl bg-[#202020] p-2 lg:p-4">
                    <p class="text-lg lg:text-2xl font-medium">{{ project.title }}</p>
                    <p class="text-xs lg:text-sm text-blue-300">{{ project.type }}</p>
                </div>
            </NuxtLink>
        </div>
        <div class="flex flex-col justify-center items-center">
            <p class="text-sm text-gray-500 my-5 text-center">et plus ...</p>
            <NuxtLink class="button" to="/portfolio">Découvrir tous mes projets</NuxtLink>
        </div>
    </div>
</template>