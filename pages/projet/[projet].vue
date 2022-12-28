<script setup>
const { $markdown } = useNuxtApp()
const route = useRoute()
const apiUrl = import.meta.env.VITE_API_URL
const content = ref(null)

const { data: project } = await useAsyncData(() => $fetch(`${apiUrl}/projects?populate=%2A&filters[Slug][$eq]=${route.params.projet}`), { initialCache: false})

project.value = project.value.data[0].attributes

function replaceItems(items) {
    for (let index = 0; index < items.length; index++) {
        items = items.replace(",", " |")
    }

    return items
}

function toMarkdown() {
    content.value = $markdown.render(project.value.Text)
}

onMounted(() => {
    toMarkdown()
})
</script>

<template>
    <div>
        <Head>
            <Title>{{ project.Title }}</Title>
            <Meta name="description" :content="'Présentation du projet : ' + project.Title" />

            <Meta property="og:url" :content="'https://www.martialescudero.com' + $route.fullPath" />
            <Meta property="og:title" :content="project.Title" />
            <Meta property="og:description" :content="'Présentation du projet: ' + project.Title" />
            <Meta property="og:image" :content="project.Image.data.attributes.formats.medium.url" />

            <Meta property="twitter:url" :content="'https://www.martialescudero.com' + $route.fullPath" />
            <Meta property="twitter:title" :content="project.Title" />
            <Meta property="twitter:description" :content="'Présentation du projet: ' + project.Title" />
            <Meta property="twitter:image" :content="project.Image.data.attributes.formats.medium.url" />
        </Head>

        <article class="container px-5 mx-auto mt-28 md:mt-32">
            <header class="text-center">
                <h1 class="text-2xl md:text-4xl font-bold">{{ project.Title }}</h1>
                <h2 class="text-lg md:text-2xl text-blue-300 mt-2 my-5">{{ project.Type }}</h2>
                <h3 class="text-xs md:text-base font-light mb-10">{{ replaceItems(project.Techno) }}
                </h3>
                <a v-if="project.Url" class="button" :href="project.Url">
                    Découvrir le projet
                </a>
            </header>
            <div v-if="content" id="markdown" class="mt-20 mb-10" v-html="content" />
            <div v-else class="flex justify-center my-20">
                <div
                    class="ml-3 border-t-transparent w-8 h-8 border-4 border-blue-300 border-solid rounded-full animate-spin">
                </div>
            </div>
        </article>
    </div>
</template>