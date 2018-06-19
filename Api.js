
import axios from 'axios'

export const getItems = (url) => axios.get(url).then((response) => {
  return response
});

export const postItem = (url, value) => axios.post(url, {title: value}).then((response) => {
  return response
});

export const deleteItemById = (url, id) => axios.delete(`${url}/${id}`).then((response) => {
  return response
});

export const updateItemById = (url, id) => axios.put(`${url}/${id}`).then((response) => {
  return response
});
