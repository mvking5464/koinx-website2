import { CardOne, CardTwo } from "../../assets/logo.jsx";

const KeyEventsSlider = ({ color, icon, title, discription }) => {
  return (
    <div className="flex">
      <div className="bg-[#E8F4FD] rounded-lg p-2 m-2 py-5 flex h-50 w-96 font-sans">
        <div>
          <div className={`${color}  rounded-full p-1 m-1`}>{icon}</div>
        </div>
        <div className=" font-san2 font px-4">
          <div>{title}</div>
          <div className=" text-[#3E424A] mt-2">{discription}</div>
        </div>
      </div>
    </div>
  );
};

export default KeyEventsSlider;
