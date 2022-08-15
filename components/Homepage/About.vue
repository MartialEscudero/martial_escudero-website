<script lang="ts" setup>
const ageCurrent = getAge("21/07/2000")

function getAge(dtn: string) {
    let today: Date = new Date();
    let year: string = dtn.substr(6, 4);
    let month: string = dtn.substr(3, 2);
    let day: string = dtn.substr(0, 2);
    let birthday: Date = new Date(year + "-" + month + "-" + day);
    let age: number = today.getFullYear() - birthday.getFullYear();
    let m: number = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age = age - 1;
    }

    return Math.abs(age);
}
</script>

<template>
    <div class="container px-5 mx-auto pt-10">
        <h2 class="text-5xl text-center sm:text-left">À Propos</h2>
        <div class="grid grid-cols-1 xl:grid-cols-2 my-20 xl:my-32">
            <div class="space-y-16">
                <div>
                    <h3 class="text-3xl font-bold">Martial Escudero</h3>
                    <p class="text-2xl">{{ ageCurrent }} ans</p>
                </div>
                <div>
                    <NuxtLink class="button" to="/cv">Voir mon CV</NuxtLink>
                </div>
                <p class="text-justify sm:text-left">
                    Actuellement <span class="font-bold">Développeur Front-End</span> chez 
                    <a class="hypertext" href="https://www.nexton-agency.com/" rel="noopener" target="_blank">NEXTON</a>
                    , je suis diplômé d'une 
                    <a class="hypertext" href="/lpmi-presentation.png" rel="noopener" target="_blank">Licence Professionnelle - Métiers de l'informatique : Conduite de projet - Technologie du développement web</a> 
                    et d'un 
                    <a class="hypertext" href="https://www.sciences.unilim.fr/tic/deust-webmaster-metiers-internet/" rel="noopener" target="_blank">DEUST Webmaster & Métiers de l'Internet</a> 
                    tout deux à l’Université de Limoges.
                </p>
                <p>Passionné et autodidacte depuis toujours, je saurais m'investir et vous accompagnez dans vos projets.</p>
                <div class="flex justify-center sm:justify-start gap-10">
                    <a href="https://www.linkedin.com/in/martial-escudero/" rel="noopener" target="_blank">
                        <svg class="w-10 h-10 fill-white hover:fill-blue-300 transition ease-in-out duration-200" viewBox="0 0 23.273 23.273">
                            <path d="M11.637,0A11.637,11.637,0,1,0,23.273,11.637,11.638,11.638,0,0,0,11.637,0ZM8.255,17.591H5.421V9.065H8.255ZM6.838,7.9H6.82a1.477,1.477,0,1,1,.037-2.946A1.478,1.478,0,1,1,6.838,7.9Zm11.636,9.691H15.641V13.03c0-1.146-.41-1.928-1.436-1.928a1.551,1.551,0,0,0-1.454,1.036,1.941,1.941,0,0,0-.093.692v4.762H9.824s.037-7.726,0-8.526h2.834v1.207a2.814,2.814,0,0,1,2.554-1.407c1.865,0,3.263,1.219,3.263,3.837Zm0,0" />
                        </svg>
                    </a>
                    <a href="https://github.com/MartialEscudero" rel="noopener" target="_blank">
                        <svg class="w-10 h-10 fill-white hover:fill-blue-300 transition ease-in-out duration-200" viewBox="0 0 24 23">
                            <path d="M12,.5A11.9,11.9,0,0,0,0,12.292,11.812,11.812,0,0,0,8.2,23.48c.6.111.82-.254.82-.567,0-.28-.01-1.022-.015-2-3.338.711-4.042-1.582-4.042-1.582A3.143,3.143,0,0,0,3.633,17.6c-1.087-.731.084-.716.084-.716A2.51,2.51,0,0,1,5.555,18.1a2.584,2.584,0,0,0,3.495.981A2.5,2.5,0,0,1,9.81,17.5c-2.665-.3-5.466-1.309-5.466-5.827A4.505,4.505,0,0,1,5.579,8.513a4.126,4.126,0,0,1,.105-3.121s1.005-.316,3.3,1.209a11.506,11.506,0,0,1,6,0c2.28-1.525,3.285-1.209,3.285-1.209a4.24,4.24,0,0,1,.12,3.121,4.523,4.523,0,0,1,1.23,3.164c0,4.53-2.805,5.527-5.475,5.817a2.8,2.8,0,0,1,.81,2.182c0,1.578-.015,2.846-.015,3.229,0,.309.21.678.825.56A11.776,11.776,0,0,0,24,12.292,11.9,11.9,0,0,0,12,.5Z" />
                        </svg>
                    </a>
                    <a href="https://link.martialescudero.com/" rel="noopener" target="_blank">
                        <svg class="w-10 h-10 fill-white hover:fill-blue-300 transition ease-in-out duration-200" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="hidden h-full xl:flex flex-col justify-center items-end">
                <img src="~/assets/img/icon.png" alt="Logo Martial Escudero">
            </div>
        </div>
    </div>
</template>