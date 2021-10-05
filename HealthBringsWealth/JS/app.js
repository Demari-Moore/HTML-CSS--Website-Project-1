let recipeCategory = document.getElementById("recipe-cat-title");
let latestRecipe = document.getElementById("latest-recipe");
let veganRecipes = document.getElementById("vegan-recipes");
let caribbeanRecipes = document.getElementById("caribbean-recipes");
let comfortRecipes = document.getElementById("comfort-recipes");
let showAside = document.getElementById("show-aside");

function FoodCategory(category) {

    recipeCategory.innerText = category;

    if (category == "Vegan") {
        latestRecipe.style.display = "none";
        caribbeanRecipes.style.display = "none";
        comfortRecipes.style.display = "none";
        veganRecipes.style.display = "block";
        showAside.style.display = "block";
    } else if (category == "Caribbean Inspired") {
        latestRecipe.style.display = "none";
        veganRecipes.style.display = "none";
        comfortRecipes.style.display = "none";
        caribbeanRecipes.style.display = "block";
    } else if (category == "Comfort Food") {
        latestRecipe.style.display = "none";
        veganRecipes.style.display = "none";
        caribbeanRecipes.style.display = "none";
        comfortRecipes.style.display = "block";
    }
}


// function LoadCategory()

// function VeganSelected() {
//     let recipeCategory = document.getElementById("recipe-cat-title");

//     recipeCategory.innerText = "VEGAN";
//     // else if () {
//     //     recipeCategory.innerText = "JUICES";
//     // } else if () {
//     //     recipeCategory.innerText = "BABY RECIPES";
//     // }
//     // // recipeCategory.innerText = "FOOD";
// }

// function CaribbeanSelected() {
//     let recipeCategory = document.getElementById("recipe-cat-title");

//     recipeCategory.innerText = "CARIBBEAN INSPIRED";
// }

// function ComfortSelected() {
//     let recipeCategory = document.getElementById("recipe-cat-title");

//     recipeCategory.innerText = "COMFORT FOOD";

// }