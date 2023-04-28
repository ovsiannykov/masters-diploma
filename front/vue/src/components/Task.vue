<script>
import { deleteDoc, doc } from 'firebase/firestore'
import { defineComponent } from 'vue'
import { db } from '../firebase'

function deleteTaskHandler(id, getAllTasks) {
  console.log('click')
  const docRef = doc(db, 'tasks', id)
  deleteDoc(docRef)
    .then(() => getAllTasks())
    .catch(() => {
      alert('Ooops', 'Something get wrong. Please train again')
    })
}

const Task = defineComponent({
  props: {
    title: String,
    description: String,
    id: String,
    creationTime: Number,
    completed: Boolean,
    getAllTasks: Function
  },
  methods: {
    deleteTask(props) {
      return deleteTaskHandler(props.id, props.getAllTasks)
    }
  }
})

export default Task
</script>

<template>
  <div class="task">
    <div class="info">
      <h4>{{ title }}</h4>

      <p class="description" v-if="description">
        {{ description }}
      </p>
    </div>
    <div class="buttons">
      <button class="btn btn-primary button" v-if="!completed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
          />
        </svg>
      </button>
      <button class="btn btn-danger button" @click="deleteTask">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
          />
          <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.task {
  width: 600px;
  border-width: 1px;
  padding: 20px 30px;
  border-radius: 12px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.info {
  max-width: 80%;
}

.buttons {
  display: flex;
  flex-direction: row;
  max-width: 40%;
  padding: 0 4px;
}

.button {
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 4px;
}

.description {
  hyphens: manual;
  overflow: hidden;
  max-height: 80px;
}

@media only screen and (max-width: 600px) {
  .task {
    max-width: 350px;
  }

  .button {
    width: 48px;
    height: 48px;
  }

  .buttons {
    flex-direction: column;
  }
}
</style>
