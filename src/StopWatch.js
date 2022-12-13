import React, { useState } from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  setTimeout(() => setNum(num + 1), 1000); /*1초에 숫자가 1씩 추가된다*/

  return <>숫자 : {num}</>;
}

export default StopWatch;
