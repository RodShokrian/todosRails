export const getTodos = () => {
  return $.ajax({
    url: 'api/todos',
    type: 'GET'
  });
};
