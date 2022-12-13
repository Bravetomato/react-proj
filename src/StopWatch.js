import React, { useState } from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  let timeoutId = setTimeout(() => setNum(num + 1), 1000);
  // 리렌더링 되면서 1초에 숫자가 1씩 추가된다. let으로 선언한 것이 포인트.
  // const 로 선언한 경우 변경 불가. const 떼고 이름 = 값; 적는 것도 불가.
  // let 의 경우 선언 후, let 떼고 이름 = 값; 적는 것 가능.
  // 그러나 let 같은 이름 = 다른값; 선언 불가.
  // 재개시키는 함수 만들 때 timeoutId를 다시 선언해야 하기 때문에 let으로 선언.

  const pause = () => clearTimeout(timeoutId);
  // 실행할 코드가 하나 뿐이면 {} 안써도 된다. 카운터 일시정지 함수.

  const resome = () => {
    timeoutId = setTimeout(() => setNum(num + 1), 1000);
  };
  // 카운터를 재개시키는 함수. let timeoutId 과 15번 줄의 timeoutId 는 같은 것.
  // 6번 줄에서 let으로 선언했기 때문에 let 없이 timeoutId만 넣어줘도 오류생기지 않음.

  return (
    <>
      숫자 : {num}
      <hr />
      {/* 한줄 삽입 */}
      <button onClick={pause}>일시정지</button>
      {/* 버튼을 누르면 리렌더링이 멈추면서 숫자 추가가 멈추게 된다 */}
      <hr />
      <button onClick={resome}>재개</button>
      {/* 버튼을 누르면 resome함수를 시작해 다시 카운터가 재개된다 */}
    </>
  );
}

export default StopWatch;
