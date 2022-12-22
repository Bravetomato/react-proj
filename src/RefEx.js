import React, { useState, useRef } from "react";


function RefEx() {
  const [recordedNos, setRecordedNos] = useState([5, 10, 15, 5, 20, 25, 5, 30]);

  const saveNo = (form) => {
    form.no.value = form.no.value.trim();
    
    if ( form.no.value.length == 0 ) {
      alert('숫자를 입력해주세요.');
      form.no.focus();
      return;
    }

    setRecordedNos([...recordedNos, form.no.value]);
    form.no.value = '';
    form.no.focus();
  };

  //const li = [1, 2, 3].map((el, index) => <li key={index}>{el}</li>);
  // key 는 절대 겹치지 않는 유니크한 값.
  const li = recordedNos.map((el, index) => <li key={index}>{el}</li>);

// 5를 지우는 함수
  const removeNo5 = () => {
    const newRecordedNos = recordedNos.filter((el) => el != 5 );
    setRecordedNos(newRecordedNos);
  };

// 처음 숫자를 지우는 함수
  const removeFirst = () => {
    const newRecordedNos = recordedNos.filter((el, index) => index != 0 );
    // 인덱스 순서가 0이 아닌 것을 남긴다
    setRecordedNos(newRecordedNos);
  };

// 마지막 숫자를 지우는 함수
  const removeLast = () => {
    const newRecordedNos = recordedNos.filter((_, index) => index != recordedNos.length -1);
    // recordedNos.length -1 : 마지막 숫자를 특정할 수 없기 때문에 배열 길이에서 -1 번째가 마지막 숫자가 된다.
    // recordedNos.length -1 가 아닌 것을 남긴다.
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo(e.target);
        }}
      >
        <input
          type="number"
          name="no"
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자</h1>
      {recordedNos.join(",")}

      <hr />
        <button onClick={removeNo5}>숫자 5 삭제</button>
      <hr />
        <button onClick={removeFirst}>처음 숫자 삭제</button>
      <hr />
        <button onClick={removeLast}>마지막 숫자 삭제</button>

    </>
  );
}


// function RefEx() {
//   const index = 4;
//   const arr = [10, 20, 30, 40, 50];
//   const newArr = arr.filter((el, _index) => _index != index);
//   // 인덱스 번호 3이 아닌 것들만 필터로 걸러서 리스트를 만들겠다.
//   return (
//     <>{arr.join(",")}</>
//   );
// }


export default RefEx;
