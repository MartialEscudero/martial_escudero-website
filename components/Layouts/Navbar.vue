<script setup>
let isOpen = ref(false)
let isSelect = ref("base")

const text = {
    home: "Home, ici ça veut dire accueil en anglais. Du coup, c'est la page d'accueil.",
    about: "Si vous avez des questions sur mon profil ou mon parcours, vous trouverez ici toutes les réponses.",
    portfolio: "Sur mon Portfolio, vous retrouvez différents projets que j'ai pu réaliser dans le domaine du Développement Web, du Graphisme ou encore de l'Audiovisuel.",
    contact: "Si vous avez une question, un projet ou autre, vous pouvez compléter ce formulaire de contact (allez le voir il est tout beau) ou contactez-moi à l'adresse suivante : martialescudero.com@gmail.com",
    labo: "Le Labo est un espace de mon site où on y retrouve différents mini-projets de développement web et web design que je vous invite à découvrir."
}

onScroll()

function toggleMenu() {
    if (isOpen.value) { disableScroll(); setCrossMenu() } else enableScroll()
    isOpen.value = !isOpen.value
    if (isOpen.value) { disableScroll(); setCrossMenu() } else enableScroll()
}
</script>

<template>
    <nav class="fixed top-0 w-full z-10">
        <div id="scrollNavbar" class="navbarTop">
            <img v-if="$route.fullPath === '/'" v-scroll-to="{el: '#topHomePage', duration: 800}" src="~/assets/img/icon.png" alt="Logo Martial Escudero" />
            <NuxtLink v-else to="/">
                <img src="~/assets/img/icon.png" alt="Logo Martial Escudero" />
            </NuxtLink>
            <button class="burger z-10 w-10 h-10 relative focus:outline-none" @click="toggleMenu()">
                <span class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out" :class="{ 'text-[#0e0e0e] lg:text-white rotate-45' : isOpen, '-translate-y-1.5' : !isOpen }" />
                <span class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out" :class="{ 'text-[#0e0e0e] lg:text-white opacity-0' : isOpen }" />
                <span class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out" :class="{ 'text-[#0e0e0e] lg:text-white -rotate-45' : isOpen,'translate-y-1.5' : !isOpen }" />
            </button>
        </div>
        <div v-if="isOpen" class="animate-in slide-in-from-top duration-1000 absolute w-full h-screen flex top-0 z-0">
            <div class="w-full lg:w-1/2 bg-white text-[#0e0e0e]">
                <div class="flex flex-col justify-center items-center h-screen">
                    <ul class="flex flex-col font-extrabold gap-y-8 text-4xl">
                        <li>
                            <NuxtLink to="/" class="relative group w-fit" @click="toggleMenu()" @mouseover="isSelect = 'home'">
                                <span>Home</span>
                                <span class="absolute -bottom-1 left-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/cv" class="relative group w-fit" @click="toggleMenu()" @mouseover="isSelect = 'about'">
                                <span>À Propos</span>
                                <span class="absolute -bottom-1 left-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/portfolio" class="relative group w-fit" @click="toggleMenu()" @mouseover="isSelect = 'portfolio'">
                                <span>Portfolio</span>
                                <span class="absolute -bottom-1 left-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/labo" class="relative group w-fit" @click="toggleMenu()" @mouseover="isSelect = 'labo'">
                                <span>Le Labo</span>
                                <span class="absolute -bottom-1 left-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact" class="relative group w-fit" @click="toggleMenu()" @mouseover="isSelect = 'contact'">
                                <span>Contact</span>
                                <span class="absolute -bottom-1 left-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 w-0 h-1.5 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hidden lg:w-1/2 bg-[#0e0e0e] lg:flex flex-col justify-center lg:px-20 xl:px-36 font-light">
                <p v-if="isSelect === 'base'">Hello.<br>Passez votre souris sur les différentes catégories du menu.</p>
                <p v-if="isSelect === 'home'">{{ text.home }}</p>
                <p v-if="isSelect === 'about'">{{ text.about }}</p>
                <p v-if="isSelect === 'portfolio'">{{ text.portfolio }}</p>
                <p v-if="isSelect === 'labo'">{{ text.labo }}</p>
                <p v-if="isSelect === 'contact'">{{ text.contact }}</p>
            </div>
        </div>
    </nav>
</template>