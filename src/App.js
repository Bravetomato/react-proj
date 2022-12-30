import React, { useEffect, useState, useMemo } from "react";

import "./App.css";
// 입력한 숫자들 중 소수의 갯수를 구하는 코드-useMemo 사용

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

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [inputedNo, setInputedNo] = useState(0);
  const [no, setNo] = useState(0);

  const primeNumbersCount = useMemo(
    () => getPrimeNumbersCount(inputedNo),
    [inputedNo]
  );
  // 함수의 형태를 만든 후 usaMemo로 감싸준다.
  // getPrimeNumbersCount(inputedNo) : 직전의 값
  // [inputedNo] : 새로 들어온 값
  // 직전의 값을 기억해서 새로 들어온 값과 기억해서 비교 후 빠르게 처리하는 함수.
  // 모든 값을 다 기억하는 것이 아니다.

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.number.value = form.number.value.trim();

    if (form.number.value.length == 0) {
      alert("숫자를 입력해주세요");
      form.number.focus();
      return;
    }

    const number = form.number.valueAsNumber;

    form.number.focus();

    setInputedNo(number);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <button onClick={() => setNo(no + 1)}>번호 : {no}</button>
        <hr />
        <input type="number" name="number" placeholder="숫자를 입력해주세요" />
        <input type="submit" value="확인" />
        <hr />
        <div>MAX : {inputedNo}</div>
        <div>소수의 개수 : {primeNumbersCount}</div>
      </form>
    </>
  );
}

export default App;
