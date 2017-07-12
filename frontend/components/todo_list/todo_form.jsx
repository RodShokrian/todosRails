import React from 'react';
import uniqueIdifier from '../../util/util';
import { makeTodo } from '../../reducers/selectors';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("errors: " + this.props.errors);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    let newTodo = {};

    newTodo.title = document.getElementById('todo-title').value;
    newTodo.body = document.getElementById('todo-body').value;
    newTodo.done = false;

    console.log(newTodo);
    this.props.createTodo(newTodo);
  }

  render() {
    return (
      <form className="todo-form">
        <h3>Add a New Task</h3>

        <ul>
          {this.props.errors.forEach((error) => <li>error</li>)}
        </ul>

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
