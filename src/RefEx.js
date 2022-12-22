import React, { useState, useRef } from "react";


function RefEx() {
  const [recordedNos, setRecordedNos] = useState([5, 10, 15, 5, 20, 25, 5, 30, 35, 40]);

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


  // 특정 index 지정해 삭제
  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
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
        <button onClick={() => removeNo(0)}> index 0 삭제 </button>
        <hr />  
        <button onClick={() => removeNo(3)}> index 3 삭제 </button>
        <hr />
        <button onClick={() => removeNo(5)}> index 5 삭제 </button>
        <hr />
        <button onClick={() => removeNo(7)}> index 7 삭제 </button>
      <hr />


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
