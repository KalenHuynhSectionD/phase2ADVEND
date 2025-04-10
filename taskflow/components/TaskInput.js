import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskInput() {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Enter a task" />
      <button type="submit">Add Task</button>
    </form>
  );
}