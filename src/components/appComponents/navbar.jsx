//

import { DropDownIcon, Logo1 } from "../../assets/logo.jsx";
import MyNavButton from "../navbar/button.jsx";
import MyNavText from "../navbar/navText.jsx";

export default function MyNavBar() {
  //

  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-2 bg-blue-30">
        <div className="p-4 flex ml-3">
          <Logo1 />
        </div>
        <div className="md:flex justify-end items-center gap-6 p-1 hidden">
          <MyNavText text={"Crypto Taxes"} />
          <MyNavText text={"Free Tools"} />
          <MyNavText text={"Resource Center"} />
          <MyNavButton text={"Get Started"} />
        </div>
        <div className=" md:hidden flex justify-end items-center text-right">
          <DropDownIcon />
        </div>
      </div>
    </div>
  );
}
