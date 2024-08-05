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
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
function Crousal() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/courses/details");
  };
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
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1300: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1400: {
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
        <div className="border border-black h-auto pb-4 w-full lg:w-[350px] mb-4 lg:mb-0">
          <div className="flex flex-col">
            <img
              src="/src/assets/courses/sunset.jpg"
              className="w-full object-cover h-[210px]"
              alt="Course 1"
            />
            <div className="font-bold text-lg ml-2 my-2">Learn Html</div>
            <div className="flex flex-row ml-2">
              <div className="mr-2">
                <img
                  src="/src/assets/profile.jpg"
                  className="rounded-full h-[60px] w-[60px]"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">Techsnap</div>
                <div className="text-sm text-gray-500">company</div>
                <div className="text-xs text-gray-500">
                  2.8k enrolled | 3h 20 min
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-3 text-sm justify-center gap-4 lg:text-xs">
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
            </div>
            <div className="flex ml-2 mt-3 gap-2">
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                web development
              </div>
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                Frontend
              </div>
            </div>
            <div className="flex mt-3 ml-4 justify-between">
              <div className="flex flex-col">
                <div className="flex">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                </div>
                <div className="text-sm font-semibold">Beginner</div>
              </div>
              <div className="mr-4">
                <div className="border border-black px-2 py-2 font-bold cursor-pointer">
                  <div className="flex gap-1" onClick={handleClick}>
                    <div>Get Started</div>

                    <FaArrowRight className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border border-black h-auto pb-4 w-full lg:w-[350px] mb-4 lg:mb-0">
          <div className="flex flex-col">
            <img
              src="/src/assets/courses/sunset.jpg"
              className="w-full object-cover h-[210px]"
              alt="Course 1"
            />
            <div className="font-bold text-lg ml-2 my-2">Learn Html</div>
            <div className="flex flex-row ml-2">
              <div className="mr-2">
                <img
                  src="/src/assets/profile.jpg"
                  className="rounded-full h-[60px] w-[60px]"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">Techsnap</div>
                <div className="text-sm text-gray-500">company</div>
                <div className="text-xs text-gray-500">
                  2.8k enrolled | 3h 20 min
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-3 text-sm justify-center gap-4 lg:text-xs">
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
            </div>
            <div className="flex ml-2 mt-3 gap-2">
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                web development
              </div>
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                Frontend
              </div>
            </div>
            <div className="flex mt-3 ml-4 justify-between">
              <div className="flex flex-col">
                <div className="flex">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                </div>
                <div className="text-sm font-semibold">Beginner</div>
              </div>
              <div className="mr-4">
                <div className="border border-black px-2 py-2 font-bold cursor-pointer">
                  <div className="flex gap-1" onClick={handleClick}>
                    <div>Get Started</div>

                    <FaArrowRight className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border border-black h-auto pb-4 w-full lg:w-[350px] mb-4 lg:mb-0">
          <div className="flex flex-col">
            <img
              src="/src/assets/courses/sunset.jpg"
              className="w-full object-cover h-[210px]"
              alt="Course 1"
            />
            <div className="font-bold text-lg ml-2 my-2">Learn Html</div>
            <div className="flex flex-row ml-2">
              <div className="mr-2">
                <img
                  src="/src/assets/profile.jpg"
                  className="rounded-full h-[60px] w-[60px]"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">Techsnap</div>
                <div className="text-sm text-gray-500">company</div>
                <div className="text-xs text-gray-500">
                  2.8k enrolled | 3h 20 min
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-3 text-sm justify-center gap-4 lg:text-xs">
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
            </div>
            <div className="flex ml-2 mt-3 gap-2">
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                web development
              </div>
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                Frontend
              </div>
            </div>
            <div className="flex mt-3 ml-4 justify-between">
              <div className="flex flex-col">
                <div className="flex">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                </div>
                <div className="text-sm font-semibold">Beginner</div>
              </div>
              <div className="mr-4">
                <div className="border border-black px-2 py-2 font-bold cursor-pointer">
                  <div className="flex gap-1" onClick={handleClick}>
                    <div>Get Started</div>

                    <FaArrowRight className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border border-black h-auto pb-4 w-full lg:w-[350px] mb-4 lg:mb-0">
          <div className="flex flex-col">
            <img
              src="/src/assets/courses/sunset.jpg"
              className="w-full object-cover h-[210px]"
              alt="Course 1"
            />
            <div className="font-bold text-lg ml-2 my-2">Learn Html</div>
            <div className="flex flex-row ml-2">
              <div className="mr-2">
                <img
                  src="/src/assets/profile.jpg"
                  className="rounded-full h-[60px] w-[60px]"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">Techsnap</div>
                <div className="text-sm text-gray-500">company</div>
                <div className="text-xs text-gray-500">
                  2.8k enrolled | 3h 20 min
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-3 text-sm justify-center gap-4 lg:text-xs">
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
              <div className="flex gap-1">
                <img src="/src/assets/time.svg" alt="Time" />
                <div className="text-[#f4b9cd] font-bold">12 Courses</div>
              </div>
            </div>
            <div className="flex ml-2 mt-3 gap-2">
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                web development
              </div>
              <div className="px-4 bg-orange-500 text-sm text-white rounded-lg">
                Frontend
              </div>
            </div>
            <div className="flex mt-3 ml-4 justify-between">
              <div className="flex flex-col">
                <div className="flex">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png"
                    alt="Dot"
                  />
                </div>
                <div className="text-sm font-semibold">Beginner</div>
              </div>
              <div className="mr-4">
                <div className="border border-black px-2 py-2 font-bold cursor-pointer">
                  <div className="flex gap-1" onClick={handleClick}>
                    <div>Get Started</div>

                    <FaArrowRight className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Crousal;
