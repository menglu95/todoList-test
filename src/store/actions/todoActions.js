let nextTodoId = 0;

const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    completed: false,
    text
  }
}

// addTodoAsync thunk
const addTodoAsync = text => dispatch => {
  setTimeout(() => dispatch(addTodo(text)), 2000); // 2s delay
}

const delTodo = id => {
  return {
    type: "DEL_TODO",
    id
  }
}

const updateTodo = (id, text) => {
  return {
    type: "UPDATE_TODO",
    id,
    text
  }
}

const completedTodo = id => {
  return {
    type: "COMPLETED_TODO",
    id
  }
}

export default {
  addTodo,
  delTodo,
  updateTodo,
  completedTodo,
  addTodoAsync
}