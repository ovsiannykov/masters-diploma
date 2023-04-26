<script setup>
import { reactive } from 'vue';

const newTask = reactive({
  creationTime: null,
  description: '',

  completed: false
})



// const tasksCollection = db.collection('tasks')

// const createNewTask = () => {
//   tasksCollection.add({
//     ...newTask,
//     creationTime: Date.now()
//   })

//   newTask.description = ''

//   return {
//     newTask,
//     createNewTask
//   }
}
</script>

<template>
  <h1>Create New Task</h1>
  <form @submit.prevent="createNewTask">
    <div class="form-group">
      <label for="newTaskDescription"> Task Description </label>
      <input
        type="text"
        class="form-control"
        placeholder="Add new task description here"
        required
        v-model="newTask.description"
      />
    </div>
    <button type="submit" class="btn btn-success">Create</button>
  </form>
</template>

<style scoped></style>
