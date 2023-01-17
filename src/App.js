import React, { useState, useRef } from "react";

import "./App.css";

// crud : update. 수정
function App() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
  // id 값 1씩 증가시키기

    const newTodo = {
      id,
  //  id 값 1씩 증가시키기 위해 비워둠. 
      content: newContent,
      regDate: "2023-01-17 12:12:12"
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }; 

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    // todos의 index를 확인하여 기존 index와 선택된 index가 다를 때 거른다. 
    // 다른 index 삭제, 같은 index 남김. 
    setTodos(newTodos);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) => _index != index ? todos : {...todo, content: newContent});
    setTodos(newTodos);
  };

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

export default App;