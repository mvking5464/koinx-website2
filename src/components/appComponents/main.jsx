//

import { ArrowForward, BitcoinImg } from "../../assets/logo.jsx";
import PerformanceDiv from "../main/PerformanceDiv.jsx";
import AboutBitcoinDiv from "../main/aboutBitcoinDiv.jsx";
import GraphDiv from "../main/graphDiv.jsx";
import SelectorDiv from "../main/selectorDiv.jsx";
import SentimentsDiv from "../main/sentimentsDiv.jsx";
import TeamDiv from "../main/teamDiv.jsx";
import TokenomicsDiv from "../main/tokenomicsDiv.jsx";

export default function MainBody() {
  //

  return (
    <div className="col-span-2">
      <div className="flex items-center gap-2 m-4 px-4">
        <span className=" text-slate-600">Cryptocurrencies</span>
        <span>
          <ArrowForward />
        </span>
        Bitcoin
      </div>
      {/* <div className=" items-center gap-2 mb-5 flex md:hidden ">
        <BitcoinImg />
        <span className=" font-sans font-bold text-2xl">Bitcoin</span>
        <span className=" font-sans text-gray-600 mr-4">BTC</span>
        <button className=" font-sans font-medium bg-slate-500 border-none rounded-md p-3 text-white ">
          Rank #1
        </button>
      </div> */}
      <GraphDiv />
      <SelectorDiv />
      <PerformanceDiv />
      <SentimentsDiv />
      <AboutBitcoinDiv />
      <TokenomicsDiv />
      <TeamDiv />
    </div>
  );
}
