const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.completed,
          text: action.text
        }
      ];
    case "DEL_TODO":
      return state.filter(
        todo => todo.id !== action.id
      );
    case "UPDATE_TODO":
      return state.map(
        todo => todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "COMPLETED_TODO":
      return state.map(
        todo => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};
export default todos;
