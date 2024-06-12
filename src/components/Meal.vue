<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    <slot name="message"> {{ message }}</slot>
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue"
import router from "../router/index.js"
// import { ref } from "vue"
// const currentRoute = ref(router.currentRoute.value.path)

const { meals, message } = defineProps({
  meals: {
    required: true,

    type: Array,
  },
  message: {
    type: String,
    default: "No meals found",
  },
})
console.log("message", message)
</script>
