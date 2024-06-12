<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-white">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-white hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>

    <Meals :message="message" :meals="meals" />
  </div>
</template>

<script setup>
import { computed } from "vue"
import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import Meals from "../components/Meal.vue"

const message =
  "Welcome to our Meals by Letter page! We're here to help you find the perfect meal. Choose a letter or start typing to begin your search"
const route = useRoute()
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const meals = computed(() => store.state.mealsByLetter)

watch(
  () => route.params.letter,
  (newValue) => {
    store.dispatch("searchMealsByLetter", newValue)
  }
)

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter)
})
</script>
