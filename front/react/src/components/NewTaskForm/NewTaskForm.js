import { addDoc } from "firebase/firestore";
import React, { useCallback, useState } from "react";
import { taskCollection } from "../../firebase";
import "./NewTaskForm.css";

function NewTaskForm({ updateTasksHandler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewTaskHandler = useCallback(() => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const newTask = {
        creationTime: Date.now(),
        description: description,
        title: title,
        completed: false,
      };

      addDoc(taskCollection, newTask)
        .then(() => {
          setTitle("");
          setDescription("");
          updateTasksHandler();
        })
        .catch((err) => {
          console.log(err);
          alert("Ooops...", "Something get wrong. Try again!");
        });
    });
  }, [description, title, updateTasksHandler]);

  return (
    <section className="new-task-section">
      <div className="new-task-container">
        <h1>Create New Task</h1>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control description-input"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary add-button"
            onClick={addNewTaskHandler}
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewTaskForm;
