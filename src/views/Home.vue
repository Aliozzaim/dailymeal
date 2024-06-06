<script setup>
import { computed, onBeforeMount, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import axsiosClient from "../axsiosClient"
import store from "../store"
const meals = computed(() => store.state.meals)
//give me letees as a string
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const currentRoute = useRoute()
const router = useRouter()

onMounted(async () => {
  axsiosClient.get("/list.php?i=lis").then((response) => {
    store.commit("setMeals", response.data)
    console.log(response.data)
  })
})
</script>

<template>
  <div>{{ meals[0] }}</div>
  <input
    type="text"
    class="rounded border-2 border-gray-100 w-full"
    placeholder="Search for Meals"
  />

  <div class="flex gap-1">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="`/${letter}`"
      class="text-blue-500"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<style></style>
