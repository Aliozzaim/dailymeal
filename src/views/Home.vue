<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import axiosClient from "../axiosClient"
import store from "../store"
import Meals1 from "../components/Meal.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue"

const meals = ref([])
const fetchLimit = ref(6)
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
  <div class="px-8 pb-0 text-white flex justify-between items-center mb-[15px]">
    <h1 class="text-4xl font-bold">Today's Favorite Meals</h1>
    <v-btn
      @click="fetchRandomMeals"
      color="orange"
      class="rounded shadow"
      outlined
      text="Refresh Meals"
    ></v-btn>
  </div>
  <template v-if="meals.length === 0 && !Loading.value">
    <LoadingSpinner />
  </template>
  <template v-else>
    <Meals1 :meals="meals" />
  </template>
</template>
