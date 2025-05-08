// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper *:min-w-fit"
      >
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/QWP85hX/Truly-subscription-box-banner-3.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/gLrNTtpS/Voice-Commerce-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/JR0xKB3x/TB-homepage.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/W4fxbhqv/Packaging-Boxes-WEB-Banner-USA.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/SD185mNb/Subscription-Boxes-Blog-r1v2.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
