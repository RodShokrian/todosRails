export const allTodos = ({ todos }) => {
  return Object.keys(todos).map((id) => todos[id]);
};

export const makeTodo = todo => {
  const wrappedTodo = {};
  wrappedTodo[todo.id] = todo;
  return wrappedTodo;
};
