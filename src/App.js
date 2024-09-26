import logo from './platzi.webp';
import { TodoContador } from './TodoContador';
import { TodoBusqueda } from './TodoBusqueda';
import { TodoList } from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';

const defaultTodos = 
[
  {text: 'mew', completed: false},
  {text: 'curso platzi', completed: true},
  {text: 'Hacer lavanderia', completed: false},
  {text: 'Comer', completed: false}

];

function App() {
  return (
    <React.Fragment>
    <TodoContador completed={16} todo={25}/>
    <TodoBusqueda/>

    <TodoList>
    {defaultTodos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text}
      completed={todo.completed}
      />
    ))}
    </TodoList>

    <CreateTodoButton />

    </React.Fragment>
  );
}


export default App;
