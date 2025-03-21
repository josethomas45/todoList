import React, { useState } from 'react';
import './style.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask.trim(),
        completed: false
      }]);
      setNewTask('');
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Enter a new task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button 
              className="delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;