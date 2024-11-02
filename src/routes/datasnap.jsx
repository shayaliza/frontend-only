import React from "react";
import { Route, Routes } from "react-router-dom";

import DataSnapLayout from "@/datasnap/components/Layout";
import BlogHome from "@/datasnap/components/Home";
import BlogExplore from "@/datasnap/components/Explore";
import BlogDrafts from "@/datasnap/components/Drafts";
import BlogBookmarks from "@/datasnap/components/Bookmarks";
import BlogSearch from "@/datasnap/components/Search";
import BlogCreate from "@/datasnap/components/Blog/BlogCreate";
import BlogEdit from "@/datasnap/components/Blog/BlogEdit";

import BlogDetails from "@/datasnap/components/Details";
import { Navigate } from "react-router-dom";
export default function DataSnapRoutes() {
  return (
    <Routes>
      <Route path="/datasnap" element={<DataSnapLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<BlogHome />} />
        <Route path="explore" element={<BlogExplore />} />
        <Route path="drafts" element={<BlogDrafts />} />
        <Route path="bookmarks" element={<BlogBookmarks />} />
        <Route path="detail" element={<BlogDetails />} />
      </Route>
      <Route path="ds/create" element={<BlogCreate />} />
      <Route path="/ds/edit/:id" element={<BlogEdit />} />
      <Route path="ds/search" element={<BlogSearch />} />
    </Routes>
  );
}
