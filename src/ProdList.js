import ProdListItem from "./ProdListItem";

function ProdList() {
  return (
    <ul className="flex gap-[10px]">
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
  );
}

export default ProdList;
