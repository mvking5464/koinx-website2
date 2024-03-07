//

import CardComponent from "../cardComponet.jsx";
import BitcoinFirst from "./bitcoinFirst.jsx";
import TradingViewWidget from "./mainGraph.jsx";

export default function GraphDiv() {
  //

  return (
    <div>
      <CardComponent>
        <BitcoinFirst />
        <div className=" h-100">{<TradingViewWidget />}</div>
      </CardComponent>
    </div>
  );
}
