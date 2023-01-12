import React, { useState } from "react";

import  "./App.css";

//라디오박스 다루기
function App() {
  const ageBands = ["영유아,아동", "10대", "20대", "30대", "40대", "50대", "60대", "그 외"];

  const [selectedAgeBand, setSelectedAgeBand] = useState(ageBands[0]);
// default : ageBands 배열의 [0] 값, 즉 영유아, 아동으로 설정. 

  return (
    <>
    {ageBands.map((ageBand) => (
      <lable>
        <input name="ageBand" type="radio" 
        onChange={(e) =>setSelectedAgeBand(ageBand)} 
        // 연령을 선택하는 이벤트가 발생
        checked={ageBand == selectedAgeBand}/>
        {/* 배열에 주어진 연령과 현재 선택된 연령이 같을 경우 라디오박스에 체크된다. */}
        {ageBand}
      </lable>    
      ))}
      <hr />
      <div>현재 값 : {selectedAgeBand}</div>
      {/* 현재 선택된 값은 selectedAgeBand로 보여준다 */}
    </>
  );
}

export default App;
