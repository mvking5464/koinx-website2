//

import { ColorLine } from "../../assets/logo.jsx";
import CardComponent from "../cardComponet.jsx";
import Fundamentals from "./fundamentals.jsx";

export default function PerformanceDiv() {
  //

  return (
    <div>
      <CardComponent>
        <div className=" text-[#44475B]">
          <div className=" font-bold text-2xl font-sans mb-4">Performance</div>
          <div className=" flex justify-between items-center ">
            <div className=" text-center">
              <div className="m-2">Today's Low</div>
              <div className="m-2">46,930.22</div>
            </div>
            <ColorLine />
            <div>
              <div className="m-2">Today's High</div>
              <div className="m-2">49,343.83</div>
            </div>
          </div>

          <div className=" flex justify-between items-center">
            <div className=" text-center">
              <div className="m-2">Today's Low</div>
              <div className="m-2">46,930.22</div>
            </div>
            <ColorLine />
            <div>
              <div className="m-2">Today's High</div>
              <div className="m-2">49,343.83</div>
            </div>
          </div>
          <Fundamentals />
        </div>
      </CardComponent>
    </div>
  );
}
