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
      <ul>
      {recordedNos.map((el, index) => (
       <li key={index}>
        <span style={{ width: 70, display: "inline-block"}}>{el}</span>
        <span style={{ width: 70, display: "inline-block"}}>{index}</span>
        <button onClick={() => removeNo(index)}>삭제</button>
       </li>
       ))}
      </ul>



    </>
  );
}

export default RefEx;
