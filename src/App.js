import Notice from "./Notice";
import React, { useState, useEffect, useRef } from "react";

import "./App.css";

let AppCallCount = 0;

function App() {
  // useEffect(() => {
  //   AppCallCount++;
  //   console.log(`App이 ${AppCallCount}번 실행됨.`);
  // }, []);
  // [] : 한번만 실행 }); : 계속 실행.
  const inputAgeRef = useRef(null);
  const inputNameRef = useRef(null);
  const [no, setNo] = useState(0);

  // useEffect를 통해 이름입력창에 커서 자동으로 설정하기.
  // setTimeout(() => inputNumberRef.current.focus(), 100); 아래 useEffect와 같은 기능 작동.
  useEffect(() => {
    inputNameRef.current.focus();
  });

  return (
    <>
      <input ref={inputNameRef} type="text" placeholder="이름" />
      <input ref={inputAgeRef} type="number" placeholder="나이" />
      <button
        onClick={() => {
          setNo(no + 1);
          inputAgeRef.current.focus();
        }}
      >
        증가 : {no}
      </button>
    </>
  );
}

export default App;
