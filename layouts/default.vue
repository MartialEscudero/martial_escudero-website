<script lang="ts">
export default {
    head() {
        return {
            htmlAttrs: { lang: 'fr' },
        }
    },
}
</script>

<template>
    <div>
        <LayoutNavbar/>
        <main>
            <slot/>
        </main>
        <LayoutFooter/>
    </div>
</template>