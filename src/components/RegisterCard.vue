<template>
  <div class="register-container relative">
    <h1 class="mb-4">Register</h1>
    <button class="back-button absolute top-1" @click="goBack">
      <i class="fas fa-arrow-left"></i>
    </button>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="bg-[#323a48]"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <button class="switch-button" @click="switchToLogin">
      Already have an account? Login
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import store from "../store"

const router = useRouter()
const username = ref("")
const email = ref("")
const password = ref("")
const goBack = () => {
  router.back()
}

const register = async () => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      // Redirect to the login or another page
      store.commit("setChangeAuthMethod", "Login")
    } else {
      // Display error message to the user
    }
  } catch (error) {
    console.error("An error occurred during registration:", error)
  }
}

const switchToLogin = () => {
  store.commit("setChangeAuthMethod", "Login")
}
</script>

<style scoped>
.register-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px;
  border: 1px solid #ffffff;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 20px;
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
label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #323a48;
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

.switch-button {
  margin-top: 20px;
  background-color: transparent;
  color: #007bff;
  cursor: pointer;
  border: none;
  text-decoration: underline;
}
</style>
