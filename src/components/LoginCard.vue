<template>
  <div class="login-container relative">
    <button class="back-button absolute top-1" @click="goBack">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h1 class="mb-4">Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="switch-message">
      <p>
        <button class="switch-button" @click="switchToRegister">
          Don't have an account? Register
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import store from "../store"

const router = useRouter()
const username = ref("")
const password = ref("")

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

const switchToRegister = () => {
  store.commit("setChangeAuthMethod", "Register")
}
</script>

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
  background-color: #323a48;
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

.back-button {
  background-color: #888;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}

.switch-message {
  margin-top: 20px;
}

.switch-button {
  background-color: transparent;
  color: #007bff;
  cursor: pointer;
  border: none;
  text-decoration: underline;
}
</style>
