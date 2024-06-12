<template>
  <v-card
    color="#323a48"
    class="mx-auto hover:scale-105 cursor-pointer transition-all"
    width="350"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <v-img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="align-end text-white"
        height="142"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title class="backdrop-blur-md">{{ meal.strMeal }}</v-card-title>
      </v-img>
    </router-link>

    <v-card-text>
      <span class="text-[13px] !p-[8px]">
        {{ truncateWords(meal.strInstructions, 15) }}
      </span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="tonal"
        :href="meal.strYoutube"
        color="orange"
        text="Youtube"
      ></v-btn>
      <v-btn
        variant="tonal"
        :href="meal.strSource"
        color="orange"
        text="Explore"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue"
import truncateWords from "../filters/index.js"
import { tr } from "vuetify/locale"

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
})
</script>
