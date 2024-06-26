import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

//  vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  components,
  directives,
})
import "@fortawesome/fontawesome-free/css/all.css"
createApp(App).use(vuetify).use(router).mount("#app")
