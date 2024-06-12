import axiosClient from "../axiosClient"
export async function searchMeals({ commit }, keyword) {
  commit("setLoading", true)
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
    const data = await response.json()

    commit("setSearchedMeals", data.meals) // Assuming you have a mutation named "setSearchedMeals" to update the state
  } catch (error) {
    console.error("Error fetching meals:", error)
    commit("setSearchedMeals", []) // Optionally clear meals on error
  } finally {
    commit("setLoading", false)
  }
}
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals)
  })
}

export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredients", data.meals)
  })
}
