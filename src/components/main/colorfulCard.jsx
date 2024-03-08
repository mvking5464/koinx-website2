import { RightArrow } from "../../assets/logo.jsx";

const ColorfulCard = ({ img, text, color }) => {
  return (
    <>
      <div className={` flex rounded-md m-2 mr-4 p-4 pl-2 py-2 ${color}`}>
        <div className=" object-contain ">
          <img src={img} alt="img" />
        </div>
        <div className="ml-6 my-2">
          <div className=" font-sans font-medium text-xl text-white mb-3">
            {text}
          </div>

          <button className=" flex items-center rounded-md border-none font-semibold px-5 py-2">
            <span>Check Now</span>
            <span>
              <RightArrow />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorfulCard;
