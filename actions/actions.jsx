export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var showCompleted = (id) => {
  return {
    type: 'SHOW_COMPLETED',
    id
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
};

export var getInitialTodos=function(todos){

return{
  type:'GET_INITIAL_TODOS',
  todos
}


}
