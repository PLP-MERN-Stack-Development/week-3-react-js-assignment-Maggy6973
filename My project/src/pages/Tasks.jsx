import React from "react";
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <div className="animate-slide-up">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Task Manager</h1>
      <TaskManager />
    </div>
  );
};

export default Tasks;