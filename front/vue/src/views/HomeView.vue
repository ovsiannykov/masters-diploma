<script>
import NewTaskForm from '../components/NewTaskForm.vue'
import TaskList from '../components/TaskList.vue'

import { getTasks, taskCollection } from '../firebase'

async function getTasksHandler() {
  const result = await getTasks(taskCollection)
  this.tasks = result
}

export default {
  components: {
    NewTaskForm,
    TaskList
  },
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    const handler = getTasksHandler.bind(this)
    handler()
  }
}
</script>

<template>
  <div class="container">
    <NewTaskForm :getAllTasks="tasks" />
    <TaskList :tasks="tasks" />
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
