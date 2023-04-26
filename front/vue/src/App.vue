<script setup>
import { getDocs } from 'firebase/firestore'
import { RouterView } from 'vue-router'
import { taskCollection } from './firebase'

getDocs(taskCollection)
  .then((snapshot) => {
    let tasks = []
    snapshot.docs.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id })
    })
    console.log(tasks)
  })
  .catch((err) => {
    console.log(err.message)
  })
</script>

<template>
  <main class="app-container">
    <RouterView />
  </main>
</template>

<style scoped>
.app-container {
  margin-top: 1rem;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  justify-content: center;
}
</style>
