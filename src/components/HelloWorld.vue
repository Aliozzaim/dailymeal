<script setup>
import { ref } from "vue"

defineProps({
  msg: String,
})
const userCredentials = ref({
  name: "Jack",
  lastName: "Napier",
  email: "example@gmail.com",
  photo: "https://picsum.photos/seed/picsum/200/300",
})
const count = ref(0)
const link = "https://www.gooogle.com"
const HTMLTag = `<a href="https://www.gooogle.com">Google</a>`
const editMode = ref(false)

const toggleEditMode = () => {
  editMode.value = !editMode.value
}

let age = ref(20)

const increaseAge = () => {
  age.value++
}
</script>

<template>
  
  <div class="flex flex-col items-start justify-start">
    <p v-html="HTMLTag"></p>
    <a :href="link">:href</a>
  </div>
  <div class="flex  flex-row space-x-2 my-4"  v-show="!editMode">
    <input type="text" class=" black w-[120px] outline-none border-none "  v-model="userCredentials.name" />
    <input type="text" class=" w-[120px] outline-none border-none " v-model="userCredentials.lastName" />
  </div>
 <div v-show="editMode" class="flex justify-between">
   <img class=" rounded-full    w-[70px]" :src="userCredentials.photo"  alt="userCredentials.photo" ></img>
  <div class=" flex flex-col  space-y-1">
      <p>{{ userCredentials.name }}</p>
      <p>{{ userCredentials.lastName }}</p>
  </div>
 </div>
  <div>
    <button type="button" @click="toggleEditMode">editMode</button>

  </div>
<div>
    <h1 class="flex flex-col">
    <!-- <span>age: {{ age }}</span>
    <div class="">
      <button type="button" @click="increaseAge">increase age</button>
      <button type="button" @click="age--">decrease age</button>
    </div> -->
  </h1>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  padding: 1em;
  background-color: #602424;
}
button {
  background-color: #42b883;
  color: white;
  font-size: 20px;
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  cursor: pointer;
  max-width: 250px;
}
input {
color: black;
}
</style>
