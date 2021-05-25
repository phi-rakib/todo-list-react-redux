import axios from "axios";

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const ADD_TODO_PENDING = "ADD_TODO_PENDING";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";
export const DELETE_TODO_PENDING = "DELETE_TODO_PENDING";
export const COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS";
export const COMPLETE_TODO_ERROR = "COMPLETE_TODO_ERROR";
export const COMPLETE_TODO_PENDING = "COMPLETE_TODO_PENDING";

export const fetchTodosPending = () => ({ type: FETCH_TODOS_PENDING });
export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});
export const fetchTodosError = (error) => ({
  type: FETCH_TODOS_ERROR,
  payload: error,
});

export const addTodoPending = () => ({ type: ADD_TODO_PENDING });
export const addTodoSuccess = (todos) => ({
  type: ADD_TODO_SUCCESS,
  payload: todos,
});
export const addTodoError = (error) => ({
  type: ADD_TODO_ERROR,
  payload: error,
});

export const deleteTodoPending = () => ({ type: DELETE_TODO_PENDING });
export const deleteTodoSuccess = (todos) => ({
  type: DELETE_TODO_SUCCESS,
  payload: todos,
});
export const deleteTodoError = (error) => ({
  type: DELETE_TODO_ERROR,
  payload: error,
});

export const completeTodoPending = () => ({ type: COMPLETE_TODO_PENDING });
export const completeTodoSuccess = (todos) => ({
  type: COMPLETE_TODO_SUCCESS,
  payload: todos,
});
export const completeTodoError = (error) => ({
  type: COMPLETE_TODO_ERROR,
  payload: error,
});

export function getTodos() {
  return async (dispatch) => {
    dispatch(fetchTodosPending());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosError(error.message));
    }
  };
}

export function createTodo(todo) {
  return async (dispatch) => {
    dispatch(addTodoPending());
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      dispatch(addTodoSuccess(response.data));
    } catch (error) {
      dispatch(addTodoError(error.message));
    }
  };
}

export function todoDelete(id) {
  return async (dispatch) => {
    dispatch(deleteTodoPending());
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      dispatch(deleteTodoSuccess(id));
    } catch (error) {
      dispatch(deleteTodoError(error.message));
    }
  };
}

export function todoComplete(id, todo) {
  return async (dispatch) => {
    try {
      dispatch(completeTodoPending());
      todo.completed = !todo.completed;
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, todo);
      dispatch(completeTodoSuccess(todo));
    } catch (error) {
      dispatch(completeTodoError(error.message));
    }
  };
}
