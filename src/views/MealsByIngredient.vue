<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-white">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import Meals from "../components/Meal.vue"

const route = useRoute()
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient)
})
</script>
