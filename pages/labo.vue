<template>
  <div class="flex h-screen">
    <div class="m-auto text-md xl:mx-auto">
      <div id="labo">
        <p class="text-center elementlabo" data-aos="fade-up">
          <a rel="noopener" target="_blank" href="https://music.martialescudero.com/" class="effect labotext7 xl:text-5xl sm:text-4xl">
            Album and vinyl library
          </a>
        </p> 
        <p class="text-center elementlabo" data-aos="fade-up">
          <a rel="noopener" target="_blank" href="https://link.martialescudero.com" class="effect labotext6 xl:text-5xl sm:text-4xl">
            Social Media Sharing Link
          </a>
        </p> 
        <p class="text-center elementlabo" data-aos="fade-up">
          <NuxtLink rel="noopener" target="_blank" to="/contact" class="effect labotext5 xl:text-5xl sm:text-4xl">
            Contact Form Single
          </NuxtLink>
        </p>       
        <p class="text-center elementlabo" data-aos="fade-up">
          <NuxtLink rel="noopener" target="_blank" to="labo/meteo.html" class="effect labotext4 xl:text-5xl sm:text-4xl">
            API Météo
          </NuxtLink>
        </p>
        <p class="text-center elementlabo" data-aos="fade-up">
          <NuxtLink rel="noopener" target="_blank" to="labo/hexaclock.html" class="effect labotext3 xl:text-5xl sm:text-4xl">
            HexaClock
          </NuxtLink>
        </p>
        <p class="text-center elementlabo" data-aos="fade-up">
          <NuxtLink rel="noopener" target="_blank" to="labo/color-palette-selector.html" class="effect labotext2 xl:text-5xl sm:text-4xl">
            Color Palette Selector
          </NuxtLink>
        </p>
        <p class="text-center elementlabo" data-aos="fade-up">
          <NuxtLink rel="noopener" target="_blank" to="labo/concept-devis.html" class="effect labotext xl:text-5xl sm:text-4xl">
            Concept Devis
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
      title: 'Le Labo | Martial Escudero',
      meta: [
        { hid: 'description',           name: 'description',          content: 'Le Labo - Martial Escudero - Étudiant & Développeur Web.' },
        
        { hid: 'og:url',                name: 'og:url',               content: 'https://www.martialescudero.com/labo' },
        { hid: 'og:title',              name: 'og:title',             content: 'Le Labo | Martial Escudero' },
        { hid: 'og:description',        name: 'og:description',       content: 'Le Labo - Martial Escudero - Étudiant & Développeur Web.' },

        { hid: 'twitter:url',           name: 'twitter:url',          content: 'https://www.martialescudero.com/labo' },
        { hid: 'twitter:title',         name: 'twitter:title',        content: 'Le Labo | Martial Escudero' },
        { hid: 'twitter:description',   name: 'twitter:description',  content: 'Le Labo - Martial Escudero - Étudiant & Développeur Web.' },
      ],
    }
  }
</script>

<style>

#labo a {
  padding: 1rem;
  text-decoration: none;
}

#labo a:hover {
  text-decoration: none;
  color: white;
}

p a {
  list-style: none;
  text-decoration: none;
  display: inline-block;
  position: relative;
  z-index: 0;
}

.effect {
  transition: all 300ms;
}

.effect:hover {
  transform: scale(1.3);
}

.labotext {
  text-align: center;
	background-image: linear-gradient(to right, rgb(217, 139, 228), rgb(198, 129, 255), #c125ff, rgb(198, 129, 255), rgb(217, 139, 228));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

.labotext2 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(235, 255, 119), #ffb833, #ff6325, #ffb833, rgb(235, 255, 119));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3s linear infinite;
          animation: shine 3s linear infinite;
}

.labotext3 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(167, 248, 181), #30db47, #178b2a, #30db47, rgb(167, 248, 181));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

.labotext4 {
  text-align: center;
	background-image: linear-gradient(to right, #77f, #33d0ff, #25ffbb, #33d0ff, #77f);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3s linear infinite;
          animation: shine 3s linear infinite;
}

.labotext5 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(128, 128, 128), #bdbdbd, #ffffff, #bdbdbd, rgb(128, 128, 128));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

.labotext6 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(146, 68, 68), #ff4444, #ff0000, #ff4444, rgb(146, 68, 68));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3.5s linear infinite;
          animation: shine 3.5s linear infinite;
}

.labotext7 {
  text-align: center;
	background-image: linear-gradient(to right, rgb(88, 100, 151), #4470ff, #1900ff, #4470ff, rgb(88, 100, 151));
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 3s linear infinite;
          animation: shine 3s linear infinite;
}

@-webkit-keyframes shine {
  to {
    background-position: 200% center;
  }
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>