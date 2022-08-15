<script lang="ts" setup>
    import validator from "validator"

    useHead({
        title: "Me contacter",
    });

    let step = ref(1)
    let errorMessage = ref('')
    let mail: any = {}

    function validateForm(testStep: number) {    
        switch (testStep) {
            case 1:
                if (mail.username === undefined || !validator.isLength(mail.username,{min:0, max: 30})) {
                    errorMessage.value = "Une erreur apparait dans l'écriture de votre Nom.";
                } else {
                    step.value++;
                    errorMessage.value = '';
                }
                break;

            case 2:
                if (mail.email === undefined || !validator.isEmail(mail.email)) {
                    errorMessage.value = "Une erreur apparait dans l'écriture de votre E-mail.";
                } else {
                    step.value++;
                    errorMessage.value = '';
                }
                break;

            case 3:
                if (mail.subject === undefined || !validator.isLength(mail.username,{min:0, max: 50})) {
                    errorMessage.value = "Une erreur apparait dans l'écriture du Sujet.";
                } else {
                    step.value++;
                    errorMessage.value = '';
                }
                break;

            case 4:
                if (mail.message === undefined || !validator.isLength(mail.message,{min:10, max: 1500})) {
                    errorMessage.value = "Vore message est vide ou trop court.";
                } else {
                    step.value++;
                    errorMessage.value = '';
                }
                break;
        }
    }
</script>

<template>
    <div class="relative w-full">
        <div class="h-screen flex flex-col justify-center items-center">
            <div class="form">
                <p v-if="step <= 4" class="mb-1.5 text-center text-red-500 text-xs">{{ errorMessage }}&nbsp;</p>
                <input v-if="step === 1" v-model="mail.username" @keypress.enter="step++" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Nom" type="text" name="username">
                <input v-if="step === 2" v-model="mail.email" @keypress.enter="step++" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="E-mail" type="text" name="email">
                <input v-if="step === 3" v-model="mail.subject" @keypress.enter="step++" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Sujet" type="text" name="subject">
                <textarea v-if="step === 4" v-model="mail.message" @keypress.enter="step++" @keypress="errorMessage = ''" :class="errorMessage === '' ? 'input-default' : 'input-error'" placeholder="Message" name="message" rows="10"/>
                <div class="mt-10 mb-20 w-full flex justify-center">
                    <a v-if="step <= 4" @click="validateForm(step)" class="text-xl cursor-pointer hover:text-blue-300">Suivant</a>
                </div>
                
                <div v-if="step === 5">
                    <p class="text-center text-3xl lg:text-5xl">Récapitulatif</p>
                    <div class="resume">
                        <p class="col-span-2 lg:col-span-1">{{ mail.username }}</p>
                        <p class="col-span-2 lg:col-span-1">{{ mail.email }}</p>
                        <p class="col-span-2">{{ mail.subject }}</p>
                        <p class="col-span-2 text-left">{{ mail.message }}</p>
                    </div>
                    <div class="mb-20 w-full flex justify-between">
                        <a @click="step = 1, mail = {}" class="text-xl cursor-pointer hover:text-blue-300">Annuler</a>
                        <a @click="step++" class="text-xl cursor-pointer hover:text-blue-300">Envoyer</a>
                    </div>
                </div>
            </div>
            <p class="text-gray-500 text-xs md:text-sm w-full text-center">
                ou via <a class="text-gray-500 font-bold hypertext" href="mailto:martial.escudero@gmail.com">martial.escudero@gmail.com</a>
            </p>
        </div>
    </div>   
</template>