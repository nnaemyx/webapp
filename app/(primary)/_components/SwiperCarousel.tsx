"use client"

import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { items } from "@/components/data/items";

const SwiperCarousel: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="2xl:max-w-[1450px] hidden xl:flex xl:max-w-[1330px] relative mx-auto">
      <Swiper
        navigation={false}
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={3}
        className="productSlider xl:w-[1210px] 2xl:w-[1230px] mx-auto min-h-[450px] flex justify-center"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[389px] bg-[#001941] rounded-[37px] h-[389px]">
              <Image src={item.imageSrc} alt="image" width={389} height={389} />
              <div className="px-6 py-1">
                <p className="text-white text-[24px] font-inter font-bold">{item.title}</p>
                <p className="text-white text-[14px] font-inter font-normal leading-[145%]">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div onClick={handlePrev} className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <div className="text-white bg-[#001941] rounded-full text-3xl cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="31" height="31" fill="rgba(255,255,255,1)">
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </div>
      </div>
      <div onClick={handleNext} className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <div className="text-white bg-[#001941] rounded-full text-3xl cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="31" height="31" fill="rgba(255,255,255,1)">
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SwiperCarousel;
