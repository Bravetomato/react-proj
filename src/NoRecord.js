import React, { useState } from "react";

function NoRecord() {
  // 배열 렌더링
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  setTimeout(() => {
    setArr([...arr, arr.length + 1]);
  }, 1000);
  // 1초마다 배열의 길이에 +1 된다.

  const [no, setNo] = useState(10);
  //   숫자 카운팅을 위한 숫자. 맨처음 no에는 10이 세팅된다.
  const [recordNo, setRecordNo] = useState(0);
  // 숫자 기록을 위한 숫자

  const saveNo = () => {
    setRecordNo(no);
    // setRecordNo 가 (no)로 들어감. 즉 카운팅 된 숫자가 기록 버튼으로 인해 no에 저장됨.
  };

  return (
    <>
      {arr.join(",")};{/* , 기준으로 +1 증가한 배열값이 기록된다*/}
      {/* <h1>숫자기록</h1>
      <input
        type="number"
        value={no}
        onChange={(e) => setNo(e.target.valueAsNumber)}
        // 숫자 카운팅이라는 이벤트가 일어나서 바뀐 숫자가 setNo가 된다.
        className="input w-full max-w-xs"
      />
      <button
        type="button"
        onClick={saveNo}
        // 기록 버튼이 클릭되면 카운팅 된 숫자가 no에 저장된다.
        className="btn btn-outline btn-secondary"
      >
        기록
      </button>
      <hr />
      기록된 숫자 : {recordNo} */}
    </>
  );
}

export default NoRecord;
