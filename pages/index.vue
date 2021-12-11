<template>
  <div class="home">
    <HomeWelcome />
    <HomeAbout />
    <HomeProjets />
    <HomeContactMe />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Martial ESCUDERO | Étudiant - Développeur Web',
    meta: [
      { hid: 'description',           name: 'description',          content: 'Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.' },
      
      { hid: 'og:url',                name: 'og:url',               content: 'https://www.martialescudero.com' },
      { hid: 'og:title',              name: 'og:title',             content: 'Martial Escudero | Étudiant - Développeur Web' },
      { hid: 'og:description',        name: 'og:description',       content: 'Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.' },

      { hid: 'twitter:url',           name: 'twitter:url',          content: 'https://www.martialescudero.com' },
      { hid: 'twitter:title',         name: 'twitter:title',        content: 'Martial Escudero | Étudiant - Développeur Web' },
      { hid: 'twitter:description',   name: 'twitter:description',  content: 'Site Portofolio et Labo de Martial Escudero - Étudiant & Développeur Web.' },
    ],
  }
}
</script>