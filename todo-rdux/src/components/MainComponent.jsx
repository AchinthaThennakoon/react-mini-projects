import React from 'react'

const MainComponent = () => {
  return (
    <>
      <div class="container">
        <h1>ToDo List</h1>

        <form class="input-container" onsubmit="return false">
          <input
            type="text"
            name="item"
            id="newToDo"
            placeholder="Enter your todo"
          />
          <input type="submit" id="addBtn" />
        </form>

        <ul id="todolist">
          <li>
            <span>todo 1</span>
            <button className="delete-todo-btn">X</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainComponent