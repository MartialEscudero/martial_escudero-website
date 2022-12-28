<script setup>
import validator from "validator"
import emailjs from "@emailjs/browser"

useHead({
    title: "Me contacter",
    meta: [
        { name: "description", content: "Pour contacter Martial Escudero - Développeur Front-End" },

        { property: "og:url", content: "https://www.martialescudero.com/cv" },
        { property: "og:title", content: "Me contacter | Martial Escudero" },
        { property: "og:description", content: "Pour contacter Martial Escudero - Développeur Front-End." },

        { property: "twitter:url", content: "https://www.martialescudero.com/contact" },
        { property: "twitter:title", content: "Me contacter | Martial Escudero" },
        { property: "twitter:description", content: "Pour contacter Martial Escudero - Développeur Front-End." }
    ]
})

const emailServiceID = import.meta.env.VITE_EMAIL_SERVICE_ID
const emailTemplateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

let formHtml = ref(null)
let step = ref(1)
let time = ref("5")
let isLoading = ref(false)
let errorMessage = ref("")
let mail = {
    username: "",
    email: "",
    subject: "",
    message: ""
}

function validateForm(testStep) {
    switch (testStep) {
        case 1:
            if (mail.username === undefined || !validator.isLength(mail.username,{min: 4, max: 30})) {
                errorMessage.value = "Une erreur apparait dans l'écriture de votre Nom."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 2:
            if (mail.email === undefined || !validator.isEmail(mail.email)) {
                errorMessage.value = "Une erreur apparait dans l'écriture de votre E-mail."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 3:
            if (mail.subject === undefined || !validator.isLength(mail.username,{min: 4, max: 50})) {
                errorMessage.value = "Une erreur apparait dans l'écriture du Sujet."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 4:
            if (mail.message === undefined || !validator.isLength(mail.message,{min: 10, max: 1500})) {
                errorMessage.value = "Vore message est vide ou trop court."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break
    }
}

function sendEmail() {
    isLoading.value = true

    emailjs.sendForm(emailServiceID, emailTemplateID, formHtml.value, emailPublicKey)
        .then(() => {
            step.value++
            isLoading.value = false

            setTimeout(() => {
                time.value = "4"
            }, 1000)

            setTimeout(() => {
                time.value = "3"
            }, 2000)

            setTimeout(() => {
                time.value = "2"
            }, 3000)

            setTimeout(() => {
                time.value = "1"
            }, 4000)

            setTimeout(() => {
                time.value = "... 🚀"
            }, 5000)

            setTimeout(() => {
                navigateTo("/")
            }, 5500)
        }, (err) => {
            console.error("FAILED...", err.text)
        })
}
</script>

<template>
    <div class="relative w-full">
        <div class="h-screen flex flex-col justify-center items-center">
            <div v-if="step <= 5">
                <form ref="formHtml" @submit.prevent="sendEmail($event)">
                    <p v-if="step <= 4" class="mb-1.5 text-center text-red-500 text-xs">{{ errorMessage }}&nbsp;</p>

                    <input v-show="step === 1" v-model="mail.username" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Nom" type="text" name="username">

                    <input v-show="step === 2" v-model="mail.email" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="E-mail" type="text" name="email">

                    <input v-show="step === 3" v-model="mail.subject" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Sujet" type="text" name="subject">

                    <textarea v-show="step === 4" v-model="mail.message" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Message" name="message" rows="10"/>

                    <div v-if="step <= 4" class="mt-10 mb-20 w-full flex justify-center">
                        <a @click="validateForm(step)" class="text-xl cursor-pointer hover:text-blue-300">Suivant</a>
                    </div>

                    <div v-if="step === 5">
                        <p class="text-center text-3xl lg:text-5xl">Récapitulatif</p>
                        <div class="resume">
                            <p class="col-span-2 lg:col-span-1">{{ mail.username }}</p>
                            <p class="col-span-2 lg:col-span-1">{{ mail.email }}</p>
                            <p class="col-span-2">{{ mail.subject }}</p>
                            <p class="col-span-2 text-left">{{ mail.message }}</p>
                        </div>
                        <div v-if="isLoading === false" class="mb-20 w-full flex justify-between">
                            <a @click="step = 1" class="text-xl cursor-pointer hover:text-blue-300">Annuler</a>
                            <input class="text-xl cursor-pointer hover:text-blue-300" type="submit" value="Envoyer"/>
                        </div>
                        <div v-if="isLoading === true" class="mb-20 w-full flex justify-center">
                            <div class="border-t-transparent w-8 h-8 border-4 border-blue-300 border-solid rounded-full animate-spin"/>
                        </div>
                    </div>
                </form>
                <p class="text-gray-500 text-xs md:text-sm w-full text-center">
                    ou via <a class="text-gray-500 font-bold hypertext" href="mailto:martial.escudero@gmail.com">martial.escudero@gmail.com</a>
                </p>
            </div>
            <div v-if="step === 6" class="px-14 text-center text-lg lg:text-4xl space-y-5">
                <p class="text-5xl lg:text-7xl">🎉🎉🎉</p>
                <p>Mail envoyé avec <span class="font-bold text-blue-300">succès</span> !</p>
                <p>Vous allez être redirigé dans <span class="font-bold text-blue-300">{{ time }}</span></p>
            </div>
        </div>
    </div>
</template>