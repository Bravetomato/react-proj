import React, { useState } from "react";

function ProdListItem({ imgNo, name, productPriceFormatted }) {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        {/* flex-col 은 flex-cloumn */}
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div className="text-center font-bold">{name}</div>
        <div className="after:content-['원'] text-center">
          {productPriceFormatted}
        </div>
        {/* 원 을 일괄적으로 뒤에 붙도록 */}
      </div>
    </>
  );
}

export default ProdListItem;
