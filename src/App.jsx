import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

import { isIOSMobileOrTablet } from "./utils/isIOSMobileOrTablet";
import SplashScreen from "./SplashScreen";
import setupInterceptors from "./fetching/Interceptor/interceptors";
// Routes
import DashboardRoutes from "./routes/dashboard";
import AuthRoutes from "./routes/auth";
import OrgnaizationRoutes from "./routes/organization";
import DataSnapRoutes from "./routes/datasnap";
import CreateSnapRoutes from "./routes/createsnap";
import SupportRoutes from "./routes/support";
import OtherRoutes from "./routes/other";
import ManageSnapRoutes from "./routes/managesnap";

// setting up interceptors
setupInterceptors();
function AppRoutes() {
  const [showSplash, setShowSplash] = useState(false);

  const splashScreenShown = sessionStorage.getItem("splashScreenShown");

  useEffect(() => {
    if (!splashScreenShown && isIOSMobileOrTablet()) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem("splashScreenShown", "true");
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [showSplash]);

  return (
    <div className="">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Suspense fallback={<FaSpinner className="animate-spin" />}>
          <Router>
            <AuthRoutes />
            <DashboardRoutes />
            <OrgnaizationRoutes />
            <DataSnapRoutes />
            <CreateSnapRoutes />
            <SupportRoutes />
            <OtherRoutes />
            <ManageSnapRoutes />
          </Router>
        </Suspense>
      )}
    </div>
  );
}

export default AppRoutes;
