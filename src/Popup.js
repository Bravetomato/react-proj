import React, { useState } from "react";

// 팝업버튼 누르면 사각형 사라지도록-버튼 하나

function Popup() {
  const border = "10px solid red";
  const [popupVisible, setPopupVisible] = useState(true);
  // 기본값 popupVisible, 변경값 setPopupVisible

  return (
    <>
      <button className="btn btn-outline" onClick={() => setPopupVisible(!popupVisible)}>
        팝업{popupVisible ? "닫기" : "열기"}
        {/* popupVisible ture면 팝업닫기, popupVisible false면 팝업열기 */}
        </button>
      <hr />

      {popupVisible && <div style={{ width: 100, height: 100, border }}></div>}
      {/* popupVisible이 true면 사각형 나타남 */}
    </>
  );
}

export default Popup;
