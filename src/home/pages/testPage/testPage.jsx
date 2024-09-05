import React from "react";
import "./style.css";
import JSImage from "./js.png";
import reload from "./reload.png";
import approved from "./approved.png";
import lockImage from "./lock.png";
import "./style.css";
import FishImage from "./fish.png";
function TestPage() {
  const GreenCard = () => {
    return (
      <>
        <div class="md:w-[380px] w-11/12   overflow-hidden border-8 border-black outline outline-[4px] outline-[#37c537] z-20 bg-[#1d263e] lg:self-center self-center rounded-2xl">
          <div class="rounded-t-md flex justify-between bg-green-800 px-4 py-3 align-center">
            <div class=" flex gap-3 align-center text-white">
              <div class="icon flex align-center">
                <i class="ri-file-2-line"></i>
              </div>
              <p class="flex align-center">Lesson 1</p>
            </div>
            <img class="w-8 h-8" src={approved} alt="" />
          </div>
          <div class="rounded-b-md bg-[#1d263e] min-h-[160px] flex flex-col justify-between bg-neutral-1000 px-4 text-center text-white py-4">
            <p class="pb-4">
              Advanced Arrays and Objects in Javascript: Destructuring, Spread,
              and Rest Operators
            </p>
            <div class="w-full py-3 rounded-lg bg-[#202944] border border-[#d6d6d6] mb-5 flex gap-2 justify-center">
              <p>Review</p>
              <img src={reload} alt="" className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div class="md:w-[380px] w-11/12 relative flex flex-col">
          <svg
            class="absolute hidden lg:block scale-100 ml-80"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
              stroke="#168242"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          {/* Mobile View SVG */}
          <svg
            class="absolute md:hidden scale-100 left-1/2 transform -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M70 0 V140"
              stroke="#168242"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
      </>
    );
  };
  const PractiseOneCard = () => {
    return (
      <div>
        <div
          class="md:w-[380px] w-11/12  overflow-hidden border-8 border-black outline
outline-[4px] outline-[#37c537] z-20 bg-[#1d263e] start-lesson bg-neutral-1000 lg:self-start self-center mt-24 rounded-2xl"
        >
          <div class="rounded-t-md flex justify-between px-4 py-3 align-center">
            <div class="lessons flex gap-3 align-center text-white">
              <div class="icon flex align-center">
                <i class="ri-code-box-line"></i>
              </div>
              <p class="flex align-center">Practice 1</p>
            </div>
          </div>
          <div class="rounded-b-md bg-[#1d263e] min-h-[160px] flex flex-col justify-between px-4 text-center text-white py-4">
            <p class="pb-4">
              Color Change with ES6 Destructuring and Spread Operator
            </p>
            <div class="w-full py-3 rounded-lg bg-[#202944] border border-[#d6d6d6] mb-5 flex gap-2 justify-center">
              <p>Start +60 EP</p>
              <img src={reload} alt="" className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div class="md:w-[380px] w-11/12 relative flex flex-col">
          <svg
            class="absolute hidden lg:block left-1/2 -scale-x-100 scale-y-100"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          {/* Mobile View SVG */}
          <svg
            class="absolute md:hidden scale-100 left-1/2 transform -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M70 0 V140"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
      </div>
    );
  };
  const PractiseTwoCard = () => {
    return (
      <>
        <div
          class="md:w-[380px] w-11/12  overflow-hidden border-8 border-black outline
outline-[4px] outline-[#37c537] z-20 bg-[#1d263e] locked bg-neutral-1000 lg:self-center self-center mt-24 rounded-2xl"
        >
          <div class="rounded-t-md flex justify-between px-4 py-3 align-center">
            <div class="lessons flex gap-3 align-center text-white">
              <div class="icon flex align-center">
                <i class="ri-code-box-line"></i>
              </div>
              <p class="flex align-center">Practice 2</p>
            </div>
          </div>
          <div class="rounded-b-md bg-[#1d263e] min-h-[160px] flex flex-col justify-between bg-neutral-1000 px-4 text-center text-white py-4">
            <p class="pb-4">Supersonic Speed Upgrade</p>
            <div class="w-full py-3 rounded-lg bg-[#202944] border border-[#d6d6d6] mb-5 flex gap-2 justify-center">
              <img src={lockImage} alt="" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div class="md:w-[380px] w-11/12 relative flex flex-col">
          <svg
            class="absolute hidden lg:block ml-80 left-1/2 -scale-x-100 scale-y-100"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          {/* Mobile View SVG */}
          <svg
            class="absolute md:hidden scale-100 left-1/2 transform -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M70 0 V140"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
      </>
    );
  };
  const PractiseThreeCard = () => {
    return (
      <>
        <div
          class="md:w-[380px] w-11/12  overflow-hidden border-8 border-black outline
outline-[4px] outline-[#37c537] z-20 bg-[#1d263e] locked bg-neutral-1000 lg:self-end self-center mt-24 rounded-2xl"
        >
          <div class="rounded-t-md flex justify-between px-4 py-3 align-center">
            <div class="lessons flex gap-3 align-center text-white">
              <div class="icon flex align-center">
                <i class="ri-code-box-line"></i>
              </div>
              <p class="flex align-center">Practice 2</p>
            </div>
          </div>
          <div class="rounded-b-md bg-[#1d263e] min-h-[160px] flex flex-col justify-between bg-neutral-1000 px-4 text-center text-white py-4">
            <p class="pb-4">Supersonic Speed Upgrade</p>
            <div class="w-full py-3 rounded-lg bg-[#202944] border border-[#d6d6d6] mb-5 flex gap-2 justify-center">
              <img src={lockImage} alt="" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div class="md:w-[380px] w-11/12 relative flex flex-col">
          <svg
            class="absolute hidden lg:block ml-[600px] scale-100"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          {/* Mobile View SVG */}
          <svg
            class="absolute md:hidden scale-100 left-1/2 transform -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M70 0 V140"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
      </>
    );
  };
  const PractiseFourCard = () => {
    return (
      <>
        <div
          class="md:w-[380px] w-11/12  overflow-hidden border-8 border-black outline
outline-[4px] outline-[#37c537] z-20 bg-[#1d263e] locked bg-neutral-1000 lg:self-center self-center mt-24 rounded-2xl"
        >
          <div class="rounded-t-md flex justify-between px-4 py-3 align-center">
            <div class="lessons flex gap-3 align-center text-white">
              <div class="icon flex align-center">
                <i class="ri-code-box-line"></i>
              </div>
              <p class="flex align-center">Practice 2</p>
            </div>
          </div>
          <div class="rounded-b-md bg-[#1d263e] min-h-[160px] flex flex-col justify-between bg-neutral-1000 px-4 text-center text-white py-4">
            <p class="pb-4">Supersonic Speed Upgrade</p>
            <div class="w-full py-3 rounded-lg bg-[#202944] border border-[#d6d6d6] mb-5 flex gap-2 justify-center">
              <img src={lockImage} alt="" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div class="md:w-[380px] w-11/12  relative flex flex-col">
          <svg
            class="absolute hidden lg:block ml-60 scale-100"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          {/* Mobile View SVG */}
          <svg
            class="absolute md:hidden scale-100 left-1/2 transform -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="96"
            viewBox="0 0 128 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M70 0 V140"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 8"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
      </>
    );
  };
  const PractiseFiveCard = () => {
    return (
      <>
        <div
          class="md:w-[380px] w-11/12   overflow-hidden border-8 border-black outline
outline-[4px] outline-[#37c537] z-20 bg-[#1d263e] locked bg-neutral-1000 lg:self-start self-center mt-24 rounded-2xl"
        >
          <div class="rounded-t-md flex justify-between px-4 py-3 align-center">
            <div class="lessons flex gap-3 align-center text-white">
              <div class="icon flex align-center">
                <i class="ri-code-box-line"></i>
              </div>
              <p class="flex align-center">Practice 2</p>
            </div>
          </div>
          <div class="rounded-b-md bg-[#1d263e] min-h-[160px] flex flex-col justify-between bg-neutral-1000 px-4 text-center text-white py-4">
            <p class="pb-4">Supersonic Speed Upgrade</p>
            <div class="w-full py-3 rounded-lg bg-[#202944] border border-[#d6d6d6] mb-5 flex gap-2 justify-center">
              <img src={lockImage} alt="" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </>
    );
  };
  const FirstBigCard = () => {
    return (
      <div class="course-box pt-4">
        <div class="flex justify-between gap-5 max-w-[1000px] w-11/12 mx-auto p-9 text-[#f0f0f0] rounded-[20px]  overflow-hidden outline-1 outline-[#036cdb] course-box-container">
          <div class="gradient-top"></div>
          <div class="relative max-w-[550px]">
            <div class="top-left flex gap-16 mb-20">
              <div class="flex gap-3 align-center">
                <div class="icon">
                  <i class="ri-file-2-line"></i>
                </div>
                <p>23 lessons</p>
              </div>
              <div class=" flex gap-3 align-center">
                <div class="">
                  <i class="ri-code-box-line"></i>
                </div>
                <p>33 practices</p>
              </div>
            </div>
            <div class=" flex gap-8 mb-6">
              <div class="px-4 rounded-full border border-white flex gap-1">
                <img
                  class="w-4"
                  src="https://d3dq4v2xxejk8c.cloudfront.net/uploads/SkPf73mCwpi4P6DCP_html.svg"
                  alt=""
                />

                <p>HTML</p>
              </div>
              <div class="px-4 rounded-full border border-white flex gap-1">
                <img
                  class="w-4"
                  src="	https://d3dq4v2xxejk8c.cloudfront.net/uploads/XmDm72Y3eQcbFkvih_JS.svg"
                  alt=""
                />

                <p>JavaScript</p>
              </div>
            </div>

            <h1 class="big-heading text-4xl font-semibold mb-4">
              Stellar JavaScript for the React Universe
            </h1>
            <p class="text-gray-300 mb-4">
              This course is an exciting step towards understanding necessary
              JavaScript basics and ES6 specifically, which are essential to
              leverage the power of React. Learn about JavaScript data
              structures, functions, and new ES6 features to lay a solid
              foundation for your journey into
            </p>
            <div class="flex gap-8">
              <button class="px-5 py-2.5 bg-blue-500 text-white border-none cursor-pointer text-base rounded-lg">
                Continue Course
              </button>
              <div class="progress-box">
                <p>Progress: 50%</p>
              </div>
            </div>
          </div>

          <div class="relative min-w-[280px] flex">
            <div class="bg-neutral-800 flex gap-4 self-end p-4 rounded-xl">
              <img
                class=" w-20 h-20 flex-col self-center"
                src={JSImage}
                alt="Logo"
              />
              <div>
                <p class="bg-gray-300 text-black inline-block px-4 rounded-full text-sm mb-2">
                  Intermediate
                </p>
                <p>JavaScript Programming and DOM API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SecondBigCard = () => {
    return (
      <div class="course-box locked-course pt-4">
        {/* <div class="course-box-container course-box-react"> */}
        <div class="flex justify-between gap-5 max-w-[1000px] w-11/12 mx-auto p-9 text-[#f0f0f0] rounded-[20px]  overflow-hidden outline-1 outline-[#036cdb] course-box-container">
          <div class="locked-icon">
            <img src={lockImage} alt="" className="h-6 w-6" />
          </div>
          <div class="gradient-top"></div>
          <div class="relative max-w-[550px]">
            <div class="top-left flex gap-16 mb-20">
              <div class="lessons flex gap-3 align-center">
                <div class="icon">
                  <i class="ri-file-2-line"></i>
                </div>
                <p>23 lessons</p>
              </div>
              <div class="practice flex gap-3 align-center">
                <div class="practice-icon">
                  <i class="ri-code-box-line"></i>
                </div>
                <p>33 practices</p>
              </div>
            </div>
            <div class="course-language flex gap-8 mb-6">
              <div class="px-4 rounded-full border border-white flex gap-1">
                <img
                  class="w-4"
                  src="https://d3dq4v2xxejk8c.cloudfront.net/uploads/SkPf73mCwpi4P6DCP_html.svg"
                  alt=""
                />

                <p>HTML</p>
              </div>
              <div class="px-4 rounded-full border border-white flex gap-1">
                <img
                  class="w-4"
                  src="	https://d3dq4v2xxejk8c.cloudfront.net/uploads/Xsmm72Y3eQcbFkvih_JS.svg"
                  alt=""
                />

                <p>JavaScript</p>
              </div>
            </div>

            <h1 class="big-heading text-4xl font-semibold mb-4">
              Cosmic connection with APIs in React
            </h1>
            <p class="text-gray-300 mb-4">
              This course is an exciting step towards understanding necessary
              JavaScript basics and ES6 specifically, which are essential to
              leverage the power of React. Learn about JavaScript data
              structures, functions, and new ES6 features to lay a solid
              foundation for your journey into
            </p>
            <div class="flex gap-8">
              <button class="px-5 py-2.5 bg-blue-500 text-white border-none cursor-pointer text-base rounded-lg">
                Jump here
              </button>
            </div>
          </div>

          <div class="right-section flex">
            <div class="course-right-box bg-neutral-800 flex self-end gap-4 p-4 rounded-xl">
              <img
                class="course-logo w-20 h-20 flex flex-col self-center"
                src={JSImage}
                alt="Logo"
              />
              <div>
                <p class="bg-gray-300 text-black inline-block px-4 rounded-full text-sm mb-2">
                  Intermediate
                </p>
                <p>JavaScript Programming and DOM API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // return (
  //   <div className="relative min-h-screen">
  //     {/* Background layer */}
  //     <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#ADD8E6] via-[#87CEFA] via-[#00BFFF] via-[#a1fda1] via-[#008080] to-[#00008B] z-0"></div>

  //     {/* Content layer */}
  //     <div className="relative z-10">
  //       <div className="max-w-[1084px] mx-auto ">
  //         <FirstBigCard />

  //         <div class=" flex flex-col max-w-[1084px]  m-auto py-20">
  //           <GreenCard />
  //           <PractiseOneCard />
  //           <PractiseTwoCard />
  //           <PractiseThreeCard />
  //           <PractiseFourCard />
  //           <PractiseFiveCard />
  //         </div>

  //         <SecondBigCard />
  //       </div>
  //       <div className="max-w-[1084px] mx-auto ">
  //         <FirstBigCard />

  //         <div class=" flex flex-col max-w-[1084px]  m-auto py-20">
  //           <GreenCard />
  //           <PractiseOneCard />
  //           <PractiseTwoCard />
  //           <PractiseThreeCard />
  //           <PractiseFourCard />
  //           <PractiseFiveCard />
  //         </div>

  //         <SecondBigCard />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Sun - Circle at the top */}
      <div className="absolute top-0 right-0 transform -translate-x-1/2 w-40 h-40 bg-yellow-400 rounded-full shadow-lg z-20"></div>

      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#ADD8E6] via-[#87CEFA] via-[#00BFFF] via-[#a1fda1] via-[#008080] to-[#00008B] z-0"></div>

      {/* Content layer */}
      <div className="relative z-10 pb-40 pt-10">
        <div className="max-w-[1084px] mx-auto">
          <FirstBigCard />

          <div className="flex flex-col max-w-[1084px] m-auto py-20">
            <GreenCard />
            <PractiseOneCard />
            <PractiseTwoCard />
            <PractiseThreeCard />
            <PractiseFourCard />
            <PractiseFiveCard />
          </div>

          <SecondBigCard />
        </div>
        <div className="max-w-[1084px] mx-auto">
          <FirstBigCard />

          <div className="flex flex-col max-w-[1084px] m-auto py-20">
            <GreenCard />
            <PractiseOneCard />
            <PractiseTwoCard />
            <PractiseThreeCard />
            <PractiseFourCard />
            <PractiseFiveCard />
          </div>

          <SecondBigCard />
        </div>
      </div>
      {/* Clouds */}
      <div className="w-full h-40 ">
        <div className="cloud cloud1 absolute top-[9%]"></div>
        <div className="cloud cloud2 absolute top-[10%]"></div>
        <div className="cloud cloud3 top-[12%] absolute"></div>
        <div className="cloud cloud4 top-[10%]"></div>
        <div className="cloud cloud5 top-[7%]"></div>
        <div className="cloud cloud6 top-[8%]"></div>
      </div>
      {/* Fish moving from left to right */}
      <div className=" w-full">
        <img
          src={FishImage}
          alt="Fish"
          className="fish1 h-20  absolute bottom-[20%]"
        />
        <img
          src={FishImage}
          alt="Fish"
          className="fish2  h-20 absolute bottom-[25%]"
        />
        <img
          src={FishImage}
          alt="Fish"
          className="fish1 h-20  absolute bottom-[20%]"
        />
        <img
          src={FishImage}
          alt="Fish"
          className="fish2  h-20 absolute bottom-[15%]"
        />
        <img
          src={FishImage}
          alt="Fish"
          className="fish1 h-20  absolute bottom-[19%]"
        />
        <img
          src={FishImage}
          alt="Fish"
          className="fish3  h-20 absolute bottom-[18%]"
        />
      </div>
      {/* Winds */}

      {/* Wind Lines Animation */}
      <div className="absolute top-[26%] w-full inset-0 ">
        <svg viewBox="0 0 800 400">
          <path
            id="wind-line-1"
            class="wind-line"
            d="M -200 100 Q 150 50 200 100 T 300 100 Q 350 150 400 100 T 600 100"
          />
          <path
            id="wind-line-2"
            class="wind-line"
            d="M -200 200 Q 200 100 300 200 T 500 200 Q 600 300 800 200"
          />
          <path
            id="wind-line-3"
            class="wind-line"
            d="M -250 300 Q 150 200 250 300 T 450 300 Q 550 400 850 300"
          />
          <path
            id="wind-line-4"
            class="wind-line"
            d="M -250 150 Q 150 50 250 150 T 450 150 Q 550 250 850 150"
          />
          <path
            id="wind-line-5"
            class="wind-line"
            d="M -200 250 Q 150 150 250 250 T 450 250 Q 550 350 800 250"
          />
        </svg>
      </div>

      {/* Tree at the bottom */}
      <div className=" w-full h-full z-10 pointer-events-none">
        <div className="absolute left-14 bottom-[55%] w-20 h-40 bg-green-700 rounded-b-full tree"></div>
        <div className="absolute right-10 bottom-[50%] w-24 h-48 bg-green-600 rounded-b-full tree"></div>
        <div className="absolute right-14 bottom-[55%] w-20 h-40 bg-green-700 rounded-b-full tree"></div>
      </div>

      {/* Animated Water Plants at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 flex justify-around items-end overflow-hidden">
        <div className="water-plant"></div>
        <div className="water-plant"></div>
        <div className="water-plant"></div>
        <div className="water-plant"></div>
      </div>
    </div>
  );
}

export default TestPage;
