import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import NewTaskForm from "../../components/NewTaskForm/NewTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { taskCollection } from "../../firebase";
import logo from "../../logo.svg";
import "./HomePage.css";

function HomePage() {
  const [tasks, setTasks] = useState([]);

  async function getAllTasks() {
    try {
      const snapshot = await getDocs(taskCollection);
      let taskArr = [];
      snapshot.docs.forEach((doc) => {
        taskArr.push({ ...doc.data(), id: doc.id });
      });

      setTasks(taskArr);
      return taskArr;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllTasks();
  }, []);

  function backRedirect() {
    document.location.href =
      "https://ovsiannykov.github.io/masters-diploma-public.github.io/";
  }

  return (
    <div className="app-container">
      <header>
        <button className="btn back-button" onClick={backRedirect}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
        <div className="logo-box">
          <img alt="logo" className="logo" src={logo} />
        </div>
      </header>
      <main>
        <NewTaskForm updateTasksHandler={getAllTasks} />
        <TaskList tasksList={tasks} updateTasksHandler={getAllTasks} />
      </main>
    </div>
  );
}

export default HomePage;
