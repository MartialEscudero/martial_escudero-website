//https://github.com/nuxt/framework/discussions/3148

import { defineNuxtPlugin } from "#app";
import VueScrollTo from "vue-scrollto";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo)
});
