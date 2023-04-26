<script setup>
import Task from './Task.vue'

const tasks = [
  {
    description: '1',
    completed: false,
    creationTime: 1682518036922,
    title: 'test title',
    id: 'gKSsjdHZERlPwRjt2hey'
  }
]

console.log(tasks, tasks.length)
</script>

<template>
  <section class="tasks-section">
    <Task
      v-for="item in tasks"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :completed="item.completed"
      :creationTime="item.creationTime"
    />
    <p v-if="!tasks.length || tasks.length <= 0" class="no-list">No tasks</p>
  </section>
</template>

<style scoped>
.no-list {
  color: gray;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
}

.tasks-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
