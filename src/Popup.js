import React, { useState } from "react";

// 팝업버튼 누르면 사각형 사라지도록

function Popup() {
  const border = "10px solid red";
  // border가 길어질거 같으면 이런식으로 나누어 적을 수 있음.
  const [popupVisible, setPopupVisible] = useState(true);
  // 기본값은 true. true일 때 사각형이 있음

  return (
    <>
      <button className="btn btn-outline" onClick={() => setPopupVisible(true)}>
        팝업열기</button>
      <hr />
      
      <button className="btn btn-outline" onClick={() => setPopupVisible(false)}>
        팝업닫기</button>
      <hr />
      {/* 팝업닫기를 누르면 false가 기본값이 된다*/}
      

      {popupVisible && <div style={{ width: 100, height: 100, border }}></div>}
      {/* 조건: PopupVisible이 true 일때 width: 100, height: 100, border가 실행된다 */}
    </>
  );
}

export default Popup;
