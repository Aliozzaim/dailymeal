<script setup>
import { computed, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import axsiosClient from "../axsiosClient"
import store from "../store"
import Meals1 from "../components/Meal.vue"

const meals = ref([])

onMounted(async () => {
  setTimeout(async () => {
    for (let i = 0; i < 10; i++) {
      axsiosClient
        .get(`random.php`)
        .then(({ data }) => meals.value.push(data.meals[0]))
    }
  }, 1000)
})
</script>

<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <template v-if="meals.length">
    <Meals1 :meals="meals" />
  </template>
</template>
