//

import HorizontalCoin from "../footer/horizontalCoin.jsx";
import HorizontalCoin2 from "../footer/horizontalCoin2.jsx";

export default function MyFooter() {
  //

  return (
    <div className="bg-white" style={{ maxWidth: "75rem" }}>
      <div className="max-w-7xl mx-auto md:block hidden ">
        <HorizontalCoin text={"You may also like"} />
        <HorizontalCoin text={"Trending Coins"} />
      </div>
      <div className="max-w-7xl mx-auto md:hidden block  ">
        <HorizontalCoin2 text={"You may also like"} />
        <HorizontalCoin2 text={"Trending Coins"} />
      </div>
    </div>
  );
}
