import React, { useState } from "react";

import "./App.css";
// 입력한 숫자들 중 소수의 갯수를 구하는 코드-useState 사용

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
  // inputedNo : 입력창에 입력되는 숫자

  const primeNumbersCount = getPrimeNumbersCount(inputedNo);
  // 입력창에 들어간 숫자에 대한 소수의 개수

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.number.value = form.number.value.trim();

    // 숫자 입력 경고창
    if (form.number.value.length == 0) {
      alert("숫자를 입력해주세요");
      form.number.focus();
      return;
    }

    const number = form.number.valueAsNumber;
    //form.number.valueAsNumber : number값이 숫자로 입력되도록
    form.number.focus();

    setInputedNo(number);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
