<script setup>
import { computed } from "vue"
import store from "../store"
import LoginCard from "./LoginCard.vue"
import RegisterCard from "./RegisterCard.vue"

const logindMethod = computed(() => store.state.changeAuthMethod)
</script>

<template>
  <div v-if="logindMethod == 'Login'">
    <LoginCard />
  </div>
  <div v-else>
    <RegisterCard />
  </div>
</template>
