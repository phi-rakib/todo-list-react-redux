import React from "react";
import { useDispatch } from "react-redux";
import { todoComplete } from "../actions/todosActions";

const CompleteTodo = ({ todo }) => {
  const { id, completed } = todo;
  const dispatch = useDispatch();

  const completeTodo = (id, todo) => {
    dispatch(todoComplete(id, todo));
  };

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => completeTodo(id, todo)}
    />
  );
};

export default CompleteTodo;
