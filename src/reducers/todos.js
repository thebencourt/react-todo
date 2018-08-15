import {
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  RESET_ACTIVE_TODO,
  RESET_TODOS_SUCCESS,
  RESET_TODOS_ERROR,
} from '../actionTypes';

const initialState = {
  activeTodo: null,
  error: null,
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        error: null,
        todos: action.data,
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,
        activeTodo: action.data,
        error: null,
      };

    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.data.id
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      };

    case RESET_ACTIVE_TODO:
      return {
        ...state,
        activeTodo: null,
      };
    
    case RESET_TODOS_SUCCESS:
      return {
        ...state,
        error: null,
        todos: action.data,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        error: null,
        todos: [...state.todos, action.data],
      };
    
    case GET_TODOS_ERROR:
    case GET_TODO_ERROR:
    case ADD_TODO_ERROR:
    case TOGGLE_TODO_ERROR:
    case RESET_TODOS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default todos;