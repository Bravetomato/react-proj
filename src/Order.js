import React, { useState, useMemo } from "react";

import "./App.css";

// 음식 주문하기.
function Order() {
  // 메인의 수량
  const [mainFoodCount, setMainFoodCount] = useState(1);

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
  const btnAllChecked = useMemo(() => optionCheckeds.every((el) => el), [optionCheckeds]);
 // optionCheckeds 에서 필터에서 선택된(.filter) el의 개수(.length) 구하기.
  const selectedCount = useMemo(() => optionCheckeds.filter((el) => el).length, [optionCheckeds]);
  // useMemo로 최적화 -> 메인 수량의 useState 값이 재랜더링되기 때문에 최적화 해줌.
 //  메인 수량이 바뀌는 것과 옵션이 바뀌는 것, 전체 선택은 상관이 없기 때문에 optionCheckeds이 바뀔 때만 랜더링 하겠다는 의미.

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
    <h2>메인 ( 수량 : {mainFoodCount} )</h2>
    <div>
      <button onClick={() => setMainFoodCount(mainFoodCount + 1)}>증가</button>
      <button onClick={() => setMainFoodCount(mainFoodCount == 1 ? 1 : mainFoodCount-1)}>감소</button>
    </div>
     {/* selectedCount 에는 선택된 옵션 개수 / options.length 옵션 총 개수 */}
     <hr />
    <h2>옵션 ({selectedCount} / {options.length})</h2>
     {/* optionCheckeds 의 모든(every) el를 살펴 본후 삼항연산자를 통해 참이면 체크, 거짓이면 빈칸  */}
    <span style={{userSelect: "none", cursor: "pointer"}} 
          onClick={toggleAllChecked}
          >{btnAllChecked ? "[ v ]" : "[  ]"}전체선택</span>
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
