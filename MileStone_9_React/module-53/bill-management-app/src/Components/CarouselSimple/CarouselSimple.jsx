import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSimple = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[188px] lg:h-[377px] rounded-lg"
            src="https://static.vecteezy.com/system/resources/previews/002/216/846/non_2x/electricity-trendy-banner-vector.jpg"
            alt="slider image"
          />
        </div>
        <div>
          <img
            className="w-full h-[188px] lg:h-[377px] rounded-lg"
            src="https://www.shutterstock.com/image-photo/burning-gas-flame-on-stove-260nw-2235214387.jpg"
            alt="slider image"
          />
        </div>
        <div>
          <img
            className="w-full h-[188px] lg:h-[377px] rounded-lg"
            src="https://img.freepik.com/free-vector/flat-design-metaverse-concept-twitch-banner_23-2149485288.jpg"
            alt="slider image"
          />
        </div>
        <div>
          <img
            className="w-full h-[188px] lg:h-[377px] rounded-lg"
            src="https://png.pngtree.com/background/20210710/original/pngtree-fresh-water-surface-banner-in-winter-hydrating-season-picture-image_1048132.jpg"
            alt="slider image"
          />
        </div>
        <div>
          <img
            className="w-full h-[188px] lg:h-[377px] rounded-lg"
            src="https://static.vecteezy.com/system/resources/previews/001/868/707/non_2x/credit-card-online-payment-concept-banner-free-vector.jpg"
            alt="slider image"
          />
        </div>
        <div>
          <img
            className="w-full h-[188px] lg:h-[377px] rounded-lg"
            src="https://c8.alamy.com/comp/TXFDWB/tuition-vector-landing-page-template-individual-lessons-web-banner-design-online-education-e-learning-website-homepage-bachelor-master-degree-illustration-teacher-tutor-coach-services-TXFDWB.jpg"
            alt="slider image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSimple;
