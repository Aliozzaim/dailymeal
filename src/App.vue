<script setup>
import HelloWorld from "./components/HelloWorld.vue"
import router from "./router"
</script>

<template>
  <div>
    <img class="logo" src="https://vuejs.org/images/logo.png" alt="Vue logo" />

    <router-link :to="{ name: 'byName', params: { name: 'exampleName' } }">
      Search Meals
    </router-link>

    <router-link
      :to="{ name: 'byLetter', params: { letter: 'exampleLetter' } }"
    >
      Search by letter
    </router-link>

    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: 'exampleIngredient' },
      }"
    >
      Search by ingredients
    </router-link>
  </div>

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
