<script lang="ts">
import { mapActions } from 'pinia'
import { mainStore } from '@/stores/mainStore'

export default {
    setup() {
        useHead({
            title: "Portofolio",
        });
    },
    
    methods: {
        ...mapActions(mainStore, ['getProjects'])
    },

    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <p>Portofolio</p>
</template>