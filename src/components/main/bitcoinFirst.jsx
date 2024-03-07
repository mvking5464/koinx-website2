// simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_vol=true'

import { BitcoinImg, UpArrow } from "../../assets/logo.jsx";
import UseAxios from "../../hooks/useAxios.jsx";
import { numberWithCommas, numberWithCommasIND } from "../calculation.js";

const BitcoinFirst = () => {
  const { response } = UseAxios(
    "simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
  );

  const usdBitcoin = numberWithCommas(response && response.bitcoin.usd);
  const inrBitcoin = numberWithCommasIND(response && response.bitcoin.inr);

  console.log(response && response);
  return (
    <div>
      {/* <div className="flex items-center gap-2 mb-5 "> */}
      <div className=" items-center gap-2 mb-5 hidden md:flex">
        <BitcoinImg />
        <span className=" font-sans font-bold text-2xl">Bitcoin</span>
        <span className=" font-sans text-gray-600 mr-4">BTC</span>
        <button className=" font-sans font-medium bg-slate-500 border-none rounded-md p-3 text-white ">
          Rank #1
        </button>
      </div>
      <div className="flex items-center gap-3">
        <span className=" font-sans font-bold text-2xl mr-4">{usdBitcoin}</span>
        <span className=" bg-green-100  text-green-500 p-1">
          <UpArrow />
          2.51%
        </span>
        <span className=" text-zinc-500">(24H)</span>
      </div>
      <div
        className="pb-4 mb-6"
        style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
      >
        <span className=" font-sans font-normal">{inrBitcoin}</span>
      </div>
    </div>
  );
};

export default BitcoinFirst;
