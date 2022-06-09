import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ToDoComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("Low");
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <label>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          const newTitle = event.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br />
      <br />

      <label>Description: </label>
      <input
        type="text"
        value={description}
        onChange={(event) => {
          const newDescription = event.target.value;
          setDescription(newDescription);
        }}
      ></input>
      <br />
      <br />

      <label>Importance: </label>
      <select
        value={importance}
        onChange={(event) => {
          const newImportance = event.target.value;
          setImportance(newImportance);
        }}
      >
        <option value="low">Low</option>;<option value="medium">Medium</option>;
        <option value="hard">Hard</option>;
      </select>
      <br />
      <br />

      <button
        style={{}}
        onClick={(event) => {
          const newToDoList = { title, description, importance };
          setToDoList([...toDoList, newToDoList]);
          setTitle("");
          setDescription("");
          setImportance("");
        }}
      >
        Submit
      </button>
      <br />
      <br />

      {toDoList.map((element, index) => {
        return (
          <div
            key={index}
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "15vw",
              paddingRight: "15vw",
            }}
          >
            <h2>{element.title}</h2>
            <p>{element.description}</p>
            <p>Importance: {element.importance}</p>
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
