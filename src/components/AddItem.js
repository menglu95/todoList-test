import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions'

const AddItem = () => {
  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const textRef = createRef();

  const addTask = () => {
    const text = textRef.current.value.trim();
    textRef.current.value = "";
    // dispatch(allActions.todoActions.addTodo(text));
    dispatch(allActions.todoActions.addTodoAsync(text));
  }

  return (
    <p>
      <label htmlFor="new-task">Add Item</label>
      <input id="new-task" type="text" ref={textRef}></input>
      <button onClick={addTask}>Add</button>
    </p>
  );
}

export default AddItem;