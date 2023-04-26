<script setup>
import { initializeApp } from 'firebase/app'
import { RouterView } from 'vue-router'
import { firebaseConfig } from './firebase'

const app = initializeApp(firebaseConfig)
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
