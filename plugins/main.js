import Vue from 'vue'
import VueMarkdown from 'vue-markdown';
import VueScrollTo from 'vue-scrollto';
import { init } from 'emailjs-com';
import AOS from "aos"
import 'aos/dist/aos.css';

// https://www.npmjs.com/package/vue-markdown
Vue.component('vue-markdown', VueMarkdown);

// https://www.npmjs.com/package/vue-scrollto
Vue.use(VueScrollTo)

// https://www.npmjs.com/package/emailjs
init("user_PFnEAgnCIgPitvseq0QYE");

// https://github.com/michalsnik/aos
AOS.init({duration: 1100})

// https://developers.google.com/analytics/devguides/collection/gtagjs
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-164716890-1');