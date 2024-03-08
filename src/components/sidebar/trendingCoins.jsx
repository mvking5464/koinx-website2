//

import UseAxios from "../../hooks/useAxios.jsx";
// import CardComponent from "../cardComponet";
import TopThree from "./top3.jsx";

export default function TrendingCoins() {
  //
  const { response } = UseAxios("search/trending");
  // console.log(response && response.coins[2].item.coin_id + "OK");

  return (
    <div className="bg-white rounded-xl m-2 ml-2 p-2 md:mr-10 font-sans">
      <div className="p-3">
        <h2>Trending Coins (24h)</h2>
        {response &&
          response.coins.map((i, j) => {
            return j < 3 ? (
              <TopThree key={i.item.coin_id} props={i.item} />
            ) : null;
          })}
      </div>
    </div>
  );
}
