import { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE':
      return state.map(task => task.id === action.id ? { ...task, completed: !task.completed } : task);
    case 'DELETE':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const addTask = text => dispatch({ type: 'ADD', text });
  const toggleTask = id => dispatch({ type: 'TOGGLE', id });
  const deleteTask = id => dispatch({ type: 'DELETE', id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}