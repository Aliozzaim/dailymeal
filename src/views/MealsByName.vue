<template>
  <div class="bg-red-50">
    <input
      type="text"
      @input="SeachMeals($event.target.value)"
      class="rounded border-2 text-black border-gray-100 w-full"
      placeholder="Search for Meals"
    />
    <div class="grid grid-cols-3 gap-4">
      <!-- // <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" /> -->
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import store from "../store"

const meals = computed(() => store.state.meals)

function SeachMeals(keyword) {
  store.dispatch("searchMeals", keyword)
}
</script>
