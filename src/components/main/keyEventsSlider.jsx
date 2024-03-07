import { CardOne, CardTwo } from "../../assets/logo.jsx";

const KeyEventsSlider = () => {
  return (
    <div className="flex">
      <div className="bg-[#E8F4FD] rounded-lg p-2 m-2 py-5 flex h-50 w-96">
        <div>
          <div className=" bg-[#0082FF] rounded-full p-1 m-1">
            <CardOne />
          </div>
        </div>
        <div className=" font-san2 font px-4">
          <div>
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </div>
          <div className=" text-[#3E424A] mt-2">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </div>
        </div>
      </div>
      <div className="bg-[#E8F4FD] rounded-lg p-2 m-2 py-5  h-50 w-96 hidden md:flex">
        <div>
          <div className=" bg-[#0FBA83] rounded-full p-1 m-1">
            <CardTwo />
          </div>
        </div>
        <div className="  px-4">
          <div>
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </div>
          <div className=" text-[#3E424A] mt-2">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyEventsSlider;
