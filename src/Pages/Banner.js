import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="https://www.lukas-petereit.com/wp-content/uploads/2017/03/Bastei-Saxon-Switzerland-S%c3%a4chsische-Schweiz-Landscape-Sunrise-Fog-Clouds-Photography-Photo-Location-Travel-Rocks-Mountains-Nature-Beauty.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="http://bpsop.com/wp-content/uploads/2015/05/xiapu1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.smartertravel.com/wp-content/uploads/2016/08/travel-tourist-photographer-lens-camera-sunset.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
