import UseAxios from "../../hooks/useAxios.jsx";
import FootGraph from "./footGraph.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../slider.jsx";

const HorizontalCoin2 = ({ text }) => {
  const { response } = UseAxios("search/trending");

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" w-auto">
      <div></div>
      <h3 className=" font-bold text-2xl font-sans ml-4">{text}</h3>
      <Slider {...settings}>
        {response &&
          response.coins.map((i) => {
            return (
              <div>
                <FootGraph key={i.item.coin_id} value={i.item} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default HorizontalCoin2;
