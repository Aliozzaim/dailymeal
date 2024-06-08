<template>
  <div>
    <input
      type="text"
      class="rounded border-2 border-gray-100 w-full h-min-[250px]"
      placeholder="Search for Meals"
    />
    <div class="grid grid-cols-3 gap-4">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
    </div>
  </div>
</template>
