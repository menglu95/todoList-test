let nextTodoId = 0;

const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    completed: false,
    text
  }
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
}