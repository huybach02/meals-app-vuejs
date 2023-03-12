<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 ">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="!meals.length" class="flex justify-center text-gray-600">
            There are no meals
        </div>
    </div>
</template>

<script setup>
import MealItem from '../components/Meal_Item.vue';

const { meals } = defineProps({
    meals: {
        type: Array,
        required: true,
    }
})


</script>

<style></style>