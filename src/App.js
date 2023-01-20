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
      <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
        {/* mt-4 : margin top 4. px-4 : padding 4 */}
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
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo) => (
            <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <Chip label={`Number : ${todo.id}`} className="!pt-1"variant="outlined" />
                {/* ! : 앞에 느낌표를 사용하면 우선순위로 적용된다.*/}
                <Chip label={todo.regDate} variant="outlined" className="!pt-1" color="primary" />
              </div>
              <div className="flex shadow mt-4 round">
                <Button className="bg-red-500 flex-shrink-0 !items-start !rounded-[20px_0_0_20px]">
                {/* items-start : checked 라는 글자를 상단에 위치시키기 위해서*/}
                {/* rounded-[20px_0_0_20px] : 모서리 둥글게. 시계방향대로 4군데. _를 사용해 각 모서리 구분. */}
                {/* ! : 우선순위로 적용시키기 위해 사용*/}
                  <span>checked</span>
                </Button>
              <div className="bg-pink-500 mt-a p-10 flex-grow whitespace-pre-wrap leading-normal">
              {todo.content}</div>
                <div className="bg-blue-500 w-[150px] flex-shrink-0">after</div>
              </div>
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