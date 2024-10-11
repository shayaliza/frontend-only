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
          <div class=" bg-white   mb-20 shadow-md flex flex-col">
            <div class="h-[150px] max-[900px]:mb-4">
              <img src={BannerImage} alt="card" class="h-[150px] " />
            </div>
            <div class="flex flex-col justify-between">
              <div class="title p-4 pb-2">
                <p class="font-bold text-lg">Introduction to Python</p>
              </div>

              <div class="icons flex justify-between p-2 px-4">
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
              </div>
              <div class=" flex items-center px-4 pt-2 text-xs">
                <p class="text-gray-700 font-semibold">Author:</p>
                <div class="name flex items-center ml-2">
                  <span>
                    <img src={coinLogo} alt="indian" class="w-4 h-4" />
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
            <div class="h-[150px] max-[900px]:mb-4">
              <img src={BannerImage} alt="card" class="h-[150px] " />
            </div>
            <div class="flex flex-col justify-between">
              <div class="title p-4 pb-2">
                <p class="font-bold text-lg">Introduction to Python</p>
              </div>

              <div class="icons flex justify-between p-2 px-4">
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
              </div>
              <div class=" flex items-center px-4 pt-2 text-xs">
                <p class="text-gray-700 font-semibold">Author:</p>
                <div class="name flex items-center ml-2">
                  <span>
                    <img src={coinLogo} alt="indian" class="w-4 h-4" />
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
            <div class="flex flex-col justify-between">
              <div class="h-[150px] max-[900px]:mb-4">
                <img src={BannerImage} alt="card" class="h-[150px] " />
              </div>
              <div class="title p-4 pb-2">
                <p class="font-bold text-lg">Introduction to Python</p>
              </div>
              <div class="icons flex justify-between p-2 px-4">
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
              </div>
              <div class=" flex items-center px-4 pt-2 text-xs">
                <p class="text-gray-700 font-semibold">Author:</p>
                <div class="name flex items-center ml-2">
                  <span>
                    <img src={coinLogo} alt="indian" class="w-4 h-4" />
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
            <div class="h-[150px] max-[900px]:mb-4">
              <img src={BannerImage} alt="card" class="h-[150px] " />
            </div>
            <div class="flex flex-col justify-between">
              <div class="title p-4 pb-2">
                <p class="font-bold text-lg">Introduction to Python f</p>
              </div>

              <div class="icons flex justify-between p-2 px-4">
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
                <div class="icon_item flex items-center text-xs">
                  <span>
                    <img src={cardTimeLogo} alt="time" class="w-5 h-5" />
                  </span>
                  <p>16 hours</p>
                </div>
              </div>
              <div class=" flex items-center px-4 pt-2 text-xs">
                <p class="text-gray-700 font-semibold">Author:</p>
                <div class="name flex items-center ml-2">
                  <span>
                    <img src={coinLogo} alt="indian" class="w-4 h-4" />
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
    </div>
  );
}

export default TrendingProject;
