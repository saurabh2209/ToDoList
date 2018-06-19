import "regenerator-runtime/runtime";
import { createStore, combineReducers, compose, applyMiddleware  } from 'redux';
import { todosReducer } from '../reducers/reducers.jsx';
import rootSaga from '../sagas/sagas.js'
import createSagaMiddleware from 'redux-saga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const configure = () => {
  const reducer = combineReducers({
    todos: todosReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(
      applyMiddleware(sagaMiddleware)
      ));

   sagaMiddleware.run(rootSaga);

  return store;
};
