<template>
    <div>
        <div class="flex flex-wrap justify-center gap-2 mt-10 mb-5">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="(letter, index) of letters" :key="index"
                class="flex text-2xl items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
                {{ letter }}
            </router-link>
        </div>

        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { onMounted } from "vue";
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter);
});

</script>

<style></style>