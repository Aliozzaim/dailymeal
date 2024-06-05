<script setup>
import { useRoute, useRouter } from "vue-router"
alert("Hello! I am an alert box!!")
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Current Route: {{ currentRoute }}</p>
    <button @click="goToAbout">Go to About</button>
  </div>
</template>

<style></style>
