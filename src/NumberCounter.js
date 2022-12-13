import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  // 숫자가 짝수일 때 짝수입니다. 문구 등장하도록 만들기

  const noIsEvenDiv =
    no % 2 == 0 ? (
      <>
        <span>짝수입니다.</span>
        <hr /> {/* 참일 때 실행 */}
      </>
    ) : (
      <></>
      // 거짓일 때 실행
    );

  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      <hr />
      {noIsEvenDiv}
    </>
  );
}

export default NumberCounter;
