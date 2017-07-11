import React from 'react';
import { makeTodo } from '../../reducers/selectors';

const toggleDone = (todo, receiveTodo) => {
  todo.done = !todo.done;
  receiveTodo(makeTodo(todo));
};

const doneButtonTextifier = (todo) => {
  return todo.done ? "Undo" : "Done";
};

const TodoListItem = ({ todo, receiveTodo, removeTodo }) => (
  <li>
    {todo.title} {todo.body}
    <button onClick={() => toggleDone(todo, receiveTodo)}>
      {doneButtonTextifier(todo)}
    </button>
    <button onClick={() => removeTodo(todo)}>Delete</button>
  </li>
);

export default TodoListItem;
