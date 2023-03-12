import axiosClient from '../axios';


export function searchMeals(context, keywork) {
    axiosClient.get(`search.php?s=${keywork}`)
        .then(({ data }) => {
            // debugger;
            context.commit("setSearchMeals", data.meals);
        });
}

export function searchMealsByLetter(context, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            // debugger;
            context.commit("setMealsByLetter", data.meals);
        });
}

export function searchMealsByIngredient(context, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            // debugger;
            context.commit("setMealsByIngredient", data.meals);
        });
}