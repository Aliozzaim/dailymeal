import { createRouter, createMemoryHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/home",
    component: Home,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
