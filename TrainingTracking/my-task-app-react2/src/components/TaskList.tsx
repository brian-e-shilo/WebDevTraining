import React from "react";

type TaskListProps = {
  tasks: string[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
