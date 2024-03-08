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
        <div className=" grid grid-cols-6 my-4">
          <div className=" col-span-1 flex items-center justify-center">
            <div className=" mx-auto h-[40%] items-center rounded-full p-[20%] m-4 bg-green-50 text-[#0FBA83] font-semibold font-sans text-3xl text-center ">
              <span>76</span>
              <span className=" text-sm">%</span>
            </div>
          </div>
          <div className="col-span-5 my-auto">
            <div className=" grid md:grid-cols-10 grid-cols-5 font-sans text-slate-500 py-2 text-sm md:mr-20 md:ml-0 ml-2">
              <div className="m-auto ">Buy</div>
              <div className=" md:col-span-9 col-span-4 my-auto flex  ">
                <div className="bg-[#00B386] h-2 w-[76%] inline-block rounded-md my-auto"></div>
                <div className=" ml-2">76%</div>
              </div>
            </div>
            <div className=" grid md:grid-cols-10 grid-cols-5 font-sans text-slate-500 py-2 text-sm md:mr-20 md:ml-0 ml-2">
              <div className="m-auto ">Buy</div>
              <div className=" md:col-span-9 col-span-4  my-auto flex  ">
                <div className="bg-[#C7C8CE] h-2 w-[8%] inline-block rounded-md  my-auto "></div>
                <div className=" ml-2 ">8%</div>
              </div>
            </div>
            <div className=" grid md:grid-cols-10 grid-cols-5 font-sans text-slate-500 py-2 text-sm md:mr-20 md:ml-0 ml-2">
              <div className="m-auto">Buy</div>
              <div className=" md:col-span-9 col-span-4  my-auto flex ">
                <div className="bg-[#F7324C] h-2 w-[16%] inline-block rounded-md  my-auto "></div>
                <div className=" ml-2">16%</div>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
