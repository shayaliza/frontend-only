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
        <div class="m-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-lg m-25 flex flex-col">
          <div class=" bg-red-500 flex flex-col justify-between p-3 rounded-t-lg">
            <div class="flex justify-between mb-4">
              <h1 class="text-lg">Data Scientist</h1>
              <p class="bg-white text-red-400 px-2 text-sm">Free</p>
            </div>
            <div class=" flex justify-between items-end">
              <div class=" flex items-center">
                <img src="/src/assets/time.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">15 hours</p>
              </div>
              <div class=" flex items-center">
                <img src="/src/assets/lessons.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img src="/src/assets/coin.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" p-2">
            <p class="text-gray-700 text-[0.8rem] m-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              maxime esse blanditiis vitae animi eaque adipisci, beatae
              laboriosam vel hic illum eum omnis consequuntur quas.
            </p>

            <div class="mt-2">✔ Free Career HandBook</div>

            <div class="mt-2">✔ Free Career HandBook</div>
            <div class="mt-2">✔ Free Career HandBook</div>
          </div>
          <div class=" flex items-center justify-center h-16">
            <button class="w-5/6 h-10 border border-black rounded-md text-black font-semibold hover:bg-gray-200">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="m-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-lg m-25 flex flex-col">
          <div class=" bg-red-500 flex flex-col justify-between p-3 rounded-t-lg">
            <div class="flex justify-between mb-4">
              <h1 class="text-lg">Data Scientist</h1>
              <p class="bg-white text-red-400 px-2 text-sm">Free</p>
            </div>
            <div class=" flex justify-between items-end">
              <div class=" flex items-center">
                <img src="/src/assets/time.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">15 hours</p>
              </div>
              <div class=" flex items-center">
                <img src="/src/assets/lessons.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img src="/src/assets/coin.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" p-2">
            <p class="text-gray-700 text-[0.8rem] m-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              maxime esse blanditiis vitae animi eaque adipisci, beatae
              laboriosam vel hic illum eum omnis consequuntur quas.
            </p>

            <div class="mt-2">✔ Free Career HandBook</div>

            <div class="mt-2">✔ Free Career HandBook</div>
            <div class="mt-2">✔ Free Career HandBook</div>
          </div>
          <div class=" flex items-center justify-center h-16">
            <button class="w-5/6 h-10 border border-black rounded-md text-black font-semibold hover:bg-gray-200">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="m-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-lg m-25 flex flex-col">
          <div class=" bg-red-500 flex flex-col justify-between p-3 rounded-t-lg">
            <div class="flex justify-between mb-4">
              <h1 class="text-lg">Data Scientist</h1>
              <p class="bg-white text-red-400 px-2 text-sm">Free</p>
            </div>
            <div class=" flex justify-between items-end">
              <div class=" flex items-center">
                <img src="/src/assets/time.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">15 hours</p>
              </div>
              <div class=" flex items-center">
                <img src="/src/assets/lessons.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">9 lessons</p>
              </div>
              <div class=" flex items-center">
                <img src="/src/assets/coin.svg" alt="time" class="w-5 h-5" />
                <p class="white text-sm ml-2">779 coins</p>
              </div>
            </div>
          </div>
          <div class=" p-2">
            <p class="text-gray-700 text-[0.8rem] m-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              maxime esse blanditiis vitae animi eaque adipisci, beatae
              laboriosam vel hic illum eum omnis consequuntur quas.
            </p>

            <div class="mt-2">✔ Free Career HandBook</div>

            <div class="mt-2">✔ Free Career HandBook</div>
            <div class="mt-2">✔ Free Career HandBook</div>
          </div>
          <div class=" flex items-center justify-center h-16">
            <button class="w-5/6 h-10 border border-black rounded-md text-black font-semibold hover:bg-gray-200">
              Start Course
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TrendingCareer;
