import React, { useCallback, useState } from "react";
import "./NewTaskForm.css";

function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewTaskHandler = useCallback(() => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      console.log(title, description);
    });
  }, [description, title]);

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
