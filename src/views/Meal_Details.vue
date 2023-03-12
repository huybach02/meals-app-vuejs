<template>
    <div class="mx-auto max-w-[800px] p-8">
        <!-- <pre>{{ meal }}</pre> -->
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <div class="relative top-[80px] cursor-pointer flex">
            <YoutubeButton :href="meal.strYoutube"></YoutubeButton>
        </div>
        <img class="max-w-[100%] mt-[100px]" :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tag:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="text-justify">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <div v-for="(el, index) of new Array(20)" :key="index">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </div>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <div v-for="(el, index) of new Array(20)" :key="index">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </div>
                </ul>
            </div>


        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axios";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {};
        });
})

</script>

<style></style>