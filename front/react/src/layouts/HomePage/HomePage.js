import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import logo from "../../logo.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="app-container">
      <header>
        <button className="btn back-button">
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
        <TaskList />
      </main>
    </div>
  );
}

export default HomePage;
