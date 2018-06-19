
export const showCompleted = (id) => {
  return {
    type: 'UPDATE_TODO',
    id
  };
};

export const showTodos = (todos) => {
  return {
    type: 'SHOW_TODOS',
    todos
  };
};

export const loadTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
};
