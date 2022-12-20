import React, { useState } from "react";

function FormEx() {
  const onSubmit = (e) => {
    e.preventDefault();
    // 전송버튼 막기
    const form = e.target;

    form.name.value = form.name.value.trim();
    // 커서 간격 자동 정리
    if (form.name.value.length == 0) {
      // 만약 이름 입력 길이가 0이라면 -> 이름 입력이 안되었다면
      alert("이름을 입력해주세요");
      form.name.focus();
      //form.name.focus(); 입력칸에 커서 자동으로 놓기
      return;
    }

    form.age.value = form.age.value.trim();

    if (form.age.value.length == 0) {
      alert("나이를 입력해주세요");
      form.age.focus();
      return;
    }

    const name = form.name.value;
    const age = form.age.value;
    // name이라는 변수에 form.name.value 를 받는다. form.name.value은 입력창에 적힌 값. age도 같다.

    alert(`이름 : ${name}, 나이 : ${age}`);
    // 알림창으로 입력된 이름과 나이 뜨도록

    form.name.value = "";
    form.age.value = "";
    // 전송 후 자동으로 입력창 비우기

    form.name.focus();
    form.age.focus();
    // 전송 후 입력창 비워진 후 커서 자동 놓기
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
        ></input>
        <br />
        <input
          name="age"
          type="number"
          placeholder="나이를 입력해주세요"
          defaultValue={20}
          // 나이 입력창에 기본으로 20 이 써있도록 설정
        ></input>
        <br />
        <input type="submit" value="전송" />
        {/* button 의 기본 설정 submit, value=전송은 전송 글씨가 써진 버튼 생성 */}
      </form>
    </>
  );
}

export default FormEx;
