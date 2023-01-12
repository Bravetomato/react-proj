import React, { useState, useMemo } from "react";

import "./App.css";

// 체크박스, 라디오박스 활용 및 배달옵션
function OrderMainFood({setMainFoodCount, mainFoodCount}) {
  return(
  <>
  <h2>메인 ( 수량 : {mainFoodCount} )</h2>
    <div>
      <button onClick={() => setMainFoodCount(mainFoodCount + 1)}>증가</button>
      <button onClick={() => setMainFoodCount(mainFoodCount == 1 ? 1 : mainFoodCount-1)}>감소</button>
    </div>
    </>
  );
}

function OrderOptions({selectedCount, options, toggleAllChecked, btnAllChecked, optionCheckeds, toggleOptionCheck}) {
  return(
    <>
     <hr />
    <h2>옵션 ({selectedCount} / {options.length})</h2>
    {/* 체크박스로 바꿈 */}
    <label style={{userSelect: "none", cursor: "pointer"}} >
          <input type="checkbox" checked={btnAllChecked} onChange={toggleAllChecked}/>
          전체선택</label>
    <ul>
      {options.map((option, index)=> (
        <li key = {option} style={{paddingLeft:15, usetSelect: "none", cursor: "pointer"}}
         >
        {/* 체크박스로 바꿈 */}      
        <lable>
          <input type="checkbox" checked={optionCheckeds[index]} onChange={() => toggleOptionCheck(index)}/>
          {option}
        </lable>
        </li>
      ))}
    </ul>
    </>  
  );
}

const MemoizedOrderOptions = React.memo(OrderOptions);
// React.memo 로 최적화

// 배달 옵션 새로 추가-> 라디오 박스 사용
function OrderDelivery({deliveryType, setDeliveryType}) {
  console.log(`OederDelivery 실행됨`);
   
  return(
    <>
    <h2>배달 옵션</h2>
    <label>
      <input type="radio" name="delivery-type" checked={deliveryType == "직접수령"} onChange={() => setDeliveryType("직접수령")}/>
      직접수령
    </label>

    <label>
      <input type="radio" name="delivery-type" checked={deliveryType == "배달"} onChange={() => setDeliveryType("배달")}/>
      배달
    </label>
    </>
  );
}

const MemoizedOrderDelivery = React.memo(OrderDelivery);
// React.memo 로 최적화

function App() {
  const [mainFoodCount, setMainFoodCount] = useState(1);

  const options = [
    "발사믹", 
    "머스타드 소스",
    "홀스래디쉬 소스",
    "스윗어니언 소스",
    "후추",
    "올리브유",
    "스테이크 소스",
  ];

  const [optionCheckeds, setOptionCheckeds] = useState(
      new Array(options.length).fill(false)
  );

const toggleOptionCheck = (index) => {
  const newOptionCheckeds = optionCheckeds.map((el, _index) => 
  _index === index ? !el : el);
  setOptionCheckeds(newOptionCheckeds);
};


  const btnAllChecked = useMemo(() => optionCheckeds.every((el) => el), [optionCheckeds]);
  const selectedCount = useMemo(() => optionCheckeds.filter((el) => el).length, [optionCheckeds]);


  const toggleAllChecked = () => {
      if(btnAllChecked) {
        const newOptionCheckeds = optionCheckeds.map((el) => false);
        setOptionCheckeds(newOptionCheckeds);
      } else {
        const newOptionCheckeds = optionCheckeds.map((el) => true);
        setOptionCheckeds(newOptionCheckeds);
      }
  };

// 배달 기본값은 직접 수령
  const [deliveryType, setDeliveryType] = useState("직접수령");

  return (
    <>
    <h1>음식 주문</h1>
    <OrderMainFood 
      setMainFoodCount={setMainFoodCount}
      mainFoodCount={mainFoodCount}
      />
    <OrderOptions 
      selectedCount={selectedCount} options={options} toggleAllChecked={toggleAllChecked} 
      btnAllChecked={btnAllChecked} optionCheckeds={optionCheckeds} toggleOptionCheck={toggleOptionCheck}
    />
    {/* 메모이즈드한 주문옵션과 배달옵션 */}
    <MemoizedOrderOptions 
      selectedCount={selectedCount} options={options} toggleAllChecked={toggleAllChecked} 
      btnAllChecked={btnAllChecked} optionCheckeds={optionCheckeds} toggleOptionCheck={toggleOptionCheck}
    />
    <MemoizedOrderDelivery 
      deliveryType={deliveryType} setDeliveryType={setDeliveryType}
    />
    </>
  );
}

export default App;

