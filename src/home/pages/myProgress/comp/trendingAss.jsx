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
import { FaStar } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import "./../../../pages/myFeed/component/swiper.css";

const Card = () => {
  return (
    <div className="flex items-center justify-cente dark-mode:bg-gray-900">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-[300px] h-[280px] dark-mode:bg-gray-800">
        {/* Free Badge */}
        <div className="absolute top-4 right-4 bg-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Free
        </div>

        {/* SVG Icons */}
        <div className="absolute top-0 left-0 p-2 text-green-300 opacity-15">
          <BsFillEmojiSmileFill size={55} />
        </div>
        <div className="absolute bottom-0 right-0 p-2 text-pink-300 opacity-15">
          <BsFillEmojiSmileFill size={55} />
        </div>

        {/* Centered Card Content */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-xs text-gray-400">Frontend</p>
          <h1 className="text-lg font-semibold my-1 text-gray-800 dark-mode:text-white">
            E-commerce
          </h1>
          <div className="flex gap-5 mt-2">
            <div className="flex flex-col">
              <div>Rating</div>
              <div>5.0</div>
            </div>
            <div className="flex flex-col">
              <div>Enrolled</div>
              <div>23k</div>
            </div>
            <div className="flex flex-col">
              <div>Lesson</div>
              <div>5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function TrendingAss() {
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
