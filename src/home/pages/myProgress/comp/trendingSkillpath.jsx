import React from "react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./../../../pages/myFeed/component/swiper.css";

import { FaHeart, FaDownload, FaUsers, FaBookReader } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <img
          src="https://dummyimage.com/48x48" // Replace with actual icon/image URL
          alt="App Icon"
          className="h-8 w-8"
        />
        <div className="flex items-center text-gray-500 text-sm">
          <FaHeart className="mr-1" />
          4.9
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">Frontend Developer</h2>

      {/* Stats Section */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">
          <p className="text-xs">Enrolled</p>
          <div className="flex items-center mt-1">
            <FaUsers className="h-4 w-4 mr-1 text-gray-500" />
            <span>9.2k</span>
          </div>
        </div>

        <div className="text-gray-600">
          <p className="text-xs">Lessons</p>
          <div className="flex items-center mt-1">
            <FaBookReader className="h-4 w-4 mr-1 text-gray-500" />
            <span>90</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>

      {/* Download Section */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-gray-600 text-sm">Frontend Developer</span>
        <button className="flex items-center px-3 py-1 bg-black text-white rounded-md text-sm font-semibold">
          Start
        </button>
      </div>
    </div>
  );
};
export default function TrendingSkillPath() {
  return (
    <div className="swiper-container relative">
      <div className="my-swiper-button-next-uni">
        <GrNext size={25} />
      </div>
      <div className="my-swiper-button-prev-uni">
        <GrPrevious size={25} />
      </div>

      <Swiper
        className="w-[95%]"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        navigation={{
          nextEl: ".my-swiper-button-next-uni",
          prevEl: ".my-swiper-button-prev-uni",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        //   autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        //   loop={true}
        //   grabCursor={true}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
