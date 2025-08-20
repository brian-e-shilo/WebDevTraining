import React, { useState } from "react";

type TaskFormProps = {
  onAdd: (task: string) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
