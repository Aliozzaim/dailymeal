export async function searchMeals({ commit }, keyword) {
  commit("setLoading", true)
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )

    const data = await response.json()
    console.log(data)
    commit("setSearchedMeals", data.meals) // Assuming you have a mutation named "setSearchedMeals" to update the state
  } catch (error) {
    console.error("Error fetching meals:", error)
    commit("setSearchedMeals", []) // Optionally clear meals on error
  } finally {
    commit("setLoading", false)
  }
}
