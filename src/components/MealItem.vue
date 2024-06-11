<template>
  <div
    class="bg-white text-black shadow rounded-xl p-2 hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold text-black">{{ meal.strMeal }}</h3>
      <p class="mb-4 text-black">
        <!-- {{ $filters.truncateWords(meal.strInstructions, 20) }} -->
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue"

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
})
</script>
