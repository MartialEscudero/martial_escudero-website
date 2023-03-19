<script setup>
let isOpen = ref(false)
let isSelect = ref("base")

const text = {
    home: "Home, ici ça veut dire accueil en anglais. Du coup, c'est la page d'accueil.",
    about: "Si vous avez des questions sur mon profil ou mon parcours, vous trouverez ici toutes les réponses.",
    portfolio: "Sur mon Portfolio, vous retrouvez différents projets que j'ai pu réaliser dans le domaine du Développement Web, du Graphisme ou encore de l'Audiovisuel.",
    contact:
        "Si vous avez une question, un projet ou autre, vous pouvez compléter ce formulaire de contact (allez le voir il est tout beau) ou contactez-moi à l'adresse suivante : martialescudero.com@gmail.com",
    labo: "Le Labo est un espace de mon site où on y retrouve différents mini-projets de développement web et web design que je vous invite à découvrir.",
}

onScroll()

function toggleMenu() {
    if (isOpen.value) {
        disableScroll()
        setCrossMenu()
    } else enableScroll()
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        disableScroll()
        setCrossMenu()
    } else enableScroll()
}
</script>

<template>
    <nav class="fixed top-0 z-10 w-full">
        <div
            id="scrollNavbar"
            class="navbarTop"
        >
            <img
                v-if="$route.fullPath === '/'"
                v-scroll-to="{ el: '#topHomePage', duration: 800 }"
                src="~/assets/img/icon.png"
                alt="Logo Martial Escudero"
            />
            <NuxtLink
                v-else
                to="/"
            >
                <img
                    src="~/assets/img/icon.png"
                    alt="Logo Martial Escudero"
                />
            </NuxtLink>
            <button
                class="burger relative z-10 h-10 w-10 focus:outline-none"
                @click="toggleMenu()"
            >
                <span
                    class="absolute block h-0.5 w-8 bg-current transition duration-500 ease-in-out"
                    :class="{ 'rotate-45 text-[#0e0e0e] lg:text-white': isOpen, '-translate-y-1.5': !isOpen }"
                />
                <span
                    class="absolute block h-0.5 w-8 bg-current transition duration-500 ease-in-out"
                    :class="{ 'text-[#0e0e0e] opacity-0 lg:text-white': isOpen }"
                />
                <span
                    class="absolute block h-0.5 w-8 bg-current transition duration-500 ease-in-out"
                    :class="{ '-rotate-45 text-[#0e0e0e] lg:text-white': isOpen, 'translate-y-1.5': !isOpen }"
                />
            </button>
        </div>
        <div
            v-if="isOpen"
            class="absolute top-0 z-0 flex h-screen w-full animate-in slide-in-from-top duration-1000"
        >
            <div class="w-full bg-white text-[#0e0e0e] lg:w-1/2">
                <div class="flex h-screen flex-col items-center justify-center">
                    <ul class="flex flex-col gap-y-8 text-4xl font-extrabold">
                        <li>
                            <NuxtLink
                                to="/"
                                class="group relative w-fit"
                                @click="toggleMenu()"
                                @mouseover="isSelect = 'home'"
                            >
                                <span>Home</span>
                                <span class="absolute -bottom-1 left-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/cv"
                                class="group relative w-fit"
                                @click="toggleMenu()"
                                @mouseover="isSelect = 'about'"
                            >
                                <span>À Propos</span>
                                <span class="absolute -bottom-1 left-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/portfolio"
                                class="group relative w-fit"
                                @click="toggleMenu()"
                                @mouseover="isSelect = 'portfolio'"
                            >
                                <span>Portfolio</span>
                                <span class="absolute -bottom-1 left-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/labo"
                                class="group relative w-fit"
                                @click="toggleMenu()"
                                @mouseover="isSelect = 'labo'"
                            >
                                <span>Le Labo</span>
                                <span class="absolute -bottom-1 left-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/contact"
                                class="group relative w-fit"
                                @click="toggleMenu()"
                                @mouseover="isSelect = 'contact'"
                            >
                                <span>Contact</span>
                                <span class="absolute -bottom-1 left-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                                <span class="absolute -bottom-1 right-1/2 h-1.5 w-0 bg-blue-300 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hidden flex-col justify-center bg-[#0e0e0e] font-light lg:flex lg:w-1/2 lg:px-20 xl:px-36">
                <p v-if="isSelect === 'base'">
                    Hello.
                    <br />
                    Passez votre souris sur les différentes catégories du menu.
                </p>
                <p v-if="isSelect === 'home'">{{ text.home }}</p>
                <p v-if="isSelect === 'about'">{{ text.about }}</p>
                <p v-if="isSelect === 'portfolio'">{{ text.portfolio }}</p>
                <p v-if="isSelect === 'labo'">{{ text.labo }}</p>
                <p v-if="isSelect === 'contact'">{{ text.contact }}</p>
            </div>
        </div>
    </nav>
</template>
