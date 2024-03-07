import UseAxios from "../../hooks/useAxios.jsx";
import FootGraph from "./footGraph.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../slider.jsx";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const HorizontalCoin = ({ text }) => {
  const { response } = UseAxios("search/trending");
  //   console.log(response && response.coins[2].item.symbol);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // return (
  //   // <div className=" flex flex-row font-sans">
  //   <Carousel infiniteLoop showArrows={true} width={200}>
  //     {response &&
  //       response.coins.map((i) => {
  //         return (
  //           <div>
  //             <FootGraph key={i.item.coin_id} value={i.item} />
  //           </div>
  //         );
  //       })}
  //   </Carousel>
  // );
  return (
    // <div className=" flex flex-row font-sans">
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

export default HorizontalCoin;
