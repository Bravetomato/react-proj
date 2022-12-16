import ProdListItem from "./ProdListItem";

function ProdList({ className }) {
  // ({ className }) 는 App의 ProdList에 container 때문에 설정한 것
  return (
    <>
      <div className={className}>
        {/* div 안의 ul에게 모두 container를 주기 위해 className을 {className}으로 설정 */}
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl: grid-cols-6 gap-x-[20px] gap-y-[100px]">
          {/* 반응형: grid / grid-cols-2: 그리드를 최대 2개까지만 배치하겠다  */}
          {/* 가로여백 20: gap-x-[20px] 세로여백 100: gap-y-[100px] */}
          {/* sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl: grid-cols-6*/}
          {/* sm:grid-cols-2 화면이 스몰일때 2개, md:grid-cols-3 미디움일때 3개, lg, xl, 2xl일때 모두 설정가능 */}

          <li className="flex-glow">
            {/* "flex-glow"로 남은 여백 가져가기 */}
            <ProdListItem
              imgNo={201}
              name="PRODUCT 1"
              productPriceFormatted={"1,140,000"}
            />
          </li>

          <li className="flex-glow">
            <ProdListItem
              imgNo={1}
              name="PRODUCT 2"
              productPriceFormatted={"3,320,000"}
            />
          </li>

          <li className="flex-glow">
            <ProdListItem
              imgNo={2}
              name="PRODUCT 3"
              productPriceFormatted={"4,320,000"}
            />
          </li>

          <li className="flex-glow">
            {/* "flex-glow"로 남은 여백 가져가기 */}
            <ProdListItem
              imgNo={201}
              name="PRODUCT 1"
              productPriceFormatted={"1,140,000"}
            />
          </li>

          <li className="flex-glow">
            <ProdListItem
              imgNo={1}
              name="PRODUCT 2"
              productPriceFormatted={"3,320,000"}
            />
          </li>

          <li className="flex-glow">
            <ProdListItem
              imgNo={2}
              name="PRODUCT 3"
              productPriceFormatted={"4,320,000"}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProdList;
