<script lang="ts">
import { mapActions } from 'pinia'
import { mainStore } from '@/stores/mainStore'

export default {
    setup() {
        useHead({
            title: "Développeur Front-End",
        });
    },
    
    methods: {
        ...mapActions(mainStore, ['getProjects'])
    },

    async mounted() {
        await this.getProjects();
    }
}
</script>

<template>
    <div>
        <HomepageWelcome/>
        <HomepageAbout/>
        <HomepageProjetcs/>
        <HomepageContactMe/>
    </div>
</template>