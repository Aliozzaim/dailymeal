<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import axiosClient from "../axiosClient"
import store from "../store"
import Meals1 from "../components/Meal.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue"

const meals = ref([])
const fetchLimit = ref(9)
const Loading = ref(false)
const rondomMeasl = computed(() => store.state.randomMeals)

// watch(fetchLimit, (old, newValue) => {
//   console.log("newMeals", newValue)
// })

const fetchRandomMeals = async () => {
  Loading.value = true
  meals.value = []

  const mealRequests = Array.from({ length: fetchLimit.value }, () =>
    axiosClient.get(`random.php`)
  )

  const mealResponses = await Promise.all(mealRequests)
  meals.value = mealResponses.map((response) => response.data.meals[0])
  Loading.value = false

  store.commit("setRandomMeals", meals.value)
}

const incrementFetchLimit = () => {
  fetchLimit.value += 1
}

onMounted(async () => {
  if (rondomMeasl.value.length === 0) {
    await fetchRandomMeals()
  } else {
    meals.value = [...rondomMeasl.value]
  }
})

watch(fetchLimit, async (newLimit, oldLimit) => {
  await fetchRandomMeals()
})
</script>

<template>
  <div class="p-8 pb-0 text-[#ff0000] flex justify-between items-center">
    <h1 class="text-4xl font-bold mb-4">Today's Favorite Meals</h1>
    <button
      @click="fetchRandomMeals"
      class="bg-[#ff0000] text-white px-3 py-2 rounded shadow"
    >
      Refresh Meals
    </button>
  </div>
  <template v-if="meals.length === 0 && !Loading.value">
    <LoadingSpinner />
  </template>
  <template v-else>
    <Meals1 :meals="meals" />
  </template>
</template>
