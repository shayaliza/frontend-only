import React from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = React.lazy(() => import("@/home/pages/landingPage"));
import Search from "@/home/pages/search/search";
import LearnModule from "@/home/pages/LearningModule/LearnModule";
const TestPage = React.lazy(() => import("@/home/pages/testPage/testPage"));
const TestPage2 = React.lazy(() => import("@/home/pages/testPage/testPage2"));
const Calender = React.lazy(() => import("@/calender/calender"));
const TestPage3 = React.lazy(() =>
  import("@/home/pages/myFeed/component/comment/test")
);
export default function OtherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/search" element={<Search />} />
      <Route path="learningmodule" element={<LearnModule />} />
      <Route path="testpage" element={<TestPage />} />
      <Route path="testpage2" element={<TestPage2 />} />
      <Route path="calender" element={<Calender />} />
      <Route path="test" element={<TestPage3 />} />
    </Routes>
  );
}
