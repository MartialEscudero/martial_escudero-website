import { defineStore } from 'pinia'

const apiUrl = import.meta.env.VITE_API_URL

export const mainStore = defineStore({
    id: 'main',

    state: () => ({
        projects: null,
        projectSelect: null
    }),

    actions: {
        async getProjects() {
            await fetch(apiUrl + "/projects?populate=%2A&sort=id:desc&filters[ShowIt][$eq]=true", { method: "GET" })
                .then(res => res.json()).then((res) => {
                    this.projects = res.data;
                })
                .catch(err => {
                    console.error(err);
                })
        },

        getProjectSelect(projectSlug: string) {
            fetch(apiUrl + "/projects?populate=%2A&filters[Slug][$eq]=" + projectSlug, { method: "GET" })
                .then(res => res.json()).then((res) => {
                    this.projectSelect = res.data[0].attributes;
                    console.log(this.projectSelect);
                    
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
})