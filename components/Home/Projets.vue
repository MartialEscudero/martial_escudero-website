<template>
  <div class="lg:mt-32 md:mt-0 sm:mt-52 tablet">
    <h1 class="container mx-auto lg:text-left sm:text-center text-5xl mb-20" data-aos="fade-right">
      Derniers projets
    </h1>
    <div v-if="this.projets.length == 0" class="text-center">
      <p class="mt-36">
        Si vous voyez ce texte, c'est qu'il y a eu un problème lors de l'appel de l'API.<br>
      </p>
      <p class="mt-5 error">
        Je vous invite à <a rel="noopener" class="cursor-pointer" @click="refreshPage">rafraîchir</a> la page ou alors revenir plus tard.
      </p>
      <p class="mt-5 error">
        Vous pouvez aussi <a rel="noopener" href="http://urlr.me/rnjv1" target="_blank">cliquer ici</a> pour patienter.
      </p>
    </div>
    <div v-else class="container mx-auto grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-0 gap-y-24 md:mt-32 sm:-mt-2">
      <div class="mx-auto card" v-for="projet in projets.slice(0, 4)" :key="projet.item" data-aos="fade-up">
        <NuxtLink :to="'projet/'+projet.Slug">
          <img alt="Image illustration projet" class="img-fluid" :src="projet.Image[0].formats.medium.url">
          <div class="p-5">
            <h2 class="xl:text-2xl md:text-base sm:text-l mt-1 textSize">{{projet.Titre}}</h2>
            <h3 class="xl:text-sm sm:text-xs text-blue-300 font-bold mt-2">{{projet.type.Type}}</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 mt-28" data-aos="fade-up">
      <div class="mx-auto">
        <p class="text-center text-sm mb-4 text-gray-500">et plus ...</p>
        <NuxtLink class="btn text-white font-bold py-2 px-4 rounded-full" tag="button" to="/portfolio">Découvrir tous mes projets</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('store',['projets']),
  },
  methods: {
    refreshPage() {
      location.reload();
    }
  },  
}
</script>

<style scoped>
.error a {
  color: #93C5FD;
}

.error a:hover {
  transition: .5s;
  background: #93C5FD;
  color: #0e0e0e;
}

.card {
  background: #202020;
  border-radius: 20px;
  width: 70%;
  height: 100%;
}

.card img {
  margin: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.btn:hover {
  background: #202020;
  color: #93C5FD;
}

.btn:focus {
  outline: unset;
}

.btn {
  transition: .5s;
  color: #202020;
  background: #93C5FD;
}

@media screen and (max-width: 640px) {
  .card {
    width: 90%;
  }
}

@media screen and (max-width: 1300px) and (min-width: 1000px) {
  .textSize {
    font-size: 18px;
  }
}
</style>