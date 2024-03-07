import { numberWithCommas } from "../calculation.js";

const FootGraph = ({ value }) => {
  //   console.log(value);
  //   console.log(value.symbol);
  const changes = value.data.price_change_percentage_24h.usd;
  const calculate = (Math.round(changes * 100) / 100).toFixed(2);
  let totalCap = numberWithCommas(value.data.market_cap_btc);
  const finalCal = calculate > 0 ? `+${calculate}%` : `${calculate}%`;

  return (
    <div>
      <div className=" border-solid border rounded-md border-gray-500 p-4 m-4 ">
        <div className=" flex items-center gap-2 mb-2">
          <img className="w-6 h-5 " src={value.small} alt="" />
          <span>{value.symbol}</span>
          <span
            className={`${
              calculate > 0
                ? "text-green-500 bg-green-200"
                : "text-red-500 bg-red-200"
            }`}
          >
            {finalCal}
          </span>
        </div>
        <div>
          <span>{totalCap}</span>
        </div>
        <div>
          <img
            className="stroke-blue-500"
            src={value.data.sparkline}
            alt="graph"
          />
        </div>
      </div>
    </div>
  );
};

export default FootGraph;