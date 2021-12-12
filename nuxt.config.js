export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Martial ESCUDERO | Étudiant - Développeur Web',
    htmlAttrs: { lang: 'fr' },
    meta: [
      { charset: 'utf-8' },

      { name: 'viewport',     content: 'width=device-width, initial-scale=1' },
      { name: 'author',       content: 'Martial Escudero' },
      { name: 'copyright',    content: 'Martial Escudero' },
      { name: 'keywords',     content: "Martial Escudero,Escudero Martial,Étudiant,Université de Limoges,Limoges,LPMI,Licence Pro,DEUST,Webmaster & Métiers de l'Internet,Développeur Front-End,Développeur,Développeur Web,Vidéaste,Graphisme" },

      { name: 'apple-mobile-web-app-capable',           content: 'yes' },
      { name: 'mobile-web-app-capable',                 content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style',  content: 'black-translucent' },
      
      { hid: 'description',     name: 'description',      content: 'Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.' },

      { hid: 'og:type',         name: 'og:type',          content: 'website' },
      { hid: 'og:image',        name: 'og:image',         content: 'https://res.cloudinary.com/do5ghqhjj/image/upload/v1638793628/martialescudero_838464f9ed.jpg' },   

      { hid: 'twitter:card',    name: 'twitter:card',     content: 'summary_large_image' },
      { hid: 'twitter:image',   name: 'twitter:image',    content: 'https://res.cloudinary.com/do5ghqhjj/image/upload/v1638793628/martialescudero_838464f9ed.jpg' },  
    ],
    link: [
      { rel: 'icon',                          type: 'image/x-icon',   href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed',  type: 'image/x-icon',   href: 'https://res.cloudinary.com/do5ghqhjj/image/upload/v1638793635/apple_icon_6523101884.png' },
      { rel: 'preconnect',                    href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect',                    href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet',                    href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600;1,700;1,800&display=swap' },
    ],
    script: [
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-164716890-1' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/main.js', mode: 'client' },
    { src: '~plugins/app.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  
}