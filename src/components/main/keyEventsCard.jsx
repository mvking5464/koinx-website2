// import { CardOne } from "../../assets/logo";
// import CardComponent from "../cardComponet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../slider.jsx";
import KeyEventsSlider from "./keyEventsSlider.jsx";

const KeyEventsCard = () => {
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
        <KeyEventsSlider />
        <KeyEventsSlider />
      </Slider>
    </div>
  );
};

export default KeyEventsCard;
