import React, { useState } from "react";

function NoRecord() {
  // 기록된 숫자가 배열로 쌓이도록 만들기

  const [no, setNo] = useState(0);
  // 카운팅되는 숫자

  const [recordedNos, setRecordedNos] = useState([]);
  //   카운팅 숫자 기록을 배열로 남긴다. useState([])-> 배열이 들어간다는 의미
  const saveNo = () => {
    setRecordedNos([...recordedNos, no]);
  };

  return (
    <>
      <h1>숫자기록</h1>
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
      기록된 숫자 : [{recordedNos.join(",")}]
    </>
  );
}

export default NoRecord;
