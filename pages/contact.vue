<script setup>
import validator from "validator"
import { Notyf } from "notyf"
import "notyf/notyf.min.css"

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

let step = ref(1)
let time = ref(5)
let isLoading = ref(false)
let errorMessage = ref("")
let mail = {
    name: "",
    email: "",
    subject: "",
    textEdit: ""
}

function returnLine(text) {
    return validator.escape(text).replace(/\r\n|\r|\n/g, "<br>")
}

function validateForm(testStep) {
    switch (testStep) {
        case 1:
            if (mail.name === undefined || !validator.isLength(mail.name,{min: 4, max: 30})) {
                errorMessage.value = "Une erreur apparait dans l'écriture de votre Nom."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 2:
            if (mail.from === undefined || !validator.isEmail(mail.from)) {
                errorMessage.value = "Une erreur apparait dans l'écriture de votre E-mail."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 3:
            if (mail.subject === undefined || !validator.isLength(mail.subject,{min: 4, max: 50})) {
                errorMessage.value = "Une erreur apparait dans l'écriture du Sujet."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break

        case 4:
            if (mail.textEdit === undefined || !validator.isLength(mail.textEdit,{min: 10, max: 1500})) {
                errorMessage.value = "Vore message est vide ou trop court."
            } else {
                step.value++
                errorMessage.value = ""
            }
            break
    }
}

async function sendEmail() {
    let timeCount = 5
    isLoading.value = true
    mail.text = returnLine(mail.textEdit)

    const { error } = await useFetch("/api/email", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: mail
    })

    if (!error.value) {
        step.value++
        isLoading.value = false

        setInterval(() => {
            timeCount--
            time.value--

            if (timeCount === 0) {
                time.value = "… 🚀"
                setTimeout(() => {
                    navigateTo("/")
                }, 500)
            }
        }, 1000)
    } else {
        const notyf = new Notyf({
            duration: 5000,
            position: {
                x: "right",
                y: "bottom"
            }
        })

        notyf.error("Une erreur est survenue, veuillez réessayer")
        navigateTo("/")
    }
}
</script>

<template>
    <div class="relative w-full">
        <div class="flex h-screen flex-col items-center justify-center">
            <div v-if="step <= 5">
                <form @submit.prevent="sendEmail()">
                    <p v-if="step <= 4" class="mb-1.5 text-center text-xs text-red-500">{{ errorMessage }}&nbsp;</p>
                    
                    <input v-show="step === 1" v-model="mail.name" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Nom" type="text" name="name" @focus="errorMessage = ''" @keypress.enter="validateForm(step)">

                    <input v-show="step === 2" v-model="mail.from" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="E-mail" type="text" name="email" @focus="errorMessage = ''" @keypress.enter="validateForm(step)">

                    <input v-show="step === 3" v-model="mail.subject" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Sujet" type="text" name="subject" @focus="errorMessage = ''" @keypress.enter="validateForm(step)">

                    <textarea v-show="step === 4" v-model="mail.textEdit" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Message" name="message" rows="10" @focus="errorMessage = ''" />

                    <div v-if="step <= 4" class="mt-10 mb-20 flex w-full justify-center">
                        <a class="cursor-pointer text-xl hover:text-blue-300" @click="validateForm(step)">Suivant</a>
                    </div>

                    <div v-if="step === 5">
                        <p class="text-center text-3xl lg:text-5xl">Récapitulatif</p>
                        <div class="resume">
                            <p class="col-span-2 lg:col-span-1">{{ mail.name }}</p>
                            <p class="col-span-2 lg:col-span-1">{{ mail.from }}</p>
                            <p class="col-span-2">{{ mail.subject }}</p>
                            <div class="col-span-2 max-h-96 overflow-y-scroll text-left" v-html="returnLine(mail.textEdit)" />
                        </div>
                        <div v-if="!isLoading" class="mb-20 flex w-full justify-between">
                            <a class="cursor-pointer text-xl hover:text-blue-300" @click="step = 1">Annuler</a>
                            <input class="cursor-pointer text-xl hover:text-blue-300" type="submit" value="Envoyer" />
                        </div>
                        <div v-else class="mb-20 flex w-full justify-center">
                            <div class="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-300 border-t-transparent" />
                        </div>
                    </div>
                </form>
                <p class="w-full text-center text-xs text-gray-500 md:text-sm">
                    ou via <a class="hypertext font-bold text-gray-500" href="mailto:martial.escudero@gmail.com">martial.escudero@gmail.com</a>
                </p>
            </div>
            <div v-if="step === 6" class="space-y-5 px-14 text-center text-lg lg:text-4xl">
                <p class="text-5xl lg:text-7xl">🎉🎉🎉</p>
                <p>Mail envoyé avec <span class="font-bold text-blue-300">succès</span> !</p>
                <p>Vous allez être redirigé dans <span class="font-bold text-blue-300">{{ time }}</span></p>
            </div>
        </div>
    </div>
</template>