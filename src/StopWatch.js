import React, { useState } from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  const timeoutId = setTimeout(
    () => setNum(num + 1),
    1000
  ); /*리렌더링 되면서 1초에 숫자가 1씩 추가된다*/

  const pause = () => clearTimeout(timeoutId);
  // 실행할 코드가 하나 뿐이면 {} 안써도 된다

  return (
    <>
      숫자 : {num}
      <hr />
      {/* 한줄 삽입 */}
      <button onClick={pause}>일시정지</button>
      {/* 버튼을 누르면 리렌더링이 멈추면서 숫자 추가가 멈추게 된다 */}
    </>
  );
}

export default StopWatch;
