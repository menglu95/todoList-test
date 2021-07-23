import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

const CompleteList = () => {
  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const editItem = e => {
    console.log('editItem');
    const currentId = Number(e.target.id);
    editableIds.includes(currentId) ?
      setEditableIds(editableIds.filter(item => item !== currentId)) :
      setEditableIds([...editableIds, currentId]);
  }

  const delItem = e => {
    const currentId = Number(e.target.id);
    dispatch(allActions.todoActions.delTodo(currentId));
  }

  const handleEditChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    console.log("id", id, "value", value);
    dispatch(allActions.todoActions.updateTodo(Number(id), value));
  }

  const notCompletedItem = e => {
    const id = e.target.id;
    console.log('id', id, e.target.checked)
    // e.target.checked = true;
    dispatch(allActions.todoActions.completedTodo(Number(id)));
  }

  const [editableIds, setEditableIds] = useState([]);

  return (
    <>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        {todoList.length !== 0 &&
          todoList.filter(item => item.complete).map((item, idx) => {
            return (
              <li key={idx} className={editableIds.includes(idx) ? "editMode" : ""}>
                <input id={item.id} type="checkbox" onChange={notCompletedItem} checked={item.complete}></input>
                <label>{item.text}</label>
                <input id={item.id} type="text" defaultValue={item.text} onChange={handleEditChange}></input>
                <button id={idx} className="edit" onClick={editItem}>Edit</button>
                <button id={item.id} className="delete" onClick={delItem}>Delete</button>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default CompleteList;