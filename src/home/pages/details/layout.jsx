import React from "react";
import First from "./first";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* <First /> */}
      <Outlet />
    </div>
  );
}

export default Layout;
