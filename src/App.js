import React, { useState, useRef, useEffect } from "react";
import { Button, AppBar, Toolbar, TextField, ThemeProvider, CssBaseline, createTheme, Chip, Drawer } from '@mui/material/';
import { ClassNames } from "@emotion/react";

//option 클릭하면 drawer 나오도록
function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date())
    };

    setTodos((todos) => [newTodo, ...todos]);
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

function NewTodoForm({ todosState }) {
  const onSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target;
  
    form.content.value = form.content.value.trim();
  
    if (form.content.value.length == 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();
  
      return;
    }
  
    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return(
  <>
   <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
      <TextField
        minRows={3}
        maxRows={10}
        multiline
        autoComplete="off"
        name="content"
        type="text"
        label="할일을 입력해주세요." 
        variant="outlined"
      />
      <Button type="submit" variant="contained">Add</Button>
      </form>
  </>);
}

function TodoListItem({ todo, setOptionDrawerTodoId }) {
  return(
  <>
  <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <Chip label={`Number : ${todo.id}`} className="!pt-1"variant="outlined" />
                <Chip label={todo.regDate} variant="outlined" className="!pt-1" color="primary" />
              </div>
              <div className="flex shadow mt-4 round">
                <Button className="flex-shrink-0 !items-start !rounded-[20px_0_0_20px]">
                  <span className="text-3x1 text-[#c23ae8] ">
                    <i className="fa-solid fa-check" />
                    </span>
                </Button>
              <div className="flex-shrink-0 w-[2px] bg-[#1da836] my-5 mr-1"></div>
              <div className="mt-1 p-10 flex-grow whitespace-pre-wrap leading-relaxed mt-1 flex itmes-center">
              {todo.content}</div>
              {/* option 버튼: 클릭시 해당 번호 드로우 열림.  */}
                <Button 
                onClick={() => setOptionDrawerTodoId(todo.id)}
                className="w-[150px] flex-shrink-0 !items-start !rounded-[0_20px_20px_0]">
                  <span className="text-3x1 text-[#97ad36]">
                  <i className="fa-solid fa-bars" />
                  </span>
                </Button>
              </div>
            </li>
  </>
 );
}

function TodoList({ todosState }){
  const [optionDrawerTodoId, setOptionDrawerTodoId] = useState(null);
  return(
  <>
      <Drawer 
       anchor={"bottom"} 
       open={optionDrawerTodoId !== null} 
       onClose={() => {setOptionDrawerTodoId(null)}}>
        <div className="p-10">{optionDrawerTodoId}번 Option Drawer</div>
      </Drawer>
      {/* optionDrawerTodoId가 null이 아닐때는 drawer가 open
      setOptionDrawerTodoId가 null일 때는 close  */}
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} setOptionDrawerTodoId={setOptionDrawerTodoId}/>
          ))}
        </ul>
      </div>
  </>
 );
}


function App() {
  const todosState = useTodosState();

  useEffect(() => {
    todosState.addTodo("운동\n데드리프트\n유산소\n스트레칭");
    todosState.addTodo("요리");
    todosState.addTodo("공부");
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target;
  
    form.content.value = form.content.value.trim();
  
    if (form.content.value.length == 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();
  
      return;
    }
  
    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
    <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold">Todo list</span>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <NewTodoForm todosState={todosState}/>
      <TodoList todosState={todosState}/>
    </>
  );
}

// 유틸리티
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };

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

function ROOT() {
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["GmarketSansMedium"]
  },
  palette: {
    primary: {
      main: "#ff8686",
      contrastText: "#ffffff"
    }
  }
});
return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
 );
}
export default App;