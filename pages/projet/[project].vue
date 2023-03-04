<script setup>
const route = useRoute()

const { data: project } = await useAsyncData(() => queryContent("projet").where({ _path: route.fullPath }).findOne())
</script>

<template>
    <Meta property="og:url" :content="`https://www.martialescudero.com/${route.fullPath}`" />
    <Meta property="og:title" :content="project.title" />
    <Meta property="og:description" :content="project.description" />
    <Meta property="og:image" :content="`https://www.martialescudero.com/content/${project.card}`" />

    <Meta property="twitter:url" :content="`https://www.martialescudero.com/${route.fullPath}`" />
    <Meta property="twitter:title" :content="project.title" />
    <Meta property="twitter:description" :content="project.description" />
    <Meta property="twitter:image" :content="`https://www.martialescudero.com/content/${project.card}`" />

    <div id="project-markdown">
        <ContentDoc />
    </div>
</template>