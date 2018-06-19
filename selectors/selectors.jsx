import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos

export const makeSelectTodoItems = () => createSelector(
  selectTodos,
  (todosState) => todosState.get('items').toJS() 
);
