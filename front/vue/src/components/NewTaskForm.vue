<script setup>
import { addDoc } from 'firebase/firestore'
import { reactive } from 'vue'
import { getTasks, taskCollection } from '../firebase'

const newTask = reactive({
  creationTime: null,
  description: '',
  title: '',
  completed: false
})

const createNewTask = () => {
  addDoc(taskCollection, {
    ...newTask,
    creationTime: Date.now()
  }).then(() => {
    getTasks(taskCollection)
  })

  newTask.description = ''
  newTask.title = ''

  return {
    newTask,
    createNewTask
  }
}
</script>

<template>
  <h1>Create New Task</h1>
  <form @submit.prevent="createNewTask">
    <div class="form-group">
      <label for="newTaskDescription"> Task Title </label>
      <input
        type="text"
        class="form-control"
        placeholder="Add new task title here"
        required
        v-model="newTask.title"
      />
    </div>
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
