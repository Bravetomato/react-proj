import Notice from "./Notice";
import React, { useState, useEffect, useRef } from "react";

import "./App.css";
// App : 부모컴포넌트 Sub : 자식컴포넌트
// 부모가 리렌더링되면 자식도 리렌더링된다
// 그러나 자식이 리렌더링 되었을 때 부모는 리렌더링되지 않음.

let SubCallCount = 0;
let AppCallCount = 0;

function Sub({ appNo }) {
  SubCallCount++;
  console.log(`Sub가 ${SubCallCount}번 실행!`);
  const [no, setNo] = useState(0);

  // useEffect, 의존성 배열 인자 실험
  useEffect(() => {
    console.log("effect 1 : 단 한 번 실행");
  }, []);

  useEffect(() => {
    console.log("effect 2 : 부모(App)의 appNo가 바뀔 때 마다 실행");
  }, [appNo]);

  useEffect(() => {
    console.log("effect 3 : 나(Sub)의 no가 바뀔 때 마다 실행");
  }, [no]);

  useEffect(() => {
    console.log("effect 4 : appNo 또는 no가 변경될 때 마다 실행");
  }, [appNo, no]);

  useEffect(() => {
    console.log("effect 5 : 매번 실행");
  });

  return (
    <>
      <div style={{ border: "10px solid blue" }}>
        App no : {appNo}
        <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
      </div>
    </>
  );
}

function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행!`);
  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{ border: "10px solid red" }}>
        <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
        <hr />
        <Sub appNo={no} />
        {/* Sub에 App no 값 넘겨주기*/}
      </div>
    </>
  );
}

export default App;
