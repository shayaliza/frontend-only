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

function TrendingCourse() {
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
        <div class=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
          <div class=" flex items-center justify-between">
            <img
              src="/src/assets/python_logo.png"
              alt="course-logo"
              class="w-10 h-10 rounded-full"
            />
            <div class="resolution bg-yellow-300 px-2 py-1 rounded-sm">
              <p class="text-xs font-semibold">1250xp</p>
            </div>
          </div>
          <div class=" mt-4">
            <h1 class="text-lg font-semibold">Introduction to SQL</h1>
            <div class="my_progess_trending_card_options_holder flex items-center mt-2">
              <div class="flex items-center mr-4">
                <img
                  src="/src/assets/time.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">15 hours</p>
              </div>
              <div class=" flex items-center mr-4">
                <img
                  src="/src/assets/lessons.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img
                  src="/src/assets/coin.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" mt-4 pt-4 border-t border-gray-200">
            <button class="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
          <div class=" flex items-center justify-between">
            <img
              src="/src/assets/python_logo.png"
              alt="course-logo"
              class="w-10 h-10 rounded-full"
            />
            <div class="resolution bg-yellow-300 px-2 py-1 rounded-sm">
              <p class="text-xs font-semibold">1250xp</p>
            </div>
          </div>
          <div class=" mt-4">
            <h1 class="text-lg font-semibold">Introduction to SQL</h1>
            <div class="my_progess_trending_card_options_holder flex items-center mt-2">
              <div class="flex items-center mr-4">
                <img
                  src="/src/assets/time.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">15 hours</p>
              </div>
              <div class=" flex items-center mr-4">
                <img
                  src="/src/assets/lessons.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img
                  src="/src/assets/coin.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" mt-4 pt-4 border-t border-gray-200">
            <button class="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
          <div class=" flex items-center justify-between">
            <img
              src="/src/assets/python_logo.png"
              alt="course-logo"
              class="w-10 h-10 rounded-full"
            />
            <div class="resolution bg-yellow-300 px-2 py-1 rounded-sm">
              <p class="text-xs font-semibold">1250xp</p>
            </div>
          </div>
          <div class=" mt-4">
            <h1 class="text-lg font-semibold">Introduction to SQL</h1>
            <div class="my_progess_trending_card_options_holder flex items-center mt-2">
              <div class="flex items-center mr-4">
                <img
                  src="/src/assets/time.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">15 hours</p>
              </div>
              <div class=" flex items-center mr-4">
                <img
                  src="/src/assets/lessons.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img
                  src="/src/assets/coin.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" mt-4 pt-4 border-t border-gray-200">
            <button class="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class=" bg-white rounded-lg shadow-lg flex flex-col justify-between p-4">
          <div class=" flex items-center justify-between">
            <img
              src="/src/assets/python_logo.png"
              alt="course-logo"
              class="w-10 h-10 rounded-full"
            />
            <div class="resolution bg-yellow-300 px-2 py-1 rounded-sm">
              <p class="text-xs font-semibold">1250xp</p>
            </div>
          </div>
          <div class=" mt-4">
            <h1 class="text-lg font-semibold">Introduction to SQL</h1>
            <div class="my_progess_trending_card_options_holder flex items-center mt-2">
              <div class="flex items-center mr-4">
                <img
                  src="/src/assets/time.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">15 hours</p>
              </div>
              <div class=" flex items-center mr-4">
                <img
                  src="/src/assets/lessons.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img
                  src="/src/assets/coin.svg"
                  alt="time"
                  class="w-4 h-4 mr-2"
                />
                <p class="text-sm font-semibold text-gray-600">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" mt-4 pt-4 border-t border-gray-200">
            <button class="w-full bg-white text-black font-semibold py-2 px-4 border border-black rounded-md hover:bg-gray-100">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TrendingCourse;
