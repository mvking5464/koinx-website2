//

// import { ColorLine } from "../../assets/logo";
// import CardComponent from "../cardComponet";

export default function SelectorDiv() {
  //

  /////////////////==============>> Use this for responsiveness
  // class="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto"

  return (
    <div className="max-w-4xl px-2 w-full font-sans overflow-x-auto">
      {/* <div className="flex flex-row gap-6 h-8 rounded-md m-2 border-solid border-x-gray-400 border-t-gray-400"> */}

      <div
        class="flex flex-row justify-between h-8 mb-4 gap-4 pt-5 mx-8"
        style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
      >
        <div
          className=" font-semibold text-blue-600"
          style={{ borderBottom: "3px solid rgb(32, 131, 230)" }}
        >
          Overview
        </div>
        <div>Fundamentals</div>
        <div>News Insights</div>
        <div>Sentiments</div>
        <div>Team</div>
        <div>Technicals</div>
        <div>Tokenomics</div>
      </div>
    </div>
  );
}
