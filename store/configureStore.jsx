import { createStore, combineReducers, compose } from 'redux';
import { todosReducer } from '../reducers/reducers.jsx';

export const configure = () => {
  const reducer = combineReducers({
    todos: todosReducer
  });

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
