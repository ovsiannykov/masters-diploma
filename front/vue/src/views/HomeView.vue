<script setup>
import NewTaskForm from '../components/NewTaskForm.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
  <div class="container">
    <NewTaskForm />
    <TaskList />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
