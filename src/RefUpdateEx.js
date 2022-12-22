import React, { useState, useRef } from "react";


// index를 지정해 값 수정하기
function RefUpdateEx() {
    const index = 1;
    const newValue = 1000;
    const arr = [10, 20, 30];
    const newArr = arr.map((el, _index) => (_index == index ? newValue : el));
    // _는 앞의 index와 겹치기 때문에 붙여준 것. 
    //  const index의 값이 arr의 1번째 index와 다르면 newValue 즉, 1000 으로 바꾸고, 같다면 그대로 둔다(el)).

    return (
      <>{newArr.join(",")}</>
  );
}

export default RefUpdateEx;
