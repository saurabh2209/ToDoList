
export const showCompleted = (id) => {
  return {
    type: 'SHOW_COMPLETED',
    id
  };
};

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
};
