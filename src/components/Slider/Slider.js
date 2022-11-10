import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='w-3/4 mx-auto mb-4 rounded-2xl'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img
              alt=""
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg"
              className="w-full rounded-2xl"
            ></img></SwiperSlide>
        <SwiperSlide> <img
              alt=""
              src="https://data.travelchinaguide.com/tour/image/11038/sundarbans-national-park-bangladesh.jpg"
              className="w-full rounded-2xl"
            /></SwiperSlide>
        <SwiperSlide><img
              alt=""
              src="https://i.pinimg.com/736x/95/c6/98/95c69841b5f50f013135ed351d0870bf.jpg"
              className="w-full rounded-2xl"
            /></SwiperSlide>
        <SwiperSlide><img
              alt=""
              src="https://uzbangla.com/wp-content/uploads/2019/05/13987729_10204820026499748_730179063_o-e1473333272353-1440x564_c.jpg"
              className="w-full rounded-2xl"
            /></SwiperSlide>
        
      </Swiper>
            {/* <div className=" ">
        <div className="carousel w-2/6 mx-auto rounded ">
          <div id="item1" className="carousel-item w-full">
            <img
              alt=""
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg"
              className="w-full "
            ></img>
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              alt=""
              src="https://data.travelchinaguide.com/tour/image/11038/sundarbans-national-park-bangladesh.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              alt=""
              src="https://i.pinimg.com/736x/95/c6/98/95c69841b5f50f013135ed351d0870bf.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              alt=""
              src="https://uzbangla.com/wp-content/uploads/2019/05/13987729_10204820026499748_730179063_o-e1473333272353-1440x564_c.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div> */}
        </div>
    );
};

export default Slider;