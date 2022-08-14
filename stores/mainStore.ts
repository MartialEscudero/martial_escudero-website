import { defineStore } from 'pinia'

const apiUrl = import.meta.env.VITE_API_URL

export const mainStore = defineStore({
    id: 'main',

    state: () => ({
        projects: null
    }),

    actions: {
        getProjects() {
            fetch(apiUrl + "/api/projects?populate=%2A&sort=id:desc&filters[ShowIt][$eq]=true", { method: "GET" })
                .then(res => res.json()).then((res) => {
                    this.projects = res.data
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
})