import React, { useState } from "react";

import "./App.css";

// crud 
// 객체를 추가하기
function App() {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const addTodo = (newContent) => {
    const id = lastTodoId + 1;
    setLastTodoId(id);
  // id 값 1씩 증가시키기
  // addTodo는 newContent에 Hello를 받는다. 
  // id 값을 1씩 증가시키기 위해 useState로 lastTodoId, setLastTodoId 를 선언하고,
  // const id 를 만들어 setLastTodoId() 에 id를 받는다.

    const newTodo = {
      id,
  //  id 값 1씩 증가시키기 위해 비워둠. 
      content: newContent,
      regDate: "2023-01-17 12:12:12"
    };
  // newTodo라는 객체를 만들고, 안에 id, content, regDate 값을 넣었다. 

    const newTodos = [...todos, newTodo];
    // ...todos : 이미 보여진 할일, newTodo : 새로운 할일.
    setTodos(newTodos);
  };

    const onBtnAddTodoClick = () => {
      addTodo("Hello");
      // AddTodo는 Hello를 받는데, AddTodo를 선언해줘야함.
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