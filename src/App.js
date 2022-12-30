import React, { useEffect, useState, useMemo } from "react";

import "./App.css";
// 입력한 숫자들 중 소수의 갯수를 구하는 코드

function isPrimeNumber(no) {
  for (let i = 2; i < no; i++) {
    if (i * i > no) {
      break;
    }

    if (no % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];

  for (let i = 2; i <= max; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

// 1~max사이 존재하는 소수 개수 구하기-Reactmemo
function PrimeNosCount({ max }) {
  // 1. useEffect로 최적화
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const count = getPrimeNumbersCount(max);
  //   setCount(count);
  // }, [max]);
  // 위에서 선언한 count에 소수갯수를 넣고, [max] 값이 변할 때만 실행한다.

  // 2. useMemo로 최적화
  const count = useMemo(() => getPrimeNumbersCount(max), [max]);
  // getPrimeNumbersCount(max) : 직전 값
  // [max] :  새로운 값

  return (
    <div style={{ border: "10px solid blue", padding: 100 }}>
      1 ~ {max}사이에 존재하는 소수의 개수는 : {count}
    </div>
  );
}

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <PrimeNosCount max={100} />
      <hr />
      <PrimeNosCount max={200} />
      <hr />
      <PrimeNosCount max={300} />
      <hr />
      <PrimeNosCount max={1000000} />
      <hr />
      <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
    </>
  );
}

export default App;
