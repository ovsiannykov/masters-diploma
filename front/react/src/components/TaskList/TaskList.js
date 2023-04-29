import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

function TaskList({ tasksList, updateTasksHandler }) {
  return (
    <>
      <section className="tasks-section">
        {tasksList.length > 0 ? (
          tasksList.map((el) => (
            <Task
              key={el.id}
              title={el.title}
              description={el.description}
              id={el.id}
              creationTime={el.creationTime}
              completed={el.completed}
              updateTasksHandler={updateTasksHandler}
            />
          ))
        ) : (
          <p className="no-list">NO TASKS</p>
        )}
      </section>
    </>
  );
}

export default TaskList;
