import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/inputField";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
