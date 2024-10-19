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
import sunset from "./../../assets/courses/sunset.jpg";
import profile from "./../../assets/profile.jpg";
import time from "./../../assets/time.svg";

function Crousal() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/courses/details");
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
        <div className="border pb-2 border-gray-200 shadow-lg rounded-xl overflow-hidden w-full lg:w-[350px] mb-4 lg:mb-0 transition duration-300 ease-in-out  hover:shadow-2xl">
          <div className="flex flex-col">
            <img
              src={sunset}
              className="w-full object-cover h-[210px] rounded-t-xl"
              alt="Course Banner"
            />
            <div className="font-bold text-lg ml-4 my-3 text-gray-800">
              Learn Html
            </div>
            <div className="flex items-center ml-4">
              <img
                src={profile}
                className="rounded-full h-[60px] w-[60px] mr-4"
                alt="Instructor Profile"
              />
              <div className="flex flex-col">
                <div className="font-bold text-sm text-gray-700">Techsnap</div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-xs text-gray-400">
                  2.8k enrolled | 3h 20min
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-4 justify-center gap-6 text-xs">
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
            </div>

            <div className="flex ml-4 mt-3 gap-2">
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Frontend
              </div>
            </div>

            <div className="flex mt-4 ml-4 justify-between items-center px-4">
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-1">
                  Beginner
                </div>
              </div>
              <div className="mr-4">
                <button
                  className="border border-gray-300 px-4 py-2 font-bold flex items-center gap-1 rounded-lg transition hover:bg-gray-100 hover:border-gray-500"
                  onClick={handleClick}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border pb-2 border-gray-200 shadow-lg rounded-xl overflow-hidden w-full lg:w-[350px] mb-4 lg:mb-0 transition duration-300 ease-in-out  hover:shadow-2xl">
          <div className="flex flex-col">
            <img
              src={sunset}
              className="w-full object-cover h-[210px] rounded-t-xl"
              alt="Course Banner"
            />
            <div className="font-bold text-lg ml-4 my-3 text-gray-800">
              Learn Html
            </div>
            <div className="flex items-center ml-4">
              <img
                src={profile}
                className="rounded-full h-[60px] w-[60px] mr-4"
                alt="Instructor Profile"
              />
              <div className="flex flex-col">
                <div className="font-bold text-sm text-gray-700">Techsnap</div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-xs text-gray-400">
                  2.8k enrolled | 3h 20min
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-4 justify-center gap-6 text-xs">
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
            </div>

            <div className="flex ml-4 mt-3 gap-2">
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Frontend
              </div>
            </div>

            <div className="flex mt-4 ml-4 justify-between items-center px-4">
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-1">
                  Beginner
                </div>
              </div>
              <div className="mr-4">
                <button
                  className="border border-gray-300 px-4 py-2 font-bold flex items-center gap-1 rounded-lg transition hover:bg-gray-100 hover:border-gray-500"
                  onClick={handleClick}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border pb-2 border-gray-200 shadow-lg rounded-xl overflow-hidden w-full lg:w-[350px] mb-4 lg:mb-0 transition duration-300 ease-in-out  hover:shadow-2xl">
          <div className="flex flex-col">
            <img
              src={sunset}
              className="w-full object-cover h-[210px] rounded-t-xl"
              alt="Course Banner"
            />
            <div className="font-bold text-lg ml-4 my-3 text-gray-800">
              Learn Html
            </div>
            <div className="flex items-center ml-4">
              <img
                src={profile}
                className="rounded-full h-[60px] w-[60px] mr-4"
                alt="Instructor Profile"
              />
              <div className="flex flex-col">
                <div className="font-bold text-sm text-gray-700">Techsnap</div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-xs text-gray-400">
                  2.8k enrolled | 3h 20min
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-4 justify-center gap-6 text-xs">
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
            </div>

            <div className="flex ml-4 mt-3 gap-2">
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Frontend
              </div>
            </div>

            <div className="flex mt-4 ml-4 justify-between items-center px-4">
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-1">
                  Beginner
                </div>
              </div>
              <div className="mr-4">
                <button
                  className="border border-gray-300 px-4 py-2 font-bold flex items-center gap-1 rounded-lg transition hover:bg-gray-100 hover:border-gray-500"
                  onClick={handleClick}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border pb-2 border-gray-200 shadow-lg rounded-xl overflow-hidden w-full lg:w-[350px] mb-4 lg:mb-0 transition duration-300 ease-in-out  hover:shadow-2xl">
          <div className="flex flex-col">
            <img
              src={sunset}
              className="w-full object-cover h-[210px] rounded-t-xl"
              alt="Course Banner"
            />
            <div className="font-bold text-lg ml-4 my-3 text-gray-800">
              Learn Html
            </div>
            <div className="flex items-center ml-4">
              <img
                src={profile}
                className="rounded-full h-[60px] w-[60px] mr-4"
                alt="Instructor Profile"
              />
              <div className="flex flex-col">
                <div className="font-bold text-sm text-gray-700">Techsnap</div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-xs text-gray-400">
                  2.8k enrolled | 3h 20min
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-4 justify-center gap-6 text-xs">
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
            </div>

            <div className="flex ml-4 mt-3 gap-2">
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Frontend
              </div>
            </div>

            <div className="flex mt-4 ml-4 justify-between items-center px-4">
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-1">
                  Beginner
                </div>
              </div>
              <div className="mr-4">
                <button
                  className="border border-gray-300 px-4 py-2 font-bold flex items-center gap-1 rounded-lg transition hover:bg-gray-100 hover:border-gray-500"
                  onClick={handleClick}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border pb-2 border-gray-200 shadow-lg rounded-xl overflow-hidden w-full lg:w-[350px] mb-4 lg:mb-0 transition duration-300 ease-in-out  hover:shadow-2xl">
          <div className="flex flex-col">
            <img
              src={sunset}
              className="w-full object-cover h-[210px] rounded-t-xl"
              alt="Course Banner"
            />
            <div className="font-bold text-lg ml-4 my-3 text-gray-800">
              Learn Html
            </div>
            <div className="flex items-center ml-4">
              <img
                src={profile}
                className="rounded-full h-[60px] w-[60px] mr-4"
                alt="Instructor Profile"
              />
              <div className="flex flex-col">
                <div className="font-bold text-sm text-gray-700">Techsnap</div>
                <div className="text-xs text-gray-500">Company</div>
                <div className="text-xs text-gray-400">
                  2.8k enrolled | 3h 20min
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-4 justify-center gap-6 text-xs">
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={time} alt="Time Icon" className="w-4 h-4" />
                <div className="text-pink-500 font-semibold">12 Courses</div>
              </div>
            </div>

            <div className="flex ml-4 mt-3 gap-2">
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Web Development
              </div>
              <div className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full">
                Frontend
              </div>
            </div>

            <div className="flex mt-4 ml-4 justify-between items-center px-4">
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-1">
                  Beginner
                </div>
              </div>
              <div className="mr-4">
                <button
                  className="border border-gray-300 px-4 py-2 font-bold flex items-center gap-1 rounded-lg transition hover:bg-gray-100 hover:border-gray-500"
                  onClick={handleClick}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Crousal;
