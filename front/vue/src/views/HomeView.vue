<script>
import { getDocs } from 'firebase/firestore'
import { defineComponent } from 'vue'
import NewTaskForm from '../components/NewTaskForm.vue'
import TaskList from '../components/TaskList.vue'
import { taskCollection } from '../firebase'

async function getTasksHandler() {
  try {
    const snapshot = await getDocs(taskCollection)
    let taskArr = []
    snapshot.docs.forEach((doc) => {
      taskArr.push({ ...doc.data(), id: doc.id })
    })

    return taskArr
  } catch (error) {
    console.error(error)
  }
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
  async mounted() {
    const taskArr = await this.handler()
    this.tasks = taskArr
  },
  methods: {
    handler: getTasksHandler,
    updateTasks: async function () {
      const taskArr = await this.handler()
      this.tasks = taskArr
    }
  }
})

export default HomeView
</script>

<template>
  <div class="container">
    <NewTaskForm :getAllTasks="updateTasks" />
    <TaskList :tasks="tasks" :getAllTasks="updateTasks" />
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
