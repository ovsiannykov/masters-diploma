<script setup>
import { getTasks, taskCollection } from './firebase'

getTasks(taskCollection)

function back() {
  document.location.href = 'https://ovsiannykov.github.io/masters-diploma-public.github.io/'
}
</script>

<template>
  <header>
    <button class="btn back-button" @click="back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </button>
    <div class="logo-box">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
    </div>
  </header>
  <main class="app-container">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  position: fixed;
}

.app-container {
  margin-top: 1rem;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));

  align-items: center;
}

.back-button {
  background-color: #3fb883;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.back-button:hover {
  background-color: #33485e;
}
</style>
