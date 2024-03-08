//

import { ColorLine, SmallTriangle } from "../../assets/logo.jsx";
import CardComponent from "../cardComponet.jsx";
import Fundamentals from "./fundamentals.jsx";

export default function PerformanceDiv() {
  //

  return (
    <div>
      <CardComponent>
        <div className=" text-[#44475B]">
          <div className=" font-bold text-2xl font-sans mb-4">Performance</div>
          {/* <div className=" flex justify-between items-center ">
            <div className=" text-center">
              <div className="m-2">Today's Low</div>
              <div className="m-2">46,930.22</div>
            </div>
            <ColorLine />
            <div>
              <div className="m-2">Today's High</div>
              <div className="m-2">49,343.83</div>
            </div>
          </div> */}
          <div className="">
            <div className="flex justify-between font-sans text-slate-500 text-sm mmbg-fuchsia-200">
              <div className=" mmbg-green-200">
                <div className="m-2">Today's Low</div>
                <div className="m-2">46,930.22</div>
              </div>
              <div className=" my-auto flex w-[70%]">
                <div className="bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] h-1 w-[100%] inline-block rounded-md my-auto"></div>
              </div>
              <div className=" ml-2 mmbg-red-200 text-right">
                <div className="m-2">Today's High</div>
                <div className="m-2 ">49,343.83</div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center relative bottom-8">
              <div>
                <SmallTriangle />
              </div>
              <div>49,343.83</div>
            </div>

            <div className="flex justify-between font-sans text-slate-500 text-sm mmbg-fuchsia-200">
              <div className=" mmbg-green-200">
                <div className="m-2">52W Low</div>
                <div className="m-2">16,930.22</div>
              </div>
              <div className=" my-auto flex w-[70%]">
                <div className="bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] h-1 w-[100%] inline-block rounded-md my-auto"></div>
              </div>
              <div className=" ml-2 mmbg-red-200 text-right">
                <div className="m-2">52W High</div>
                <div className="m-2">49,743.83</div>
              </div>
            </div>
          </div>

          {/* <div className=" grid md:grid-cols-11 grid-cols-5 font-sans text-slate-500 text-sm ">
            <div className="m-auto text-center md:col-span-1 bg-green-200">
              <div className="m-2">Today's Low</div>
              <div className="m-2">46,930.22</div>
            </div>
            <div className=" md:col-span-7 col-span-4 my-auto flex bg-blue-300 ">
              <div className="bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] h-2 w-[76%] inline-block rounded-md my-auto"></div>
            </div>
            <div className=" ml-2 md:col-span-1 bg-red-200 ">
              <div className="m-2">Today's High</div>
              <div className="m-2">49,343.83</div>
            </div>
          </div> */}

          {/* <div className=" flex justify-between items-center">
            <div className=" text-center">
              <div className="m-2">Today's Low</div>
              <div className="m-2">46,930.22</div>
            </div>
            <ColorLine />
            <div>
              <div className="m-2">Today's High</div>
              <div className="m-2">49,343.83</div>
            </div>
          </div> */}
          <Fundamentals />
        </div>
      </CardComponent>
    </div>
  );
}
