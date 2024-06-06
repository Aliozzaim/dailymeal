// src/router/index.js
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
//import About from "@/views/About.vue"

import mealsBYName from "../views/MealsByName.vue"
import mealsByLetter from "../views/MealsByLetter.vue"
import mealsByIngredient from "../views/MealsByIngredient.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/byname/:name",
    name: "byName",
    component: mealsBYName,
  },
  {
    path: "/byletter/:letter",
    name: "byLetter",
    component: mealsByLetter,
  },
  {
    path: "/byingredient/:ingredient",
    name: "byIngredient",
    component: mealsByIngredient,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
