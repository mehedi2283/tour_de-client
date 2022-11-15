import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'


import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className=' mx-auto  mb-4 rounded-2xl slider-home '>
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
        className="mySwiper rounded-2xl h-96 w-4/5"
      >
        <SwiperSlide ><img
              alt=""
              src="https://i.ibb.co/5vptVgK/sliderimg-1.jpg "
              className="w-full rounded-2xl object-fill"
            ></img></SwiperSlide>
        <SwiperSlide> <img
              alt=""
              src="https://i.ibb.co/z8DVsJr/img-slider-2.webp"
              className="w-full rounded-2xl object-fill"
            /></SwiperSlide>
        <SwiperSlide><img
              alt=""
              src="https://i.ibb.co/7k4RMM4/slider-img-3-1040x564.jpg"
              className="w-full rounded-2xl object-fill "
            /></SwiperSlide>
        <SwiperSlide><img
              alt=""
              src="https://i.ibb.co/bXYtzNQ/slider-img-4-1040x564.webp"
              className="w-full rounded-2xl object-fill"
            /></SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Slider;