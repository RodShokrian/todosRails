export const getTodos = () => {
  return $.ajax({
    url: 'api/todos',
    type: 'GET'
  });
};

export const addTodo = todo => {
  return $.ajax({
    url: 'api/todos',
    type: 'POST',
    data: {todo}
  });
};
