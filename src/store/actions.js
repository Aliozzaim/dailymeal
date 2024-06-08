export async function searchMeals({ commit }, keyword) {
  commit("setLoading", true)
  try {
    const response = await fetch(`search.php?s=${keyword.value}`)
    const data = await response.json()
    commit("searchedMeals.meals", data.meals)
  } catch (error) {
    console.error("Error fetching meals:", error)
    commit("searchedMeals.meals", []) // Optionally clear meals on error
  } finally {
    commit("setLoading", false)
  }
}
