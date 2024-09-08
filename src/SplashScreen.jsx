import React, { useEffect, useState } from "react";
import logo from "../public/faviconmobile.png"

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

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