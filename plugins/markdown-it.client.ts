//https://github.com/nuxt/framework/discussions/3148

import { defineNuxtPlugin } from "#app";
import MarkdownIt from "markdown-it";

export default defineNuxtPlugin(() => {
    const markdown = new MarkdownIt();
    return {
        provide: {
            markdown,
        },
    };
});
