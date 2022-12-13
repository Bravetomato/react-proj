import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  // 숫자가 짝수일 때 짝수입니다. 문구 등장하도록 만들기

  // const noIsEvenDiv =
  //   no % 2 == 0 ? (
  //     <>
  //       <span>짝수입니다.</span>
  //       <hr /> {/* 참일 때 실행 */}
  //     </>
  //   ) : (
  //     <></>
  //     // 거짓일 때 실행
  //   );

  // 삼항연산자의 다른 표현 -2
  const noIsEvenDiv = (
    <>
      {no % 2 == 0 ? <div>짝수입니다.</div> : <div>홀수입니다.</div>}
      <hr />
    </>
  );

  // || 연산자 사용. no가 8로 나누어 몫이 0이거나
  const noIsNot8MultipleDiv = no % 8 == 0 || (
    <>
      <div>8의 배수가 아닙니다.</div>
      <hr />
    </>
  );
  // const noIs8MultipleDiv =
  //   no % 8 == 0 ? (
  //     <>
  //       <span>8의 배수입니다.</span>
  //     </>
  //   ) : (
  //     <></>
  //   );

  //위 삼항연산자를 이런식으로도 표현할 수 있다 -1
  const noIs8MultipleDiv = no % 8 == 0 && (
    <>
      <span>8의 배수입니다.</span>
    </>
  );

  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      <hr />
      {noIsEvenDiv}
      {noIs8MultipleDiv}
      {noIsNot8MultipleDiv}
    </>
  );
}

export default NumberCounter;
