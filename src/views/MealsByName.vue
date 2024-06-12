<script setup>
import { computed } from "@vue/reactivity"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import Meals from "../components/Meal.vue"

const route = useRoute()
const keyword = ref("")
const meals = computed(() => store.state.searchedMeals.meals)
const message =
  "Hello! Whether you're searching for an old favorite or a new discovery, our meal search feature makes it easy. Type a meal name to get started and find your perfect dish"
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value)
  } else {
    store.commit("setSearchedMeals", [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white text-black border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <Meals :message="message" :meals="meals" />
</template>
