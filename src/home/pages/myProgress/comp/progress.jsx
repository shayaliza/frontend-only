import React, { useState } from "react";
import TrendingCourse from "./trendingCourse";
import TrendingProject from "./trendingProject";
import TrendingCareer from "./trendingCareer";

function Progress() {
  return (
    <div className="final">
      {/* Trending Career with Swiper */}
      <div class="mb-4 mt-4 flex justify-between">
        <h1 class="text-lg font-bold">Trending Career Paths</h1>
      </div>
      <TrendingCareer />
      {/* Trending Course with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold mt-4">Trending Courses</h1>
      </div>
      <TrendingCourse />
      {/* Trending Career with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold mt-4 mb-4">Trending Projects</h1>
      </div>
      <TrendingProject />
      {/* Trending Course with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold mt-4">Trending Skillpath</h1>
      </div>
      <TrendingCourse />
      {/* Trending Career with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold mt-4 mb-4">Trending Assignments</h1>
      </div>
      <TrendingProject />
    </div>
  );
}

export default Progress;
