import React, { useState } from "react";

function NoRecord() {
  // 기록된 숫자가 배열로 쌓이도록 만들기-2

  const [no, setNo] = useState(0);
  // 카운팅되는 숫자

  const [recordedNos, setRecordedNos] = useState([10, 20, 30]);
  //   카운팅 숫자 기록을 배열로 남긴다. useState([])-> 배열이 들어간다는 의미
  const saveNo = () => {
    setRecordedNos([...recordedNos, no]);
  };

  const li = recordedNos.map((el, index) => <li key={index}>▷{el}</li>);
  // 기록된 숫자 v2의 {li}에 들어가는 함수

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

      <br />

      <h1>기록된 숫자 v1: [{recordedNos.join(",")}]</h1>

      <br />

      <h1>
        기록된 숫자 v2: <ul>{li}</ul>
      </h1>

      <br />

      <h1>
        기록된 숫자 v2-1:
        <ul>
          {recordedNos.map((el, index) => (
            <li key={index}>▷{el}</li>
          ))}
        </ul>
      </h1>
    </>
  );
}

export default NoRecord;
