<template>
    <div class="h-full">
        <div class="p-8">
            <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
                v-model="keyword" @change="searchMeals">
        </div>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
    }
    else {
        store.commit("setSearchMeals", []);
    }
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals();
    }
});
</script>

<style></style>