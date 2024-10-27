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
import BannerImage from "../../../assets/banner.png";
import "./../../../pages/myFeed/component/swiper.css";

const Card = () => {
  return (
    <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden w-[320px]">
      <div className="h-[150px] max-[900px]:mb-4">
        <img
          src={BannerImage}
          alt="card"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between text-gray-600  text-sm px-4 my-2">
        <div>28942 students</div>
        <div>1h 13m</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="px-4 pb-2">
          <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
            Introduction to Python
          </p>
        </div>

        <div className="flex gap-2 items-center px-4 py-2">
          {/* <img src="https://dummyimage.com/38/38" className="rounded-full" /> */}
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
            }
            className="rounded-full h-10 w-10"
          />
          <div className="text-sm">
            <div>Author Name</div>
            {/* <div>Description</div> */}
          </div>
        </div>
        <div className="px-4 text-sm pt-1">
          <div className="flex items-center space-x-2">
            <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
              React
            </div>
            <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
              Kodo
            </div>
          </div>
        </div>
        <button className="w-[90%] mx-auto bg-white dark:bg-gray-700 text-black dark:text-gray-200 h-9 border border-black dark:border-gray-500 font-semibold rounded-md mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
          View in Detail
        </button>
      </div>
    </div>
  );
};
export default function TrendingCourse() {
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
          1000: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1500: {
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
