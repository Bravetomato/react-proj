import React, { useState, useRef } from "react";

function RefEx() {
  const formInputNoRef = useRef(null);
  // Ref 만드는 법
  const[no, setNo] = useState("");
 
  const notice = () => {
    formInputNoRef.current.focus();
    // 함수이름.current.기능() : 실행버튼 누른 후 커서 입력창으로 자동 이동

    if (!no) { // 입력된 값이 숫자가 아니라면
      alert("숫자를 입력해주세요.");
      return;
    }

    alert(`당신이 입력한 숫자는 ${no}입니다.`);
    setNo("");
    // 입력한 숫자 지우기
  };

  return (
    <>
      <form onSubmit={(e) => {e.preventDefault(); notice();}}>
        <input 
        ref={formInputNoRef}
        // 특정 el에 Ref에 심을 수 있다. 원래 있던 태그에만 심을 수 있다. 
        type="text" 
        placeholder="숫자" 
        value={no} 
        onChange={(e) => setNo(e.target.value)}
        />
        <button>실행</button>
      </form>
    </>
  );
}

export default RefEx;
