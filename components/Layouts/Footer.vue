<template>
    <footer v-if="$route.fullPath.slice(0,8) !== '/projet/'" class="text-center text-xs py-5">
        <p>&copy; 2020 - <span v-text="new Date().getFullYear()" /> Martial Escudero. Tous droits réservés.</p>
    </footer>
</template>