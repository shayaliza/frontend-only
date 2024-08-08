import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ResetPasswordFetch } from "../../../fetching/authFetch";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
import { useState } from "react";

function SetNewPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const params = new URLSearchParams(location.search);
  const token1 = params.get("token");
  const handleSubmit = async () => {
    console.log(token1, password);
    await ResetPasswordFetch(token1, password).then((res) => {
      console.log(res);
      console.log(res);
      if (res.status === 200) {
        console.log("Password Reset Succesfully");
        alertify.success("Password Reset Successful");
      }
      if (res.status === 400) {
        console.log("Token Not Valid");
        alertify.error("Token Not Valid");
      }
    });
  };
  return (
    <div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div onClick={handleSubmit}>Submit</div>
    </div>
  );
}

export default SetNewPassword;
