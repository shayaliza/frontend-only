import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MSMobileLayout from "@/managesnap/components/Mobileview/Layout";
import MSMobileChannels from "@/managesnap/components/Mobileview/Home";
import MSMobileMessages from "@/managesnap/components/Mobileview/Messages";
import MSMobileCalendar from "@/managesnap/components/Mobileview/Calendar";
import MSMobileNotification from "@/managesnap/components/Mobileview/Notification";
import MSMobileSettings from "@/managesnap/components/Mobileview/Settings";
import MSMobileChat from "@/managesnap/components/Mobileview/Chat";
import MSMobileProfile from "@/managesnap/components/Mobileview/Profile";
import MSMobileSearch from "@/managesnap/components/Mobileview/Search";

import MSLayout from "@/managesnap/components/MSLayout";
import MSHome from "@/managesnap/components/MessageSection";
import MSDMs from "@/managesnap/components/DMs";
import MSNotifications from "../managesnap/components/Activity"
import MSSettings from "@/managesnap/components/Settings"
// import MSDesktopDMs from "@/managesnap/components/DMsLayout";

export default function ManageSnapRoutes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Routes>
      {isMobile ? (
        <>
          <Route path="/managesnap" element={<MSMobileLayout />}>
            <Route index element={<Navigate to="channels" replace />} />
            <Route path="channels" element={<MSMobileChannels />} />
            <Route path="dms" element={<MSMobileMessages />} />
            <Route path="calendar" element={<MSMobileCalendar />} />
            <Route path="notifications" element={<MSMobileNotification />} />
            <Route path="settings" element={<MSMobileSettings />} />
          </Route>
          <Route path="/managesnap/chat/:type/:id" element={<MSMobileChat />} />
          <Route path="/managesnap/profile/:id" element={<MSMobileProfile />} />
          <Route path="/managesnap/search" element={<MSMobileSearch />} />
        </>
      ) : (
        <Route path="/managesnap" element={<MSLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<MSHome />} />
          <Route path="home/:channelId" element={<MSHome />} />
          <Route path="home/:chatId" element={<MSHome />} />
          <Route path="dms" element={<MSDMs />} />
          <Route path="notifications" element={<MSNotifications />} />
          <Route path="settings" element={<MSSettings />} />
          {/* <Route path="/managesnap/dms" element={<MSDesktopDMs />} /> */}
        </Route>
      )}
    </Routes>
  );
}
