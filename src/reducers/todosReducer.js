import * as actions from '../actions/todosActions';

export const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_TODOS_PENDING:
    case actions.ADD_TODO_PENDING:
    case actions.DELETE_TODO_PENDING:
    case actions.COMPLETE_TODO_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.FETCH_TODOS_SUCCESS:
      return {
        todos: action.payload,
        loading: false,
        error: null,
      };
    case actions.FETCH_TODOS_ERROR:
      return {
        todos: [],
        loading: false,
        error: action.payload,
      };
    case actions.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [action.payload, ...state.todos],
      };
    case actions.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case actions.COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case actions.ADD_TODO_ERROR:
    case actions.DELETE_TODO_ERROR:
    case actions.COMPLETE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const todosSelector = (state) => state.todos;

export default todoReducer;
