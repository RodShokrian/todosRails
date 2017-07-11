import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
// todos, receiveTodo, removeTodo
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map (
            todo =>
            <TodoListItem todo={todo} key={todo.id}
              receiveTodo={this.props.receiveTodo}
              removeTodo={this.props.removeTodo} />
          )}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}

export default TodoList;
