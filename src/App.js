import React, { useState, useRef } from "react";

import "./App.css";

// 자식이 커스텀상태 구조 분해하지 않고 바로 사용
function TodoApp({todosState}) {
  const onBtnAddTodoClick = () => {
    todosState.addTodo("Hello");
  };

  const onBtnRemoveTodoClick = () => {
    todosState.removeTodo(1);
  };

  const onBtnModifyTodoClick = () => {
    todosState.modifyTodo(1, "lol");
  };
  return(
  <>
   <button onClick={onBtnAddTodoClick}>Add</button>
   <button onClick={onBtnRemoveTodoClick}>Remove</button>
   <button onClick={onBtnModifyTodoClick}>Modify</button>

   <hr />
   <ul>
     {todosState.todos.map((todo, index) => (
      <li key={index}>
        {todo.id} {todo.content} {todo.regDate}
      </li>
     ))}
   </ul>
  </>
  );
}

// 커스텀 훅
function useTodosState() {
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

  // return 으로 addTodo, removeTodo, modifyTodo, todos 받음.
  return {
    addTodo, removeTodo, modifyTodo, todos
  }
}


function App() {
  const todosState = useTodosState();

  return(
  <>
  <TodoApp
  todosState={todosState} />
  </>
  );
}

export default App;