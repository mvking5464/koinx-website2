//

import CardComponent from "../cardComponet";
import TeamComponent from "./teamComponent";

export default function TeamDiv() {
  //

  return (
    <div>
      <CardComponent>
        <h3 className=" font-bold text-2xl font-sans  text-[#3E424A] my-4 leading-6">
          Team
        </h3>
        <p className="font-sans text-[#3E424A]  my-4  leading-6">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <TeamComponent
          image={"/faceImg1.svg"}
          name={"John smith"}
          designation={"Designation here"}
          information={` Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu`}
        />
        <TeamComponent
          image={"/faceImg2.svg"}
          name={"Elina Williams"}
          designation={"Designation here"}
          information={` Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu`}
        />
        <TeamComponent
          image={"/faceImg3.svg"}
          name={"John Smith"}
          designation={"Designation here"}
          information={` Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu`}
        />
      </CardComponent>
    </div>
  );
}
