<template>
    <div>
        <div class="p-8 pb-0 text-orange-500">
            <h1 class="text-6xl font-bold mb-4 text-center">Welcome to Meals Page </h1>
        </div>
        <h2 class="text-3xl font-bold text-center">There are a few random meals we recommend for you. We hope you can like
            them!!! </h2>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
// import store from "../store";
import axiosClient from "../axios";
import Meals from "../components/Meals.vue";


const meals = ref([]);

onMounted(async () => {
    for (let i = 0; i < 6; i++) {
        axiosClient.get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
})

</script>

<style></style>