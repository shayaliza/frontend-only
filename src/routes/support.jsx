import React from "react";
import { Route, Routes } from "react-router-dom";

const DetailPageLayout = React.lazy(() =>
  import("@/home/pages/details/layout")
);
const First = React.lazy(() => import("@/home/pages/details/first"));
const Second = React.lazy(() => import("@/home/pages/details/second"));
const Third = React.lazy(() => import("@/home/pages/details/third"));
const Fourth = React.lazy(() => import("@/home/pages/details/fourth"));

export default function SupportRoutes() {
  return (
    <Routes>
      <Route path="detailsPages" element={<DetailPageLayout />}>
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
        <Route path="fourth" element={<Fourth />} />
      </Route>
    </Routes>
  );
}
