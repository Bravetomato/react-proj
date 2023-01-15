import React, { useState } from "react";

import "./App.css";

// crud : 삭제, 수정
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const newTodos = [...todos, todos.length + 1];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  }
  // 할일 삭제
  // filter를 통해 선택된 인덱스와 기존 인덱스가 다르다면 남긴다.
  // 즉 선택된 인덱스는 삭제 된다.
  
  const modifyTodo = (index, newTodo) => {
    const newTodos = todos.map((todos, _index) => 
      _index != index ? todos : newTodo
    ); 
    setTodos(newTodos);
  };
  // 할일 수정(편집)
  // map을 통해 할일을 보여준다. 
  // 선택된 인덱스와 기존 인덱스가 같다면 새로운 할일을 보여준다
  // 아니면 기존 할일을 보여준다. 

  const onAddBtnClick = () => {
    addTodo(todos.length + 1);
  };

  const onRemoveBtnClick = () => {
    removeTodo(1);
  };

  const onEditBtnClick = () => {
    modifyTodo(1, "Hello");
  }

  return(
  <>
   <div>{JSON.stringjfy(todos)}</div>
   <button onClick={onAddBtnClick}>Add</button>
   <button onClick={onRemoveBtnClick}>Remove</button>
   <button onClick={onEditBtnClick}>Edit</button>
  </>
  );
}

export default App;