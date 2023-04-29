import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { taskCollection } from "../../firebase";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

function TaskList() {
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

  return (
    <>
      <NewTaskForm updateHandler={getAllTasks} />
    </>
  );
}

export default TaskList;
