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

import { FaCertificate, FaUserGraduate } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-white shadow-md border  rounded-lg  mx-auto w-[320px] mb-3 hover:drop-shadow-2xl">
      {/* Content */}
      <div className="relative border-b pb-4 bg-black rounded-t-lg px-6 py-2">
        <div className="text-sm font-semibold text-white uppercase tracking-wider">
          {/* Career path */}
        </div>
      </div>
      <div className="px-6 pb-4">
        <h2 className="text-2xl font-bold mt-4">Full-Stack Engineer</h2>
        <p className="text-gray-700 mt-2 text-sm">
          A full-stack engineer can get a project done from start to finish,
          back-end to front-end.
        </p>
        <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
        <div className="text-gray-600">
          Includes <span className="font-semibold">51 Courses</span>
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
        <div className="text-gray-600 flex items-center">
          <FaCertificate className="h-4 w-4 mr-2" />
          With{" "}
          <span className="font-semibold ml-1">Professional Certification</span>
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>
        <div className="text-gray-600 flex items-center justify-between">
          <div className="flex items-center">
            <FaUserGraduate className="h-4 w-4 mr-2" />
            <span className="font-semibold pr-1">Beginner </span>
            <span>Friendly</span>
          </div>
          <span className="ml-auto font-semibold">150 hrs</span>
        </div>
      </div>
    </div>
  );
};
function TrendingCareer() {
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
        spaceBetween={20}
        slidesPerView={3.5}
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
            slidesPerView: 3.5,
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

export default TrendingCareer;
