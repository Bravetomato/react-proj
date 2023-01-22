import React, { useState, useRef } from "react";

import "./App.css";

// 입력된 할일을 보여주는 코드를 Todolist 과 TodoItem으로 나누기
// <ul> 부분이 list. <li> 부분이 item

function TodoListItem({todo, index}) {
  return(
   <li key={index}>
    {todo.id} {todo.regDate} {todo.content}
    </li>
 );
}

function TodoList({todosState}) {
  return(
  <ul>
    {todosState.todos.map((todo, index) => (
    // <li key={index}>
    // {todo.id} {dateToStr(todo.regDate)} {todo.content}
    // </li>
    // 위의 li들을 TodolistItems로 다시 한번 분리해준다
      <TodoListItem key={todo.id} todo={todo} index={index}/>
     ))}
  </ul>
 );
}

function NewTodoForm({todosState}) {
  const onSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    form.content.value = form.content.value.trim();
    
    if ( form.content.value.length == 0 ) {
      alert('Write your todo!');
      form.content.focus();
      
      return;
    }
    
    todosState.addTodo(form.content.value);
    form.content.value = '';
    form.content.focus();
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input autoComplete="off" name="content" type="text" placeholder="Write your todo" />
      <input type="submit" value="Add" />
      <input type="reset" value="Reset" />
    </form>
  );
}

function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoForm todosState={todosState} />
      <hr />
      {/* 아래는 입력된 할일 리스트를 보여주는 부분 */}
      {/* 이 부분을 나누어 보도록 한다 */}
      {/* <ul>
        {todosState.todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {dateToStr(todo.regDate)} {todo.content}
          </li>
        ))}
      </ul> */}
      <TodoList todosState={todosState}/>
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
      regDate: new Date()
      // new Date() : 현재 날짜, 시간 표시를 해주는 함수.
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo
  };
}

function App() {
  const todosState = useTodosState();

  return (
    <>
      <TodoApp todosState={todosState} />
    </>
  );
}

// 유틸리티
// 날짜 객체 입력받아서 문장(yyyy-mm-dd hh:mm:ss)으로 반환한다.
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  }

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}

export default App;