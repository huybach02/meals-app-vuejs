<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all relative">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <div class="p-3">
            <h3 class="py-3 font-semibold text-2xl">{{ meal.strMeal }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in perspiciatis corrupti veniam dolorum
                doloribus sapiente enim nihil deleniti autem, culpa explicabo et? Maiores nemo facilis impedit
                numquam, quo officia?</p>
            <div class="px-3 py-10">
                <YoutubeButton :href="meal.strYoutube" />
                <router-link to="/"
                    class="absolute bottom-5 right-7 px-4 py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">
                    View detail
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

import YoutubeButton from './YoutubeButton.vue';

const { meal } = defineProps({
    meal: {
        type: Object,
        required: true
    }
})

</script>

<style></style>