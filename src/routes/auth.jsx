import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import VerifyEmailToken from "@/home/pages/authentication/verifyEmailToken";
import SignIn from "@/home/pages/authentication/signin";
import SignUp from "@/home/pages/authentication/signup";
import ForgotPassword from "@/home/pages/authentication/forgotpass";
const SetNewPassword = React.lazy(() =>
  import("@/home/pages/authentication/setNewpass")
);
import SendMail from "@/home/pages/authentication/sendMail";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset-password" element={<SetNewPassword />} />
      <Route path="/resendmail" element={<SendMail />} />
      <Route path="/verify-email" element={<VerifyEmailToken />} />
    </Routes>
  );
}
