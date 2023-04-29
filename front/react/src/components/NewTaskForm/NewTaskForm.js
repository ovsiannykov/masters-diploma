import React, { useState } from "react";
import "./NewTaskForm.css";

function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section className="new-task-section">
      <div className="new-task-container">
        <h1>Create New Task</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control description-input"
              placeholder="Description"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary add-button">
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewTaskForm;
