<script>
import { defineComponent } from 'vue'
import Task from './Task.vue'

const TaskList = defineComponent({
  props: {
    tasks: Array,
    getAllTasks: Function
  },
  components: {
    Task
  }
})

export default TaskList
</script>

<template>
  <section class="tasks-section" v-if="tasks.length > 0">
    <Task
      v-for="item in tasks"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :completed="item.completed"
      :creationTime="item.creationTime"
      :id="item.id"
      :getAllTasks="getAllTasks"
    />
  </section>
  <section v-else class="tasks-section">
    <p class="no-list">NO TASKS</p>
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
