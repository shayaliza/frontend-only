import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Search from "./Search";

function DesktopRoutes() {
  return (
    <></>
      // <Routes>
      // <Route path="managesnap/channels" element={<Layout />} />
      //   <Route path="managesnap/channels/:channelName" element={<Layout />} />
      //   <Route path="managesnap/direct/:dmName" element={<Layout />} />
      //   <Route path="managesnap/search" element={<Search />} />
      // </Routes>
  );
}

export default DesktopRoutes;
