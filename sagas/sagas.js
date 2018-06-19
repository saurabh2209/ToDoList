import { put, all, takeLatest, call } from 'redux-saga/effects';
import { showTodos } from '../actions/actions';
import { getItems, postItem, deleteItemById, updateItemById } from '../Api.js';
const API_TASKS_REQUEST_URL = 'https://practiceapi.devmountain.com/api/tasks';

function* fetchItems() {
  try {
   const response = yield call(getItems, API_TASKS_REQUEST_URL);
   yield put(showTodos(response.data));
  }
  catch(error) {
    throw error;
  }
}

export function* addItem(action) {
  try {
   const response = yield call(postItem, API_TASKS_REQUEST_URL, action.title);
   yield put(showTodos(response.data));
  }
  catch(error) {
    throw error;
  }
}

export function* removeItem(action) {
  try {
   const response = yield call(deleteItemById, API_TASKS_REQUEST_URL, action.id);
   yield put(showTodos(response.data));
  }
  catch(error) {
    throw error;
  }
}

export function* completeItem(action) {
  try {
   const response = yield call(updateItemById, API_TASKS_REQUEST_URL, action.id);
   yield put(showTodos(response.data));
  }
  catch(error) {
  throw error;
  }
}


export function* deleteItem() {
    // Watches for REMOVE_TODO action
   // By using `takeLatest` only the result of the latest API call is applied.
   yield takeLatest('REMOVE_TODO', removeItem );
}

export function* loadItem() {
    // Watches for LOAD_TODO action
   // By using `takeLatest` only the result of the latest API call is applied.
   yield takeLatest('ADD_TODO', addItem );
}

export function* updateItem() {
  // Watches for UPDATE_TODO action
  // By using `takeLatest` only the result of the latest API call is applied.
   yield takeLatest('UPDATE_TODO', completeItem );
}

// Saga running in background
export default function* rootSaga() {
  yield all([
    fetchItems(),
    loadItem(),
    deleteItem(),
    updateItem(),
  ])
}
