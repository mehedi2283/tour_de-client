import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'
import slider1 from '../../assets/sliderimg 1 .jpg';
import slider2 from '../../assets/img slider 2.webp';
import slider3 from '../../assets/slider_img_3_1040x564.jpg';
import slider4 from '../../assets/slider img 4_1040x564.webp';


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
              src={slider1}
              className="w-full rounded-2xl object-fill"
            ></img></SwiperSlide>
        <SwiperSlide> <img
              alt=""
              src={slider2}
              className={slider2}
            /></SwiperSlide>
        <SwiperSlide><img
              alt=""
              src={slider3}
              className="w-full rounded-2xl object-fill "
            /></SwiperSlide>
        <SwiperSlide><img
              alt=""
              src={slider4}
              className="w-full rounded-2xl object-fill"
            /></SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Slider;