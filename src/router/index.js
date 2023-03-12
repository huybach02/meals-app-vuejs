import { createRouter, createWebHistory } from "vue-router";


import Home from "../views/Home.vue";
import MealsByName from "../views/Meals_By_Name.vue";
import MealsByLetter from "../views/Meals_By_Letter.vue";
import MealsByIngredient from "../views/Meals_By_Ingredient.vue";
import DefaultLayout from "../components/Default_Layout.vue";
import GuestLayout from "../components/Guest_Layout.vue";
import MealDetails from "../views/Meal_Details.vue";
import Ingredient from "../views/Ingredient.vue";



const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredient,
            },
            {
                path: "/by-ingredient/:ingredient",
                name: "byIngredient",
                component: MealsByIngredient,
            },
            {
                path: "/meal/:id",
                name: "mealDetails",
                component: MealDetails
            }
        ]
    },
    {
        path: "/guest",
        component: GuestLayout,

    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;