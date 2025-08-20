import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Greeting from "./components/Greeting";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => setTasks([...tasks, task]);

  return (
    <div className="app">
      <Greeting name="Brian" />

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <h2>Counter</h2>
      <Counter />

      <h2>Task Manager</h2>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
