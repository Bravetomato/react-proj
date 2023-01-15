import React, { useState } from "react";

import "./App.css";

// crud : create. 추가
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const newTodos = [...todos, todos.length + 1];
    setTodos(newTodos);
  }
  // newTodo는 배열값에 +1 씩 증가하고, 이 값을 setTodos가 받는다.
  // 이를 addTodo라는 변수에 넣는다. 

  const onClick = () => {
    // const newTodos = [...todos, todos.length + 1];
    // setTodos(newTodos);

    addTodo(todos.length + 1);
    //addTodo라는 변수를 만들어 todos의 길이에 +1 되도록.
  }

  return(
  <>
  <button onClick={onClick}>{JSON.stringify(todos)}</button>
  {/* click 시에 배열에 숫자가 추가된다. */}
  {/* stringify : js 문법을 문자열로 반환해준다. ()안에는 반환할 값을 넣어준다. 숫자, 배열, 문자 등을 넣을 수 있다.  */}
  </>
  );
}

export default App;

