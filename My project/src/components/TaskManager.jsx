import React from 'react';
import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './ui/Button';
import Card from './ui/Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <Card title="Task Manager" className="max-w-2xl mx-auto">
      {/* Add Task Form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <Button onClick={addTask} variant="primary">Add</Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {['All', 'Active', 'Completed'].map(filterType => (
          <Button
            key={filterType}
            onClick={() => setFilter(filterType)}
            variant={filter === filterType ? 'primary' : 'secondary'}
            className="text-sm"
          >
            {filterType}
          </Button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No tasks found</p>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-3 border rounded-md dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4"
              />
              <span
                className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'dark:text-white'}`}
              >
                {task.text}
              </span>
              <Button
                onClick={() => deleteTask(task.id)}
                variant="danger"
                className="text-xs px-2 py-1"
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>

      {/* Task Stats */}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Total: {tasks.length} | Active: {tasks.filter(t => !t.completed).length} | 
        Completed: {tasks.filter(t => t.completed).length}
      </div>
    </Card>
  );
};

export default TaskManager;