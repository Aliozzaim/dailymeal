<template>
  <div>
    <h1 class="text-3xl font-semibold mb-4">Ingredients Details</h1>
    <div class="grid grid-cols-3 gap-4">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
    </div>
  </div>
</template>
