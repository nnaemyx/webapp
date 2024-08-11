"use client";

import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { items } from "@/components/data/items";

const MobileSwiper: React.FC = () => {
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
    <div className="xl:hidden block mt-[17px] py-[27px] bg-[#F2F3F4] relative mx-auto">
      <p className="text-center text-[19px] mb-[27px] font-medium font-inter text-[#A7A7A7]">
        Featured Events
      </p>

      <Swiper
        navigation={false}
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        className="productSlider max-w-[300px] mx-auto w-full flex justify-center"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[289px] bg-[#001941] rounded-[37px] h-[289px]">
              <Image src={item.imageSrc} alt="image" width={289} height={289} />
              <div className="px-6 py-1">
                <p className="text-white text-[14px] font-inter font-bold">
                  {item.title}
                </p>
                <p className="text-white text-[12px] font-inter font-normal leading-[145%]">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={handlePrev}
        className="absolute top-1/2 transform -translate-y-1/2 left-4"
      >
        <div className="text-white bg-[#001941] rounded-full text-3xl cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="31"
            height="31"
            fill="rgba(255,255,255,1)"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </div>
      </div>
      <div
        onClick={handleNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-7"
      >
        <div className="text-white bg-[#001941] rounded-full text-3xl cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="31"
            height="31"
            fill="rgba(255,255,255,1)"
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MobileSwiper;
