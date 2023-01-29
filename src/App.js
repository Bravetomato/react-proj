import React, { useState, useRef, useEffect, useMemo } from "react";
import { Button, AppBar, Toolbar, TextField, ThemeProvider, CssBaseline, 
  createTheme, Chip, SwipeableDrawer, List, ListItem, ListItemButton, Modal, Snackbar, Alert as MuiAlert,} from '@mui/material/';
import ClassNames from "@emotion/react";

// 스낵바
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert {...props} ref={ref} variant="filled" />;
});

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

    return id;
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };

  const modifyTodoById = (id, newContent) => {
    const index = findTodoIndexById(id);

    if( index == -1 ) {
      return;
    }
    modifyTodo(index, newContent);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  const removetodoById = (id) => {
    const index = findTodoIndexById(id);
    return removeTodo(index);
  }

  const findTodoIndexById = (id) => {
    return todos.findeIdex((todo) => todo.id == id);
  }

  const findTodoById = (id) => {
    const index = findTodoIndexById(id);

    if ( index == -1) {
      return null;
    }

    return todos[index];
  }

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
    removetodoById,
    findTodoById,
    modifyTodoById,
  };
}

function NewTodoForm({ todosState, noticeSnackbarState }) {
  const onSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target;
  
    form.content.value = form.content.value.trim();
  
    if (form.content.value.length == 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();
  
      return;
    }
  
    const newTodoId = todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
    noticeSnackbarState.open(`${newTodoId}번 할 일이 추가되었습니다.`);
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

function TodoListItem({ todo, index, openDrawer }) {
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
                <Button 
                onClick={() => openDrawer(todo.id)}
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

// drawer 기능만 모은 커스텀 훅. 
function useTodoOptionDrawerState() {
  const [todoId, setTodoId] = useState(null);
  const opened = useMemo(() => todoId !== null, [todoId]);
  const closed = () => setTodoId(null);
  const open = (id) => setTodoId(id);

  return {
    todoId,
    opened,
    closed,
    open,
  }; 
}

// 드로우 수정 모달창 form
function EditTodoModal({ state, todo, todosState, closeDrawer, noticeSnackbarState }) {
  const close = () => { 
    state.close();
    closeDrawer();
  }

  const onSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target;
  
    form.content.value = form.content.value.trim();
  
    if (form.content.value.length == 0) {
      alert("수정된 할 일을 입력해주세요.");
      form.content.focus();
      return;
    }

    // form에 새롭게 입력한 수정된 할일을 넘겨준다.
    todosState.modifyTodoById(todo.id, form.content.value);
    close();
    noticeSnackbarState.open(`${todo.id}번 할 일이 수정되었습니다.`);
  };

  return (
  <>
        {/* 수정기능 구현-modal */}
   <Modal open={state.opened} 
          onClose={close} 
          className="flex justify-center items-center">
        <div className="bg-white p-10 rounded-[20px]">
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
            defaultValue={todo?.content}
          />
      <Button type="submit" variant="contained">수정</Button>
      </form></div>
      </Modal>
  </>
 );
}

function useEditTodoMadalState() {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
  }

  const close = () => {
    setOpened(false);
  }

  return {
    opened,
    open,
    close
  };
}

function TodoOptionDrawer({ state, todosState, noticeSnackbarState }) {
  const editTodoMadalState = useEditTodoMadalState();
  // 할일을 삭제하기 전에 물어보기.
  // confirm 기능 활용 : aler처럼 창이 뜨는데 확인/취소 버튼이 있다.
  // 확인은 true, 취소는 false.
  // 리액트에서는 window.confirm 이라고 해야 함. 
  const removeTodo = () => {
    if( window.confirm(`${state.todoId}번 할 일을 삭제하겠습니까?`) == false) {
      state.close();
      return;
    }

    todosState.removeTodoById(state.todoId);
    state.close();
    noticeSnackbarState.open(`${todo.id}번 할 일이 삭제되었습니다.`);
  };
  const todo = todosState.findTodoById(state.todoId);

  return(
    <>
     <EditTodoModal state={editTodoMadalState} todo={todo} 
     noticeSnackbarState={noticeSnackbarState}
     todosState={todosState} closeDrawer={state.close}/>
      <SwipeableDrawer 
       anchor={"bottom"} 
       onOpen={() => {}}
       open={state.opened} 
       onClose={state.closed}>
        <List className="!py-0">
          <ListItem className="!pt-5 !p-5">
            <span className="text-[#97ad36]">{state.todoId}번</span> 
            <span>&nbsp;</span>
            <span>Option Drawer</span></ListItem>
          <ListItemButton className="!pt-5 !p-5 !items-baseline" onClick={editTodoMadalState.open}>
            <i className="fa-regular fa-pen-to-square" />
            &nbsp;<span>수정</span></ListItemButton>
          <ListItemButton className="!pt-5 !p-5 !items-baseline" onClick={removeTodo}>
            <i className="fa-solid fa-trash" />
            &nbsp;<span>삭제</span></ListItemButton>
        </List>
      </SwipeableDrawer>
      </>
      );
}

function TodoList({ todosState, noticeSnackbarState }){
  const todoOptionDrawerState = useTodoOptionDrawerState();

  return(
  <>
      <TodoOptionDrawer state={todoOptionDrawerState} todosState={todosState} noticeSnackbarState={noticeSnackbarState}/>
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo, index) => (
            <TodoListItem key={todo.id} todo={todo} index={index}
            noticeSnackbarState={noticeSnackbarState}
            todosState={todosState}
            openDrawer={todoOptionDrawerState.open}/>
          ))}
        </ul>
      </div>
  </>
 );
}

// snackbar 커스텀 훅
function useNoticeSnackbarState() {
  const [opened, setOpened] = useState(false);
  const [autoHideDuration, setAutoHideDuration] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [msg, setMsg] = useState(null);

  const open = (msg, severity="sucess", autoHideDuration=6000) => {
    setOpened(true);
    setAutoHideDuration(autoHideDuration);
    setSeverity(severity);
    setMsg(msg);
  };
  
  const close = () => {
    setOpened(false);
  }

  return {
    opened,
    autoHideDuration,
    severity,
    msg,
    open,
    close,
  };
}

// snackbar 컴포넌트
function NoticeSnackbar({ state }) {
  return(
   <>
        <Snackbar
        open={state.open}
        autoHideDuration={state.autoHideDuration}
        onClose={state.close}
      ><Alert severity={state.severity}>{state.msg}</Alert>
      </Snackbar>
   </>
  );
}

function App() {
  const todosState = useTodosState();
  const noticeSnackbarState = useNoticeSnackbarState();

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
    <AppBar position="static">
        <Toolbar>
          <div className="justify-center"></div>
          <span className="font-bold">Todo list</span>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <NoticeSnackbar state={noticeSnackbarState} />
      <NewTodoForm todosState={todosState} noticeSnackbarState={noticeSnackbarState}/>
      <TodoList todosState={todosState} noticeSnackbarState={noticeSnackbarState}/>
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