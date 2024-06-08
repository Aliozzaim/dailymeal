<script setup>
import { ref, computed, watch } from "vue"
import { useRouter } from "vue-router"
import store from "../store"

const router = useRouter()
const username = ref("")
const password = ref("")

const logindMethod = computed(() => store.state.changeAuthMethod)
console.log("logindMethod 1", logindMethod.value)
const changeAuthMethod = (newMethod) => {
  console.log("newMethod2", newMethod)
  store.commit("setChangeAuthMethod", newMethod)
}

const login = async () => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("Login successful")
      // Redirect to the dashboard or another page
    } else {
      console.log("Login failed")
      // Display error message to the user
    }
  } catch (error) {
    console.error("An error occurred during login:", error)
  }
}
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="login-container relative">
    <button
      class="!bg-gray-500 flex justify-center items-center w-[35px] !rounded-full absolute top-[20px] left-[20px]"
      @click="goBack"
    >
      <i class="fas fa-arrow-left"></i>
    </button>
    <h1 class="mb-[50px]">Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">{{ logindMethod }}</button>
    </form>
    <button
      class="!bg-red-500"
      @click="changeAuthMethod(logindMethod == 'Login' ? 'Register' : 'Login')"
    >
      {{ logindMethod == "Login" ? "Register" : "Login" }}
    </button>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px;
  border: 1px solid #ffffff;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
