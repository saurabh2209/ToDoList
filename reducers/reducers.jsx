import uuid from 'node-uuid';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  items: [],
});

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TODOS':
      return state.set('items',fromJS(action.todos))

    default:
     return state;
  }
};
