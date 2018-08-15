import { API_BASE_URL } from '../constants';
import {
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  RESET_ACTIVE_TODO,
  SET_FILTER,
  RESET_TODOS_SUCCESS,
  RESET_TODOS_ERROR,
  TOGGLE_ADD_MODAL,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
} from '../actionTypes';

export const getTodos = () => async dispatch => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos`);
    const data = await response.json();
    dispatch({
      type: GET_TODOS_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_ERROR,
      error,
    });
  }
};

export const getTodo = (id = null) => async dispatch => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`);
    const data = await response.json();
    dispatch({
      type: GET_TODO_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODO_ERROR,
      error,
    });
  }
};

export const closeModal = () => ({
  type: RESET_ACTIVE_TODO,
});

export const toggleAddModal = () => ({
  type: TOGGLE_ADD_MODAL,
});

export const toggleTodo = (id, isDone) => async dispatch => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ isDone }),
    });
    const data = await response.json();
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: TOGGLE_TODO_ERROR,
      error,
    });
  }
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});

export const resetTodos = () => async dispatch => {
  try {
    await fetch(`${API_BASE_URL}/reset`, {
      method: 'POST',
    });
    const response = await fetch(`${API_BASE_URL}/todos`);
    const data = await response.json();
    dispatch({
      type: RESET_TODOS_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: RESET_TODOS_ERROR,
      error,
    });
  }
};

export const addTodo = todo => async dispatch => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    dispatch({
      type: ADD_TODO_SUCCESS,
      data,
    });
    dispatch({
      type: TOGGLE_ADD_MODAL,
    });
  } catch (error) {
    dispatch({
      type: ADD_TODO_ERROR,
      error,
    });
  }
};