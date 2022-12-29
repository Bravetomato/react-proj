import Notice from "./Notice";
import React, { useState, useEffect, useRef } from "react";

import "./App.css";

let SubCallCount = 0;
let AppCallCount = 0;

function Sub() {
  SubCallCount++;
  console.log(`Sub가 ${SubCallCount}번 실행!`);
  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{ border: "10px solid blue" }}>
        <button onClick={() => setNo(no + 1)}>증가 : {no}</button>
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
        <button onClick={() => setNo(no + 1)}>증가 : {no}</button>
        <hr />
        <Sub />
      </div>
    </>
  );
}

export default App;
