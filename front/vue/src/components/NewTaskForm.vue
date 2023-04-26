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
  <section class="new-task-section">
    <div class="new-task-container">
      <h1>Create New Task</h1>
      <form @submit.prevent="createNewTask">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            required
            v-model="newTask.title"
          />
        </div>
        <div class="form-group">
          <textarea
            type="text"
            class="form-control description-input"
            placeholder="Description"
            required
            v-model="newTask.description"
          />
        </div>
        <button type="submit" class="btn btn-success add-button">Create</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 18px;
}
.new-task-section {
  margin-bottom: 28px;
}

.new-task-container {
  border-width: 1px;
  padding: 20px 30px;
  border-radius: 12px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
}

.description-input {
  height: 80px;
  justify-content: flex-start;
}

.add-button {
  width: 100%;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  .new-task-container {
    width: auto;
    margin-left: 2%;
    margin-right: 2%;
  }
}

@media only screen and (max-width: 800px) {
  .new-task-container {
    margin-top: 80px;
  }
}
</style>
