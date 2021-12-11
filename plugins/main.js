import Vue from 'vue'
import VueGtag from "vue-gtag";
import VueMarkdown from 'vue-markdown';
import VueScrollTo from 'vue-scrollto';
import { init } from 'emailjs-com';
import AOS from "aos"
import 'aos/dist/aos.css';


// https://matteo-gabriele.gitbook.io/vue-gtag/
Vue.use(VueGtag, {
  config: { id: 'UA-164716890-1' },
})

// https://www.npmjs.com/package/vue-markdown
Vue.component('vue-markdown', VueMarkdown);

// https://www.npmjs.com/package/vue-scrollto
Vue.use(VueScrollTo)

// https://www.npmjs.com/package/emailjs
init("user_PFnEAgnCIgPitvseq0QYE");

// https://github.com/michalsnik/aos
AOS.init({duration: 1100})