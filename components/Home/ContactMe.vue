<template>
    <div class="flex mt-52">
        <div class="m-auto grid grid-cols-1">
            <h1
                class="text-center xl:text-4xl sm:text-2xl sm:ml-5 sm:mr-5 font-bold"
                data-aos="fade-right"
            >
                Vous avez une question ? Un projet ? Ou autre ?
            </h1>
            <div class="mx-auto mt-16 mb-20" data-aos="fade-up">
                <NuxtLink
                    class="transition ease-in duration-200 btn text-white font-bold text-2xl py-2 px-5 rounded-full"
                    tag="button"
                    to="/contact"
                >
                    Me contacter
                </NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.btn:hover {
    background: #202020;
    color: #93c5fd;
}

.btn:focus {
    outline: unset;
}

.btn {
    color: #202020;
    background: #93c5fd;
}
</style>
