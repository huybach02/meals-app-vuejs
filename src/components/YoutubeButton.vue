<template>
    <a :href="href" target="_blank"
        class="absolute bottom-5 px-4 py-3 bg-rose-500 text-white font-bold rounded-md hover:bg-rose-700">View on Yotube
    </a>
</template>

<script setup>
const props = defineProps({
    href: String
});
</script>

<style></style>