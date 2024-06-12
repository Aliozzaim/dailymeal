<template>
  <header
    class="bg-[#282828] !mb-[20px] shadow h-16 flex justify-between items-stretch rounded-b-md pr-[30px]"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
    >
      <img src="../assets/dailymail.png" alt="logo" class="h-[60px] w-[60px]" />
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:scale-105 hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:scale-105 hover:text-white"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:scale-105 hover:text-white"
      >
        Meals By Ingredients
      </router-link>
    </div>
    <router-link
      :to="{ name: 'auth' }"
      class="inline-flex items-center px-2 h-full transition-colors hover:scale-105 space-x-2 hover:text-white"
    >
      <span> {{ logindMethod === "Login" ? "Login" : "Register" }}</span>
      <i class="fa-solid fa-user"></i>
    </router-link>
  </header>
</template>

<script setup>
import { ref, computed } from "vue"
import store from "../store"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
const logindMethod = computed(() => store.state.changeAuthMethod)
</script>
