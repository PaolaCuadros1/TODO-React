import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Jugar co Adam', completed: true },
  { text: 'Estudiar', completed: true },
  { text: 'Hacer deporte', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoTitle totCompleted={20} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
