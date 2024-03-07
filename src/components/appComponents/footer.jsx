//

import HorizontalCoin from "../footer/horizontalCoin.jsx";

export default function MyFooter() {
  //

  return (
    <div className="bg-white" style={{ maxWidth: "75rem" }}>
      <div className="max-w-7xl mx-auto ">
        <HorizontalCoin text={"You may also like"} />
        <HorizontalCoin text={"Trending Coins"} />
      </div>
    </div>
  );
}
