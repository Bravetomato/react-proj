//데이지ui, 폰트어썸 사용하여 알림창 만들기 - 알림창이 내려왔다가 사라지는 동작 수행하도록.
import React, { useState } from "react";
import classnames from "https://cdn.skypack.dev/classnames";
// cdnjs의 react ver. 알림창의 애니메이션을 위해 import.

// 전역변수가 아닌 useState를 통해 구현하기

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);
  const [workDone, setworkDone] = useState(false);
  if (workDone == false) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);

    setTimeout(function () {
      setVisible(false);
    }, 3000);

    setworkDone(true);
  }

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        { "top-[-60px]": !visible },
        { "top-[10px]": visible }
      )}
    >
      {/* classnames를 불러와서 애니메이션. !visible일때 top -60px, visible일때 top 10px*/}
      {children}
    </div>
  );
}

function Alert({ color: color_, children }) {
  // color: color_ -> color 의 이름을 color_ 로 받아온다.
  const color = color_ ?? "red";
  //   받아온 색이 있으면 그대로, 없으면 red로 바꿔준다.
  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i class="fa-regular fa-comment"></i>
          {/* 폰트어썸 아이콘 링크 */}
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <>
      <NotifyOnce>
        <Alert>"안녕"반가워</Alert>
      </NotifyOnce>
    </>
  );
}

export default Notice;
