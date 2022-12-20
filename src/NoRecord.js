import React, { useState } from "react";

function NoRecord() {
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([10, 20, 30]);
  const saveNo = (e) => {
    //   e.preventDefault();
    // 26번째 줄에 넣거나 8번 줄에 넣으면 됨.
    // 링크 클릭 시 이동을 막는다. form 전송시 form 발송되는 것을 막는다. 마우스 휠-> 스크롤바 이동을 막는다.

    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }
    setRecordedNos([...recordedNos, no]);
    setNo("");
  };

  const li = recordedNos.map((el, index) => <li key={index}>▷{el}</li>);

  return (
    <>
      <h1>숫자기록</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        {/* enter키로 값을 전송하고 싶을 때 : <form></form> 사용. button type을 submit으로 바꾼다.*/}
        <input
          type="number"
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
          className="input w-full max-w-xs"
        />
        <button type="submit" className="btn btn-outline btn-secondary">
          기록
        </button>
      </form>
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
