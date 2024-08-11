import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyEmailTokenFetch } from "../../../fetching/authFetch";
import { useDispatch } from "react-redux";
import { setVerified } from "../../../features/user/userSlice";

const VerifyEmailToken = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("token");
      await verifyEmailTokenFetch(token)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            dispatch(setVerified(true));
            navigate("/signin");
          }

          if (res.status === 400) {
            navigate("/signin");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    verifyEmail();
  }, [navigate, location]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="loader border-4 border-t-4 border-blue-500 rounded-full w-16 h-16 mb-4 mx-auto animate-spin"></div>
        <p className="text-lg font-semibold text-gray-700">
          Verifying your email...
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailToken;
