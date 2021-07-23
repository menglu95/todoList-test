import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

const TodoList = () => {
  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const editItem = e => {
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
    dispatch(allActions.todoActions.updateTodo(Number(id), value));
  }

  const handleCompletedChange = e => {
    const id = e.target.id;
    e.target.checked = false;
    dispatch(allActions.todoActions.completedTodo(Number(id)));
  }

  const [editableIds, setEditableIds] = useState([]);

  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {todoList.length !== 0 &&
          todoList.filter(item => !item.complete).map((item, idx) => {
            return (
              <li key={idx} className={editableIds.includes(idx) ? "editMode" : ""}>
                <input id={item.id} type="checkbox" onChange={handleCompletedChange}></input>
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

export default TodoList;