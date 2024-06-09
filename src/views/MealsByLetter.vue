<template>
  <input
    type="text"
    class="rounded border-2 border-gray-100 w-full"
    placeholder="Search for Meals"
  />

  <div class="flex gap-1">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="`by-letter/${letter}`"
      class="text-blue-500"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
import store from "../store"
</script>
