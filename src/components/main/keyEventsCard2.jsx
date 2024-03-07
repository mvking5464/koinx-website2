// import { CardOne } from "../../assets/logo";
// import CardComponent from "../cardComponet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../slider.jsx";
import KeyEventsSlider from "./keyEventsSlider.jsx";
import { CardOne, CardTwo } from "../../assets/logo.jsx";

const KeyEventsCard2 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <KeyEventsSlider
          color={"bg-[#0082FF]"}
          icon={<CardOne />}
          title={`Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
        mattis enim tincidunt.`}
          discription={`Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
        faucibus metus quis. Amet sapien quam viverra adipiscing
        condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
        sit nisi viverra natoque lacinia libero enim.`}
        />
        <KeyEventsSlider
          color={"bg-[#0FBA83]"}
          icon={<CardTwo />}
          title={`Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
        mattis enim tincidunt.`}
          discription={`Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
        faucibus metus quis. Amet sapien quam viverra adipiscing
        condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
        sit nisi viverra natoque lacinia libero enim.`}
        />
      </Slider>
    </div>
  );
};

export default KeyEventsCard2;
