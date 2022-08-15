<script lang="ts" setup>
    const route = useRoute()
    const apiUrl = import.meta.env.VITE_API_URL

    const { data: project, pending } = await useLazyFetch<any>(`${apiUrl}/projects?populate=%2A&filters[Slug][$eq]=${route.params.slug}`)

    function replaceItems(items: string) {
        for (let index = 0; index < items.length; index++) {
            items = items.replace(",", " |");
        }
        return items;
    }
</script>

<template>
    <div v-if="!pending">
        <Head>
            <Title>{{ project.data[0].attributes.Title }}</Title>
            <Meta name="description" :content="'Présentation du projet :' + project.data[0].attributes.Title"/>

            <Meta property="og:url" :content="'https://www.martialescudero.com' + $route.fullPath"/>
            <Meta property="og:title" :content="project.data[0].attributes.Title"/>
            <Meta property="og:description" :content="'Présentation du projet :' + project.data[0].attributes.Title"/>
            <Meta property="og:image" :content="project.data[0].attributes.Image.data.attributes.formats.medium.url"/>
            
            <Meta property="twitter:url" :content="'https://www.martialescudero.com' + $route.fullPath"/>
            <Meta property="twitter:title" :content="project.data[0].attributes.Title"/>
            <Meta property="twitter:description" :content="'Présentation du projet :' + project.data[0].attributes.Title"/>
            <Meta property="twitter:image" :content="project.data[0].attributes.Image.data.attributes.formats.medium.url"/>
        </Head>

        <article class="block h-screen container mx-auto mt-20">
            <header class="text-center">
                <h1 class="text-4xl font-bold">{{ project.data[0].attributes.Title }}</h1>
                <h2 class="text-2xl text-blue-300">{{ project.data[0].attributes.Type }}</h2>
                <h3 class="font-light">{{ replaceItems(project.data[0].attributes.Techno) }}</h3>
            </header>
            <p>{{ project.data[0].attributes.Text }}</p>
        </article>
    </div>
</template>