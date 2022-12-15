import React, { useState } from "react";

function ProductListItem(props) {
  //구조분해할당
  //방법 1
  // const imgNo = props.imNo;
  // const productName = props.name;
  // const productPriceFormatted = props.productPriceFormatted;

  //방법 2
  // const {imgNo, name, productPriceFormatted} = props;
  // const productName = name;

  //방법 3
  const {imgNo, name:productName, productPriceFormatted} = props;

  return (
    <>
      {/* 상품명, 가격 텍스트 설정 */}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "10px",
        }}
        >

        {/* 이미지 불러오기 */}
        <img src={`https://picsum.photos/id/${imgNo}/400/400` }/>
        
        {/* 제품명 텍스트 */}
        <div 
          style={{
          textAlign:'center', 
          fontWeight:'bold', 
          color:'#454545',
          }}
          >
          {productName}
          </div>

        {/* 제품 가격 텍스트   */}
        <div style={{textAlign:'center'}}>
          {productPriceFormatted}
          </div>
      </div>
    </>
  );
}

export default ProductListItem;
