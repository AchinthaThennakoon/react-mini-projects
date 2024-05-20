import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoAction, removeToDoAction } from "../actions/ToDoActions";

const MainComponent = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    if (todo === "") {
      return;
    }

    e.preventDefault();
    dispatch(addToDoAction(todo));
    setTodo("");
  };

  const handleDelete=(todo)=>{
    dispatch(removeToDoAction(todo));
  }

  return (
    <>
      <div class="container">
        <h1>ToDo List</h1>

        <form class="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            id="newToDo"
            placeholder="Enter your todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input type="submit" id="addBtn" />
        </form>

        <ul id="todolist">
          {todos &&
            todos.map((todo) => (
              <li id={todo.id}>
                <span>{todo.todo}</span>
                <button className="delete-todo-btn" onClick={()=>handleDelete(todo.id)}>X</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MainComponent;
