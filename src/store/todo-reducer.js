import { createStore } from "redux";

let initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE":
      const deletedTodo = state.todos.filter(
        (_, index) => index + 1 != action.payload
      );
      return {
        ...state,
        todos: deletedTodo,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
