<script setup>
import { ref } from "vue"
import { computed } from "vue"

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

//computed propertiy

const fullName = computed(() => {
  return `${userCredentials.value.name} ${userCredentials.value.lastName}`
})
//set wachers
// watch(userCredentials, (newValue, oldValue) => {
//   console.log("new value", newValue)
//   console.log("old value", oldValue)
// })

// show me a example of lifecycle hooks

// onMounted(() => {
//   console.log("mounted")
// })
// onUpdated(() => {
//   console.log("updated")
// })
// onUnmounted(() => {
//   console.log("unmounted")
// })
//before mount
// onBeforeMount(() => {
//   console.log("before mount")
// })

let age = ref(20)
const increaseAge = () => {
  age.value++
}
</script>

<template>
  <!-- <Transition>
    birds fly
  </Transition>
  <div class="flex flex-col items-start justify-start">
    <p v-html="HTMLTag"></p>
    <a :href="link">:href</a>
  </div>
  <h1>
    {{ fullName }}
  </h1>
  <div class="flex  flex-row space-x-2 my-4"  v-show="!editMode">
    <input type="text" class=" black w-[120px] outline-none border-none "  v-model.lazy.trim="userCredentials.name" />
    <input type="text" class=" w-[120px] outline-none border-none " v-model="userCredentials.lastName" />
  </div>
 <div v-if="editMode" class="flex justify-between">
   <img class=" rounded-full    w-[70px]" :src="userCredentials.photo"  alt="userCredentials.photo" ></img>
  <div class="flex flex-col" >
  <p v-for="(name, index) in userCredentials" :key="index" >
      {{ index }} :  {{ name }}
  
    </p>
  </div>
  

 </div>
  <div>
    <button type="button" @click="toggleEditMode">editMode</button>

  </div>
<div>
    <h1 class="flex flex-col">
   
  </h1>
</div> -->
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
