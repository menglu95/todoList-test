import React from 'react';

const TodoList = () => {
  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">

        <li>
          <input type="checkbox"></input>
          <label>Pay Bills</label>
          <input type="text"></input>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>

        <li className="editMode">
          <input type="checkbox"></input>
          <label>Go Shopping</label>
          <input type="text" defaultValue="Go Shopping"></input>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>

      </ul>
    </>
  );
}

export default TodoList;