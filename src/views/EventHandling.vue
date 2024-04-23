<template>
  <div>
    <div>
      <h1>内联事件处理器</h1>
      <button @click="counter++">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div>
      <h1>方法事件处理器</h1>
      <button @click="greet">Greet</button>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import {ref} from 'vue'

const counter = ref(0)
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
</script>