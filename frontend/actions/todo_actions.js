import { getTodos, addTodo } from '../util/todo_api_util';
import { makeTodo } from '../reducers/selectors';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = todo => (
  {
    type: RECEIVE_TODO,
    todo
  }
);

export const removeTodo = todo => (
  {
    type: REMOVE_TODO,
    todo
  }
);

export const fetchTodos = () => (
  (dispatch) => getTodos().then((todos) => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => (
  dispatch => addTodo(todo)
  .then( (createdTodo) => dispatch(receiveTodo(makeTodo(createdTodo))),
        (errors) => dispatch(receiveErrors(errors.responseJSON)) )
);

window.fetchTodos = fetchTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.createTodo = createTodo;
