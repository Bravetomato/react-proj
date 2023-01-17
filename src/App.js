import React, { useState, useRef } from "react";

import "./App.css";

// UI 컴포넌트와 밀접한 것들은 UI 컴포넌트로 이동
// onBtn~TodoClick 끼리 묶어둠
function TodoApp({addTodo, removeTodo, modifyTodo, todos}) {
  const onBtnAddTodoClick = () => {
    addTodo("Hello");
  };

  const onBtnRemoveTodoClick = () => {
    removeTodo(1);
  };

  const onBtnModifyTodoClick = () => {
    modifyTodo(1, "lol");
  };
  return(
  <>
   <button onClick={onBtnAddTodoClick}>Add</button>
   <button onClick={onBtnRemoveTodoClick}>Remove</button>
   <button onClick={onBtnModifyTodoClick}>Modify</button>

   <hr />
   <ul>
     {todos.map((todo, index) => (
      <li key={index}>
        {todo.id} {todo.content} {todo.regDate}
      </li>
     ))}
   </ul>
  </>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-01-17 12:12:12"
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }; 

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) => _index != index ? todos : {...todo, content: newContent });
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  return(
  <>
  <TodoApp
  addTodo={addTodo} removeTodo={removeTodo} modifyTodo={modifyTodo} todos={todos} />
  </>
  );
}

export default App;