import React, { useState, useRef } from "react";

import "./App.css";

// crud 
// 객체를 추가하기-useRef 로 id +1 하기
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

    const onBtnAddTodoClick = () => {
      addTodo("Hello");
    };
 
  return(
  <>
   <button onClick={onBtnAddTodoClick}>Add</button>
   {/* 클릭시 onBtnAddTodoClick 가 실행됨.  */}
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