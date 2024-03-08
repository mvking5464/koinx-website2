//

import { BlueCircle, Circle, OrangeCircle } from "../../assets/logo.jsx";
import CardComponent from "../cardComponet.jsx";

export default function TokenomicsDiv() {
  //

  return (
    <div className="hidden md:block">
      <CardComponent>
        <h3 className=" font-bold text-2xl font-sans">Tokenomics</h3>
        <h5 className=" text-lg font-sans">Initial distribution</h5>
        <div className="flex ">
          <div className=" bg-blue-20">
            <Circle />
          </div>
          <div className=" ml-6 flex flex-col justify-center gap-6 ">
            <div>
              <BlueCircle />
              <span className=" ml-4 font-sans text-sm">
                Crowdsale investors: 80%
              </span>
            </div>
            <div>
              <OrangeCircle />
              <span className=" ml-4 font-sans text-sm">Foundation: 20%</span>
            </div>
          </div>
        </div>
        <p className="font-sans text-sm text-[#3E424A]  my-4  leading-6">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </CardComponent>
    </div>
  );
}
