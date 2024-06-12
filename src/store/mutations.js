export function setSearchedMeals(state, meals) {
  state.searchedMeals.meals = meals
}
export function setRandomMeals(state, meals) {
  state.randomMeals = meals
}

export function setChangeAuthMethod(state, method) {
  state.changeAuthMethod = method
}
export function setLoading(state, loading) {
  state.searchedMeals.loading = loading
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || []
}
export function setMealsByIngredients(state, meals) {
  state.mealsByIngredient = meals || []
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient
}
