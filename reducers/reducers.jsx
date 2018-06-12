import uuid from 'node-uuid';

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          title: action.text,
          description: '',
          completed: false,
        }
      ];

    case 'REMOVE_TODO':
     return state.filter((item) => {
          return item.id !== action.id

      });

    case 'SHOW_COMPLETED':
     return state.map((item) => {
             if(item.id === action.id ) {
               item.completed = true
             }
             return item
        })

    default:
     return state;
  }
};
