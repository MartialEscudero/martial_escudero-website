<script setup>
    const route = useRoute()
    const apiUrl = import.meta.env.VITE_API_URL

    const { data: project, pending, error, refresh } = await useAsyncData(
        () => $fetch("https://strapi.martialescudero.com/api/projects?populate=%2A&filters[Slug][$eq]=" + route.params.slug)
    )

    console.log(project);
</script>

<template>
    <div>
        <Head>
            <Title>{{ project.data[0].attributes.Title }}</Title>
            <Meta name="description" :content="project.data[0].attributes.Title"/>

            <Meta property="og:url" :content="'https://www.martialescudero.com' + $route.fullPath"/>
            <Meta property="og:title" :content="project.data[0].attributes.Title"/>
            <Meta property="og:description" :content="project.data[0].attributes.Title"/>
            <Meta property="og:image" :content="project.data[0].attributes.Image.data.attributes.formats.thumbnail.url"/>
            
            <Meta property="twitter:url" :content="'https://www.martialescudero.com' + $route.fullPath"/>
            <Meta property="twitter:title" :content="project.data[0].attributes.Title"/>
            <Meta property="twitter:description" :content="project.data[0].attributes.Title"/>
            <Meta property="twitter:image" :content="project.data[0].attributes.Image.data.attributes.formats.thumbnail.url"/>
        </Head>

        <h1>{{ project.data[0].attributes.Title }}</h1>
        <h2>{{ project.data[0].attributes.Type }}</h2>
    </div>
</template>