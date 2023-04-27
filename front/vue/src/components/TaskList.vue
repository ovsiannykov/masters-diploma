<script>
import { getDocs } from 'firebase/firestore'
import { taskCollection } from '../firebase'
import Task from './Task.vue'

export default {
  components: {
    Task
  },
  async created() {
    const tasks = []

    const querySnapshot = await getDocs(taskCollection)
    querySnapshot.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id })
    })

    this.tasks = tasks
  },
  data() {
    return {
      tasks: []
    }
  }
}
</script>

<template>
  <section v-if="tasks.length > 0" class="tasks-section">
    <Task
      v-for="item in tasks"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :completed="item.completed"
      :creationTime="item.creationTime"
    />
  </section>
  <section v-else class="tasks-section">
    <p v-if="!tasks.length || tasks.length <= 0" class="no-list">NO TASKS</p>
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
