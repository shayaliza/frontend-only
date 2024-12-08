import React from "react";
import { Route, Routes } from "react-router-dom";

import DataSnapLayout from "@/datasnap/components/Layout";
import BlogHome from "@/datasnap/components/Home";
import BlogExplore from "@/datasnap/components/Explore";
import BlogDrafts from "@/datasnap/components/Drafts";
import BlogPublised from "@/datasnap/components/Publised";
import BlogBookmarks from "@/datasnap/components/Bookmarks";
import BlogSearch from "@/datasnap/components/Search";
import BlogCreate from "@/datasnap/components/Blog/BlogCreate";
import BlogEdit from "@/datasnap/components/Blog/BlogEdit";
import BlogComments from "@/datasnap/components/Comments";
import BlogNotifications from "@/datasnap/components/Alerts";
import BlogSettings from "@/datasnap/components/Settings";

import BlogDetails from "@/datasnap/components/Details";
import { Navigate } from "react-router-dom";
import Account from "../datasnap/components/Settings/Account";
import Profile from "../datasnap/components/Settings/Profile";
import Privacy from "../datasnap/components/Settings/Privacy";
import Preferences from "../datasnap/components/Settings/Preferences";
import Notify from "../datasnap/components/Settings/Notify";
export default function DataSnapRoutes() {
  return (
    <Routes>
      <Route path="/datasnap" element={<DataSnapLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<BlogHome />} />
        <Route path="explore" element={<BlogExplore />} />
        <Route path="drafts" element={<BlogDrafts />} />
        <Route path="published" element={<BlogPublised />} />
        <Route path="bookmarks" element={<BlogBookmarks />} />
        <Route path="notifications" element={<BlogNotifications />} />
        <Route path="details" element={<BlogDetails />} />
        <Route path="settings" element={<BlogSettings />}>
        <Route index element={<Navigate to="account" replace />} />
          <Route path="account" element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="notifications" element={<Notify />} />
        </Route>
        <Route path="/datasnap/:id" element={<BlogComments />} />
      </Route>
      <Route path="ds/create" element={<BlogCreate />} />
      <Route path="/ds/edit/:id" element={<BlogEdit />} />
      <Route path="ds/search" element={<BlogSearch />} />
    </Routes>
  );
}
