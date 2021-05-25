import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions/todosActions";
import AddTodo from "../components/AddTodo";
import { todosSelector } from "../reducers/todosReducer";
import ListTodo from './../components/ListTodo';

const TodoPage = () => {
  const { loading, error } = useSelector(todosSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <AddTodo />
      {error}
      {loading && "loading..."}
      <ListTodo />
    </>
  );
};

export default TodoPage;
