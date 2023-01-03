import React, { useState } from "react";

import "./App.css";

// 음식 주문하기.
function Order() {

  const options = [
    "콜라 1.5", 
    "머스타드 소스",
    "홀스래디쉬 소스",
    "스윗어니언 소스",
    "후추",
  ];

  // option 선택 체크를 위해 체크는 true, 빈칸은 false
  const [optionCheckeds, setOptionCheckeds] = useState(
      new Array(options.length).fill(false)
      // 배열값이 모두 false로 채워진다. options의 값이 늘어나도 모두 false로 채워짐.
  );

 // option 선택하면 빈 칸 체크 되도록
const toggleOptionCheck = (index) => {
  const newOptionCheckeds = optionCheckeds.map((el, _index) => 
  _index === index ? !el : el);
  setOptionCheckeds(newOptionCheckeds);
};

 // 전체선택
 // optionCheckeds 의 모든(every) el를 살펴본다.
  const btnAllChecked = optionCheckeds.every((el) => el);

// 전체선택 체크하면 모든 옵션에 체크 되도록
  const toggleAllChecked = () => {
      if(btnAllChecked) {
        // 전부 체크 해제
        const newOptionCheckeds = optionCheckeds.map((el) => false);
        setOptionCheckeds(newOptionCheckeds);
      } else {
        // 전부 체크
        const newOptionCheckeds = optionCheckeds.map((el) => true);
        setOptionCheckeds(newOptionCheckeds);
      }
  };

  return (
    <>
    <h1>음식 주문</h1>
    <h2>옵션</h2>
     {/* optionCheckeds 의 모든(every) el를 살펴 본후 삼항연산자를 통해 참이면 체크, 거짓이면 빈칸  */}
    <span onClicked={toggleAllChecked}
          style={{usetSelect: "none", cursor: "pointer"}}
          >{btnAllChecked ? "[ v ]" : "[  ]"}전체선택</span>
    <hr />
    <ul>
      {/* map을 이용해 option 선택 하기. true에 v 표시가 생긴다. */}
      {/* onClick={() => toggleOptionCheck(index)  클릭시 toggleOptionCheck(index) 실행*/}
      {/* usetSelect: "none" 글자 드래그 방지, cursor: "pointer 마우스 포인터 손가락 모양으로*/}
      {options.map((option, index)=> (
        <li key = {option} style={{paddingLeft:15, usetSelect: "none", cursor: "pointer"}}
         onClick={() => toggleOptionCheck(index)}
         >
      {/* optionCheckeds[index] 가 true면 체크, false면 빈칸 */}
        {optionCheckeds[index] ? "[ v ]" : "[  ]" }
        {option}
        </li>
      ))}
    </ul>
    </>
  );
}

export default Order;
