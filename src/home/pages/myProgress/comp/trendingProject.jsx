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
import BannerImage from "../../../assets/banner.png";
import coinLogo from "../../../assets/coin.svg";
import cardTimeLogo from "../../../assets/card_time.svg";
import { GrNext, GrPrevious } from "react-icons/gr";

import "./../../../pages/myFeed/component/swiper.css";

function TrendingProject() {
  return (
    <div className="swiper-container relative">
      <div className="my-swiper-button-next-uni2">
        <GrNext size={25} />
      </div>
      <div className="my-swiper-button-prev-uni2">
        <GrPrevious size={25} />
      </div>

      <Swiper
        className="w-[95%]"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        navigation={{
          nextEl: ".my-swiper-button-next-uni2",
          prevEl: ".my-swiper-button-prev-uni2",
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
          <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden">
            <div className="h-[150px] max-[900px]:mb-4">
              <img
                src={BannerImage}
                alt="card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-4 pb-2">
                <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  Introduction to Python
                </p>
              </div>
              <div className="flex justify-between p-2 px-4">
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
              </div>
              <div className="flex items-center px-4 pt-2 text-xs">
                <p className="text-gray-700 dark:text-gray-400 font-semibold">
                  Author:
                </p>
                <div className="flex items-center ml-2">
                  <img src={coinLogo} alt="author" className="w-4 h-4 mr-1" />
                  <h3 className="text-gray-700 dark:text-gray-300 font-semibold">
                    Alan Biju
                  </h3>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden">
            <div className="h-[150px] max-[900px]:mb-4">
              <img
                src={BannerImage}
                alt="card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-4 pb-2">
                <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  Introduction to Python
                </p>
              </div>
              <div className="flex justify-between p-2 px-4">
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
              </div>
              <div className="flex items-center px-4 pt-2 text-xs">
                <p className="text-gray-700 dark:text-gray-400 font-semibold">
                  Author:
                </p>
                <div className="flex items-center ml-2">
                  <img src={coinLogo} alt="author" className="w-4 h-4 mr-1" />
                  <h3 className="text-gray-700 dark:text-gray-300 font-semibold">
                    Alan Biju
                  </h3>
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
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden">
            <div className="h-[150px] max-[900px]:mb-4">
              <img
                src={BannerImage}
                alt="card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-4 pb-2">
                <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  Introduction to Python
                </p>
              </div>
              <div className="flex justify-between p-2 px-4">
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
              </div>
              <div className="flex items-center px-4 pt-2 text-xs">
                <p className="text-gray-700 dark:text-gray-400 font-semibold">
                  Author:
                </p>
                <div className="flex items-center ml-2">
                  <img src={coinLogo} alt="author" className="w-4 h-4 mr-1" />
                  <h3 className="text-gray-700 dark:text-gray-300 font-semibold">
                    Alan Biju
                  </h3>
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
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden">
            <div className="h-[150px] max-[900px]:mb-4">
              <img
                src={BannerImage}
                alt="card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-4 pb-2">
                <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  Introduction to Python
                </p>
              </div>
              <div className="flex justify-between p-2 px-4">
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <img src={cardTimeLogo} alt="time" className="w-5 h-5 mr-2" />
                  <p>16 hours</p>
                </div>
              </div>
              <div className="flex items-center px-4 pt-2 text-xs">
                <p className="text-gray-700 dark:text-gray-400 font-semibold">
                  Author:
                </p>
                <div className="flex items-center ml-2">
                  <img src={coinLogo} alt="author" className="w-4 h-4 mr-1" />
                  <h3 className="text-gray-700 dark:text-gray-300 font-semibold">
                    Alan Biju
                  </h3>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TrendingProject;
