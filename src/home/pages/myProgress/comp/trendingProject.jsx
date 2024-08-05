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

function TrendingProject() {
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
        <div class=" bg-white    mb-20 shadow-md flex flex-col">
          <div class="image h-[150px] max-[900px]:mb-4">
            <img
              src="/src/assets/banner.png"
              alt="card"
              class="w-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-between">
            <div class="title p-4 pb-2">
              <p class="font-bold text-lg">Introduction to Python</p>
            </div>

            <div class="icons flex justify-between p-2 px-4">
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
            </div>
            <div class=" flex items-center px-4 pt-2 text-xs">
              <p class="text-gray-700 font-semibold">Author:</p>
              <div class="name flex items-center ml-2">
                <span>
                  <img
                    src="/src/assets/coin.svg"
                    alt="indian"
                    class="w-4 h-4"
                  />
                </span>
                <h3 class="text-gray-700 font-semibold">Alan Biju</h3>
              </div>
            </div>
            <div class=" px-4 text-sm pt-1">
              <div class="tags_box flex items-center">
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>React</p>
                </div>
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>Kodo</p>
                </div>
              </div>
            </div>
            <button class="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
              View in Detail
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class=" bg-white    mb-20 shadow-md flex flex-col">
          <div class="image h-[150px] max-[900px]:mb-4">
            <img
              src="/src/assets/banner.png"
              alt="card"
              class="w-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-between">
            <div class="title p-4 pb-2">
              <p class="font-bold text-lg">Introduction to Python</p>
            </div>

            <div class="icons flex justify-between p-2 px-4">
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
            </div>
            <div class=" flex items-center px-4 pt-2 text-xs">
              <p class="text-gray-700 font-semibold">Author:</p>
              <div class="name flex items-center ml-2">
                <span>
                  <img
                    src="/src/assets/coin.svg"
                    alt="indian"
                    class="w-4 h-4"
                  />
                </span>
                <h3 class="text-gray-700 font-semibold">Alan Biju</h3>
              </div>
            </div>
            <div class=" px-4 text-sm pt-1">
              <div class="tags_box flex items-center">
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>React</p>
                </div>
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>Kodo</p>
                </div>
              </div>
            </div>
            <button class="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
              View in Detail
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class=" bg-white    mb-20 shadow-md flex flex-col">
          <div class="image h-[150px] max-[900px]:mb-4">
            <img
              src="/src/assets/banner.png"
              alt="card"
              class="w-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-between">
            <div class="title p-4 pb-2">
              <p class="font-bold text-lg">Introduction to Python</p>
            </div>

            <div class="icons flex justify-between p-2 px-4">
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
            </div>
            <div class=" flex items-center px-4 pt-2 text-xs">
              <p class="text-gray-700 font-semibold">Author:</p>
              <div class="name flex items-center ml-2">
                <span>
                  <img
                    src="/src/assets/coin.svg"
                    alt="indian"
                    class="w-4 h-4"
                  />
                </span>
                <h3 class="text-gray-700 font-semibold">Alan Biju</h3>
              </div>
            </div>
            <div class=" px-4 text-sm pt-1">
              <div class="tags_box flex items-center">
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>React</p>
                </div>
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>Kodo</p>
                </div>
              </div>
            </div>
            <button class="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
              View in Detail
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class=" bg-white    mb-20 shadow-md flex flex-col">
          <div class="image h-[150px] max-[900px]:mb-4">
            <img
              src="/src/assets/banner.png"
              alt="card"
              class="w-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-between">
            <div class="title p-4 pb-2">
              <p class="font-bold text-lg">Introduction to Python</p>
            </div>

            <div class="icons flex justify-between p-2 px-4">
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
              <div class="icon_item flex items-center text-xs">
                <span>
                  <img
                    src="/src/assets/card_time.svg"
                    alt="time"
                    class="w-5 h-5"
                  />
                </span>
                <p>16 hours</p>
              </div>
            </div>
            <div class=" flex items-center px-4 pt-2 text-xs">
              <p class="text-gray-700 font-semibold">Author:</p>
              <div class="name flex items-center ml-2">
                <span>
                  <img
                    src="/src/assets/coin.svg"
                    alt="indian"
                    class="w-4 h-4"
                  />
                </span>
                <h3 class="text-gray-700 font-semibold">Alan Biju</h3>
              </div>
            </div>
            <div class=" px-4 text-sm pt-1">
              <div class="tags_box flex items-center">
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>React</p>
                </div>
                <div class="tags text-purple-600 text-xs rounded-lg mr-2">
                  <p>Kodo</p>
                </div>
              </div>
            </div>
            <button class="w-[90%] mx-auto bg-white text-black h-9 border border-black font-semibold rounded-md mt-4">
              View in Detail
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TrendingProject;
