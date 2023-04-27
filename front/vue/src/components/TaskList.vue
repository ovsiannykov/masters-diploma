<script>
import Task from './Task.vue'

export default {
  props: {
    tasks: String
  },
  components: {
    Task
  }
}
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
  </section>
  <!-- <section v-else class="tasks-section">
    <p v-if="!tasks.length || tasks.length <= 0" class="no-list">NO TASKS</p>
  </section> -->
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
