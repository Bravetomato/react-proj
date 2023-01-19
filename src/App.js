import React, { useState, useRef, useEffect } from "react";
import { Button, AppBar, Toolbar, TextField, ThemeProvider, CssBaseline, createTheme, Chip, Box } from '@mui/material/';

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

    // setTodos((todos) => [...todos, newTodo]);
    setTodos((todos) => [newTodo, ...todos]);
    // 최신글부터 보이도록
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

  useEffect(() => {
    todosState.addTodo("운동 데드리프트 유산소 스트레칭");
    todosState.addTodo("요리");
    todosState.addTodo("공부");
  }, []);
  // useEffect 사용해 addTodo에 운동, 요리, 공부를 추가함.
  // [] : 빈배열을 넣어 운동, 요리, 공부가 한번씩만 나타나도록. 빈배열 쓰지않으면 무한대로 나타남.

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
      <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
        {/* mt-4 : margin 4. px-4 : padding 4 */}
      <TextField
        minRows={3}
        maxRows={10}
        multiline
        // multiline : enter 입력시 입력창 줄바꿈
        // minRows : 최소 줄. maxRows : 최대 줄. {}안에 숫자를 넣어준다.
        autoComplete="off"
        name="content"
        type="text"
        label="할일을 입력해주세요." 
        // label : placeholder의 역할
        variant="outlined"
      />
      <Button type="submit" variant="contained">Add</Button>
      </form>
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo) => (
            <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <Chip label={`Number : ${todo.id}`} className="!pt-1"variant="outlined" />
                {/* ! : 앞에 느낌표를 사용하면 우선순위로 적용된다.*/}
                <Chip label={todo.regDate} variant="outlined" className="!pt-1" color="primary" />
              </div>
              <div className="mt-a p-10 shadow rounded-[20px]" whitespace-pre-wrap leading-normal>
              <Box
                sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                }} 
              > {todo.content} </Box></div>
              {/* whitespace-pre-wrap : 자동 줄바꿈. 공백을 코드에 있는 그대로 표시.*/}
              {/* leading-normal : 행간 정렬*/}
            </li>
          ))}
        </ul>
      </div>
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