import React from 'react';

const CompleteList = () => {
  return (
    <>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox" defaultChecked={true}></input>
          <label>See the Doctor</label>
          <input type="text"></input>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default CompleteList;