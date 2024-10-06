import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TodoContaier from "./Components/TodoContaier";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const writeTodo = (e) => {
    setinputValue(e.target.value);
  };
  console.log(todo);
  const addTodo = () => {
    if (inputValue != "") {
      setTodo([...todo, inputValue]);
    }
    setinputValue("");
  };

  const deleteTodo = (todoIndex) => {
    // setTodo()
    // todo.filter((todo, index)=>{
    //   return index != todoIndex
    // })

    setTodo((prevTodo) =>
      prevTodo.filter((todo, index) => {
        return index != todoIndex;
      })
    );
  };

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputValue={inputValue}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContaier todo={todo}  deleteTodo={deleteTodo}/>
    </main>
  );
}

export default App;
