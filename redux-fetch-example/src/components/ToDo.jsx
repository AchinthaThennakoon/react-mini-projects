import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/todoSlicer";

const ToDo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  console.log(todos);
  return (
    <div>
      {todos.isLoading ? (
        <p>Data still loading</p>
      ) : todos.data ? (
        todos.data.map((todo) => (
          <p key={todo.id}>{todo.title}</p> // Added unique key prop
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ToDo;
