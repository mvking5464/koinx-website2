//

import {
  GreenLine,
  GreyLine,
  InformationIcon,
  RedLine,
} from "../../assets/logo";
import CardComponent from "../cardComponet.jsx";
import KeyEventsCard from "./keyEventsCard.jsx";
import KeyEventsCard2 from "./keyEventsCard2.jsx";

export default function SentimentsDiv() {
  //

  return (
    <div>
      <CardComponent>
        <div className=" font-bold text-2xl font-sans">Sentiments</div>
        <div className=" flex items-center">
          <span className=" font-semibold font-sans mr-2 text-gray-800">
            Key Events
          </span>
          <span>
            <InformationIcon />
          </span>
        </div>
        <div className="md:block hidden ">
          <KeyEventsCard />
        </div>
        <div className="md:hidden block ">
          <KeyEventsCard2 />
        </div>
        <div className=" flex items-center">
          <span className=" font-semibold font-sans mr-2 text-gray-800">
            Analyst Estimates
          </span>
          <span>
            <InformationIcon />
          </span>
        </div>
        <div className=" grid grid-cols-5">
          <div className=" col-span-1 flex items-center justify-center">
            <div className=" w-10 h-10 mx-auto  items-center rounded-full p-8 m-4 bg-green-50 text-[#0FBA83] font-semibold font-sans text-3xl text-center ">
              <span>76</span>
              <span className=" text-sm">%</span>
            </div>
          </div>
          <div className=" col-span-4 flex flex-col justify-around font-sans text-slate-500 py-4 text-sm">
            <div>
              <span>Buy</span>
              <span className=" mx-4">
                <GreenLine />
              </span>
              <span>76%</span>
            </div>
            <div>
              <span>Hold</span>
              <span className=" mx-4">
                <GreyLine />
              </span>
              <span>8%</span>
            </div>
            <div>
              <span>Sell</span>
              <span className=" mx-4">
                <RedLine />
              </span>
              <span>16%</span>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
