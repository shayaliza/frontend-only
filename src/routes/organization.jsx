import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//@ Organizations Imports
const OrganizationLayout = React.lazy(() => import("@/organization/layout"));
const OrganizationFirst = React.lazy(() => import("@/organization/first"));
const OrganizationSecond = React.lazy(() => import("@/organization/second"));
const OrganizationThird = React.lazy(() => import("@/organization/third"));
const OrganizationFourth = React.lazy(() => import("@/organization/fourth"));
const OrganizationFifth = React.lazy(() => import("@/organization/fifth"));
const OrganizationSixth = React.lazy(() => import("@/organization/sixth"));
export default function OrgnaizationRoutes() {
  return (
    <Routes>
      <Route path="/organization" element={<OrganizationLayout />}>
        <Route index path="first" element={<OrganizationFirst />} />
        <Route path="second" element={<OrganizationSecond />} />
        <Route path="third" element={<OrganizationThird />} />
        <Route path="fourth" element={<OrganizationFourth />} />
        <Route path="fifth" element={<OrganizationFifth />} />
        <Route path="sixth" element={<OrganizationSixth />} />
      </Route>
    </Routes>
  );
}
