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

// images
import pyLogo from "../../../assets/python_logo.png";
import timeLogo from "../../../assets/time.svg";
import lessonLogo from "../../../assets/lessons.svg";
import coinLogo from "../../../assets/coin.svg";

function TrendingCourse() {
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <img
                src={pyLogo}
                alt="course-logo"
                className="w-10 h-10 rounded-full"
              />
              <div className="bg-yellow-300 dark:bg-yellow-500 px-2 py-1 rounded-sm">
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-800">
                  1250xp
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Introduction to SQL
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <img src={timeLogo} alt="time" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    15 hours
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={lessonLogo}
                    alt="lessons"
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    9 lessons
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={coinLogo} alt="coins" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    779 coins
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-white dark:bg-gray-700 text-black dark:text-gray-200 font-semibold py-2 px-4 border border-black dark:border-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                Start Course
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <img
                src={pyLogo}
                alt="course-logo"
                className="w-10 h-10 rounded-full"
              />
              <div className="bg-yellow-300 dark:bg-yellow-500 px-2 py-1 rounded-sm">
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-800">
                  1250xp
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Introduction to SQL
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <img src={timeLogo} alt="time" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    15 hours
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={lessonLogo}
                    alt="lessons"
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    9 lessons
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={coinLogo} alt="coins" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    779 coins
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-white dark:bg-gray-700 text-black dark:text-gray-200 font-semibold py-2 px-4 border border-black dark:border-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                Start Course
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <img
                src={pyLogo}
                alt="course-logo"
                className="w-10 h-10 rounded-full"
              />
              <div className="bg-yellow-300 dark:bg-yellow-500 px-2 py-1 rounded-sm">
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-800">
                  1250xp
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Introduction to SQL
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <img src={timeLogo} alt="time" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    15 hours
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={lessonLogo}
                    alt="lessons"
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    9 lessons
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={coinLogo} alt="coins" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    779 coins
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-white dark:bg-gray-700 text-black dark:text-gray-200 font-semibold py-2 px-4 border border-black dark:border-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                Start Course
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <img
                src={pyLogo}
                alt="course-logo"
                className="w-10 h-10 rounded-full"
              />
              <div className="bg-yellow-300 dark:bg-yellow-500 px-2 py-1 rounded-sm">
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-800">
                  1250xp
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Introduction to SQL
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <img src={timeLogo} alt="time" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    15 hours
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={lessonLogo}
                    alt="lessons"
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    9 lessons
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={coinLogo} alt="coins" className="w-4 h-4 mr-2" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    779 coins
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-white dark:bg-gray-700 text-black dark:text-gray-200 font-semibold py-2 px-4 border border-black dark:border-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                Start Course
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TrendingCourse;
