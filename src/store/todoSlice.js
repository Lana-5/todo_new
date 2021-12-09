import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [], status: null, error: null },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleTodo.completed = !toggleTodo.completed;
    },
    // setTodos(state, action) {
    //   state.todos = action.payload.todos;
    // },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, setTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

// thunks

// export const fetchTodos = () => async (dispatch) => {
//   const response = await fetch(
//     " https://jsonplaceholder.typicode.com/todos?_limit=10"
//   );
//   const data = await response.json();
//   dispatch(setTodos({ todos: data }));
// };
