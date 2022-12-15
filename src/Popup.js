import React, { useState } from "react";

// 팝업버튼 누르면 사각형 사라지도록-조건문

function Popup() {
  const border = "10px solid red";
  const [popupVisible, setPopupVisible] = useState(true);

  return (
    <>
      {popupVisible && <button className="btn btn-outline" onClick={() => setPopupVisible(false)}>팝업닫기</button>}
      {/*  && 앞 조건이 참일 때*/}

      {popupVisible || <button className="btn btn-outline" onClick={() => setPopupVisible(true)}>팝업열기</button>}
      {/* || 앞 조건이 거짓 일 때   */}

      <hr />
      {popupVisible && <div style={{ width: 100, height: 100, border }}></div>}
    </>
  );
}

export default Popup;
