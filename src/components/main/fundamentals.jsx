import { InformationIcon } from "../../assets/logo.jsx";
import LightDarkText from "./light_dark_text.jsx";

const Fundamentals = () => {
  return (
    <div className="mt-4">
      <div className=" flex items-center">
        <span className=" font-semibold font-sans mr-2 text-gray-800">
          Fundamentals
        </span>
        <span>
          <InformationIcon />
        </span>
      </div>
      <div className="grid gap-x-8 md:grid-cols-2 md:grid-rows-5 md:grid-flow-col grid-cols-1">
        <LightDarkText lText={"Bitcoin Price"} dText={"$16,815.46"} />
        <LightDarkText
          lText={"24h Low / 24h High"}
          dText={"$16,382.07 / $16,874.12"}
        />
        <LightDarkText
          lText={"7d Low / 7d High"}
          dText={"$16,382.07 / $16,874.12"}
        />
        <LightDarkText lText={"Trading Volume"} dText={"$23,249,202,782"} />
        <LightDarkText lText={"Market Cap Rank"} dText={"#1"} />
        <LightDarkText lText={"Market Cap"} dText={"$323,507,209,047"} />
        <LightDarkText lText={"Market Cap Dominance"} dText={"38.343%"} />
        <LightDarkText lText={"Volume / Market Cap"} dText={"0.0718"} />
        <LightDarkText
          lText={"All-Time High"}
          dText={"$69,044.77"}
          color={"text-red-500 ml-2"}
          rgText={"-75.6%"}
          date1={"Nov 10,2021 (about 1 year)"}
        />
        <LightDarkText
          lText={"All-Time Low"}
          dText={"$67.81"}
          rgText={"24729.1%"}
          color={"text-green-500 ml-2"}
          date1={"Jul 06, 2013 (over 9 years)"}
        />
      </div>
    </div>
  );
};

export default Fundamentals;
