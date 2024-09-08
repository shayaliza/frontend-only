import React, { useEffect, useState } from "react";
import logo from "./assets/rsc/faviconmobile.png"

const SplashScreen = () => {
  

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white fixed inset-0 z-50 transition-opacity duration-500">
      <img
        src={logo} 
        alt="Splash Logo"
        className="h-48 w-48 animate-bounce"
      />
    </div>
  );
};

export default SplashScreen;