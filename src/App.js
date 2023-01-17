import React, { useState, useRef } from "react";

import "./App.css";

// crud : remove-> filter를 사용한다.
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
  }

    const onBtnAddTodoClick = () => {
      addTodo("Hello");
    };

    const onBtnRemoveTodoClick = () => {
      removeTodo(1);
    };
 
  return(
  <>
   <button onClick={onBtnAddTodoClick}>Add</button>
    {/* 클릭시 onBtnAddTodoClick 가 실행됨.  */}
   <button onClick={onBtnRemoveTodoClick}>Remove</button>

   <hr />
   <ul>
     {todos.map((todo, index) => (
      <li key={index}>
        {todo.id} {todo.content} {todo.regDate}
        {/* key 는 유니크한 값을 받는다 -> index */}
        {/* todo : 위에 만들어 놓은 객체 */}
        {/* 각각 객체의 id, content, regDate */}
      </li>
     ))}
   </ul>
  </>
  );
}

export default App;