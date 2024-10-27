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
import BannerImage from "./images/event.jpeg";

const Card = () => {
  return (
    <div className="mx-auto">
      <img src={BannerImage} className="w-full h-[350px] rounded-md" />
      <div className="">
        <div className="flex justify-between text-gray-600 my-2 text-sm">
          <div>28942 students</div>
          <div>1h 13m</div>
        </div>
        <div className=" mb-4 font-semibold text-lg ">
          Project Name Project Name Project Name Project
        </div>
      </div>
      <div className="flex items-center justify-center border-black  border-2 p-2">
        Book A Seat
      </div>
    </div>
  );
};
export default function TrendingEvents() {
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
