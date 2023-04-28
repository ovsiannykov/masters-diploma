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

    // console.log('Home: ', this.tasks)

    //console.log(JSON.parse(JSON.stringify(this.tasks)))
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
    <TaskList :tasks="tasks" :getAllTasks="handler" />
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
