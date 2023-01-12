import React, { useState } from "react";

import  "./App.css";

function App() {
  const fruits = ["사과", "배", "바나나"];

  const [selecteds, setSelecteds] = useState(new Array(fruits.length).fill(true));
  // new Array를 fruits의 길이만큼 true로 채우겠다. 

  const toggleFruitSeleced = (index) => {
    const newSelecteds = selecteds.map((el, _index) => _index == index ? !el : el);
    setSelecteds(newSelecteds);
  };
  // 선택 상태가 true 인지 false 인지
  const selectedFruits = selecteds.map((el, index) => (el ? fruits[index] : el)).filter((el)=> el);
  // 선택된 과일의 이름이 무엇인지

  return (
    <>
    <ul>
      {fruits.map((fruit, index) => (
        <li kep={index}>
          <lable>
            <input checked={selecteds[index]} type="checkbox" onChange={() => toggleFruitSeleced(index)}/> 
            {fruit}
          </lable>
        </li>
      ))}
    </ul>
    <hr />
    <div>
      선택상태 : {selecteds.join(",")}
      <hr />
      선택된 과일 : {selectedFruits.join(",")}
    </div>
    </>
  );
}

export default App;
