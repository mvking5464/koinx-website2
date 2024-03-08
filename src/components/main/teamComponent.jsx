const TeamComponent = ({ image, name, designation, information }) => {
  return (
    <>
      <div
        className={` flex flex-col md:flex-row items-center rounded-md m-2 my-6 mr-4 p-4 pl-4 py-2 bg-[#E8F4FD]`}
      >
        <div>
          <div className="flex flex-col items-center font-inter ml-3">
            <img className=" rounded-md" src={image} alt="img" />
            <span className=" font-semibold text-sm">{name}</span>
            <span className=" text-slate-500 text-xs">{designation}</span>
          </div>
        </div>
        <div className="ml-6 my-2">
          <div className="font-inter my-5 text-sm  text-[#3E424A] leading-6">
            {information}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComponent;
