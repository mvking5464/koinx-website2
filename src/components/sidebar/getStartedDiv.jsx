//

import { ImageNew, RightArrow } from "../../assets/logo.jsx";
import CardComponent from "../cardComponet";

export default function GetStartedDiv() {
  //

  return (
    // <CardComponent>
    <div className="p-5 text-white bg-[#0052FE] rounded-xl m-2 md:mt-12 mt-4 md:mr-10">
      <div className=" flex flex-col items-center justify-center">
        <div>
          <h3 className=" font-semibold font-sans text-2xl text-center px-9">
            Get started with KoinX for FREE
          </h3>
          <div className=" font-sans text-sm text-center pb-6 px-5">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </div>
        </div>
        <div>
          <ImageNew />
        </div>
        <button className="flex items-center border-none rounded-md text-black bg-white px-6 py-4 font-sans font-semibold">
          Get started for FREE
          <span>
            <RightArrow />
          </span>
        </button>
      </div>
    </div>
    // </CardComponent>
  );
}
