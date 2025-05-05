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
            src="https://i.ibb.co.com/Lz23Wh0Y/smart-home-interface-with-augmented-realty-iot-object-interior-design-756748-3188.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/v4K51Gvw/kitchen-counter-with-remote-control-it-intelligent-home-automation-system-adjusts-lighting-temperatu.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/qLJjS8qq/Figure2-Smart-Home.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/vv4k3zr1/images.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co.com/GfYHnzr5/smart-home-interface-with-augmented-realty-iot-object-interior-design-756748-3157.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
