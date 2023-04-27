<script>
import { defineComponent } from 'vue'
import NewTaskForm from '../components/NewTaskForm.vue'
import TaskList from '../components/TaskList.vue'

import { getTasks, taskCollection } from '../firebase'

async function getTasksHandler() {
  const result = await getTasks(taskCollection)
  this.tasks = result
}

const HomeView = defineComponent({
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
  },
  methods: {
    handler: getTasksHandler
  }
})

export default HomeView
</script>

<template>
  <div class="container">
    <NewTaskForm :getAllTasks="handler" />
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
