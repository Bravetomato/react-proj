import React, { useState, useRef } from "react";

import "./App.css";

// 할일 입력 form 만들기 
function NewTodoForm({todosState}) {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // 입력값 양 옆 여백 동일하게 주기.
    form.content.value = form.content.value.trim();

    // 입력값이 없을 때 경고창 띄우기.
    if( form.content.value.length === 0) {
      alert("write your todo");
      form.content.focus();
      // 커서 위치
      return;
    }

    // 입력값이 있다면 
    // 입력 후 '' 즉 빈칸으로 만들어 주고
    // 커서 위치
    todosState.addTodo(form.content.value);
    form.content.value = '';
    form.content.focus();
  }

  return(
  <form onSubmit={onSubmit}>
    <input name="content" type="text" placeholder="write your todo" autoComplete="off" />
    <input type="submit" value="Add" />
    <input type="reset" value="delete" />
    {/* type="submit" : button 과 같다 */}
    {/* type="reset" : 취소 버튼 */}
  </form>
 );
}

function TodoApp({todosState}) {
  return(
  <>
  {/* NewTodoForm 을 받아준다. */}
  <NewTodoForm todosState={todosState} />
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
    const newTodos = todos.map((todo, _index) => _index !== index ? todos : {...todo, content: newContent });
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index !== index);
    setTodos(newTodos);
  };

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