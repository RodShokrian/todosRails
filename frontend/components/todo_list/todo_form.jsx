import React from 'react';
import uniqueIdifier from '../../util/util';
import { makeTodo } from '../../reducers/selectors';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    let newTodo = {};

    newTodo.id = uniqueIdifier();
    newTodo.title = document.getElementById('todo-title').value;
    newTodo.body = document.getElementById('todo-body').value;
    newTodo.done = false;

    console.log(makeTodo(newTodo));
    this.props.receiveTodo(makeTodo(newTodo));
  }

  render() {
    return (
      <form className="todo-form">
        <h3>Add a New Task</h3>
        <label>Title:
          <input id="todo-title" className="input" type="text"></input>
        </label>
        <br />
        <label>Body:
          <textarea id="todo-body" className="input"></textarea>
        </label>
        <button className="create-button" onClick={this.addTodo}>Create Task!</button>
      </form>

    );
  }

}

export default TodoForm;
