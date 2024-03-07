import { DownArrow, UpArrow } from "../../assets/logo.jsx";

const TopThree = ({ props }) => {
  //   console.log(props);
  const changes = props.data.price_change_percentage_24h.usd;
  const calculate = (Math.round(changes * 100) / 100).toFixed(2);

  let ans = String(calculate);
  if (calculate < 0) {
    ans = ans.replace(/\-/g, "");
  }
  //   console.log(ans);

  return (
    <div className=" py-2">
      <div className=" flex justify-between font-sans">
        <div className=" flex">
          <img className="w-6 h-5" src={props.small} alt="" />
          <div className="mx-2">{props.name}</div>
          <div>({props.symbol})</div>
        </div>
        <span
          className={`${
            calculate > 0
              ? "text-green-500 bg-green-200"
              : "text-red-500 bg-red-200"
          } flex p-1 gap-1`}
        >
          <div>{calculate > 0 ? <UpArrow /> : <DownArrow />}</div>
          <div>{calculate > 0 ? `${+calculate}%` : `${ans}%`}</div>
        </span>
      </div>
    </div>
  );
};

export default TopThree;
