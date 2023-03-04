<template>
    <div id="hero">
        <h1><ContentSlot :use="$slots.title" unwrap /></h1>
        <p class="type"><ContentSlot :use="$slots.type" unwrap /></p>
        <p class="techno"><ContentSlot :use="$slots.techno" unwrap /></p>
        <div class="pt-4">
            <ContentSlot :use="$slots.link" unwrap />
        </div>
    </div>
</template>