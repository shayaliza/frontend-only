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
import timeLogo from "../../../assets/time.svg";
import lessonLogo from "../../../assets/lessons.svg";
import coinLogo from "../../../assets/coin.svg";

function TrendingCareer() {
  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
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
        <div className="m-4 bg-white dark:bg-gray-800 rounded-lg flex flex-col">
          <div className="bg-red-500 flex flex-col justify-between p-4 rounded-t-lg">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-white">
                Data Scientist
              </h1>
              <p className="bg-white dark:bg-gray-700 text-red-500 px-3 py-1 rounded-full text-xs font-medium">
                Free
              </p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center">
                <img src={timeLogo} alt="time" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">15 hours</p>
              </div>
              <div className="flex items-center">
                <img src={lessonLogo} alt="lessons" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">9 lessons</p>
              </div>
              <div className="flex items-center">
                <img src={coinLogo} alt="coins" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">779 coins</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              maxime esse blanditiis vitae animi eaque adipisci, beatae
              laboriosam vel hic illum eum omnis consequuntur quas.
            </p>
            <div className="mt-2 text-gray-600 dark:text-gray-400 flex flex-col space-y-2 text-sm">
              <div>✔ Free Career Handbook</div>
              <div>✔ Lifetime Access</div>
              <div>✔ Industry Recognized Certificate</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <button className="w-full h-10 border border-black dark:border-gray-500 rounded-md text-black dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="m-4 bg-white dark:bg-gray-800 rounded-lg flex flex-col">
          <div className="bg-red-500 flex flex-col justify-between p-4 rounded-t-lg">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-white">
                Data Scientist
              </h1>
              <p className="bg-white dark:bg-gray-700 text-red-500 px-3 py-1 rounded-full text-xs font-medium">
                Free
              </p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center">
                <img src={timeLogo} alt="time" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">15 hours</p>
              </div>
              <div className="flex items-center">
                <img src={lessonLogo} alt="lessons" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">9 lessons</p>
              </div>
              <div className="flex items-center">
                <img src={coinLogo} alt="coins" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">779 coins</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              maxime esse blanditiis vitae animi eaque adipisci, beatae
              laboriosam vel hic illum eum omnis consequuntur quas.
            </p>
            <div className="mt-2 text-gray-600 dark:text-gray-400 flex flex-col space-y-2 text-sm">
              <div>✔ Free Career Handbook</div>
              <div>✔ Lifetime Access</div>
              <div>✔ Industry Recognized Certificate</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <button className="w-full h-10 border border-black dark:border-gray-500 rounded-md text-black dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="m-4 bg-white dark:bg-gray-800 rounded-lg flex flex-col">
          <div className="bg-red-500 flex flex-col justify-between p-4 rounded-t-lg">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold text-white">
                Data Scientist
              </h1>
              <p className="bg-white dark:bg-gray-700 text-red-500 px-3 py-1 rounded-full text-xs font-medium">
                Free
              </p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center">
                <img src={timeLogo} alt="time" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">15 hours</p>
              </div>
              <div className="flex items-center">
                <img src={lessonLogo} alt="lessons" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">9 lessons</p>
              </div>
              <div className="flex items-center">
                <img src={coinLogo} alt="coins" className="w-5 h-5" />
                <p className="text-white text-sm ml-2">779 coins</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              maxime esse blanditiis vitae animi eaque adipisci, beatae
              laboriosam vel hic illum eum omnis consequuntur quas.
            </p>
            <div className="mt-2 text-gray-600 dark:text-gray-400 flex flex-col space-y-2 text-sm">
              <div>✔ Free Career Handbook</div>
              <div>✔ Lifetime Access</div>
              <div>✔ Industry Recognized Certificate</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <button className="w-full h-10 border border-black dark:border-gray-500 rounded-md text-black dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TrendingCareer;
