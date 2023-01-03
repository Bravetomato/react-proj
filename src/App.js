import React, { useEffect, useState, useMemo, useCallback } from "react";

import "./App.css";

let SubCallCount = 0;
function Sub({no1, no2, calculateFunc}) {
  SubCallCount++;
  console.log(`SubCallCount : ${SubCallCount}번 실행됨!`);

  return (
    <>
      <div style={{border: "3px solid red"}}>입력 : {no1}, {no2}</div>
      <br/>
      결과{calculateFunc(no1, no2)}
    </>
  );
}

let AppCallCount = 0;

const MemorisedSub = React.memo(Sub);

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}번 실행됨!`);

  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);

  // const calculateFunc = (a, b) => a + b;

  // useCallback
  // [] : 최초 한번만 리랜더링.
  const calculateFunc = useCallback((a, b) => a + b + no1, [no1]);

  return (
    <>
      <div>안녕하세요</div>
      <button onClick={() => setNo1(no1 + 1)}>버튼1 : {no1}</button>
      <hr />
      <button onClick={() => setNo2(no2 + 1)}>버튼2 : {no2}</button>
      <hr />
      <MemorisedSub no1 = {10} no2 = {20} calculateFunc={calculateFunc} />
    </>
  );
}

export default App;
