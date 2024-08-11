// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import {
//   setTimer,
//   setCanResend,
//   incrementResendAttempts,
//   setLastResendTimestamp,
// } from "./../../../features/mail/mailSlice";
// import { login, setUserData } from "../../../features/user/userSlice";
// import { jwtDecode } from "jwt-decode";
// import {
//   refreshTokenFetch,
//   reqVerificationEmailFetch,
// } from "../../../fetching/authFetch";
// import { FaSpinner } from "react-icons/fa6";

// const SendMail = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const reduxAccessToken = useSelector(
//     (state) => state.user.userData.reduxAccessToken
//   );
//   const reduxRefreshToken = useSelector(
//     (state) => state.user.userData.reduxRefreshToken
//   );

//   const timer = useSelector((state) => state.mail.timer);
//   const canResend = useSelector((state) => state.mail.canResend);
//   const resendAttempts = useSelector((state) => state.mail.resendAttempts);
//   const lastResendTimestamp = useSelector(
//     (state) => state.mail.lastResendTimestamp
//   );
//   useEffect(() => {
//     if (reduxRefreshToken) {
//       userVerification();
//     }
//   }, []);
//   // Effect to handle timer countdown
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         dispatch(setTimer(timer - 1));
//       }, 1000);

//       return () => clearInterval(interval);
//     } else if (timer === 0 && !canResend) {
//       dispatch(setCanResend(true));
//     }
//   }, [timer, dispatch, canResend]);

//   const handleSendMail = () => {
//     const now = Date.now();

//     if (resendAttempts < 3) {
//       let waitTime;

//       if (resendAttempts === 0) waitTime = 30;
//       else if (resendAttempts === 1) waitTime = 90;
//       else if (resendAttempts === 2) waitTime = 150;

//       dispatch(setLastResendTimestamp(now));
//       dispatch(setTimer(waitTime));
//       dispatch(incrementResendAttempts());
//       dispatch(setCanResend(false));
//     } else {
//       alert("No more attempts allowed");
//     }
//   };

//   // Effect to initialize timer on page load or refresh
//   useEffect(() => {
//     if (lastResendTimestamp && timer === 0) {
//       const timePassed = Math.floor((Date.now() - lastResendTimestamp) / 1000);
//       let remainingTime;

//       if (resendAttempts === 1) remainingTime = 30 - timePassed;
//       else if (resendAttempts === 2) remainingTime = 90 - timePassed;
//       else if (resendAttempts === 3) remainingTime = 150 - timePassed;

//       if (remainingTime > 0) {
//         dispatch(setTimer(remainingTime));
//         dispatch(setCanResend(false));
//       } else {
//         dispatch(setCanResend(true));
//       }
//     }
//   }, [lastResendTimestamp, resendAttempts, timer, dispatch]);

//   const userVerification = async () => {
//     const res = await refreshTokenFetch(reduxRefreshToken);
//     console.log(res.data);
//     if (res.status === 200) {
//       dispatch(setUserData({ reduxAccessToken: res.data.access }));
//       const decodedToken = jwtDecode(res.data.access);
//       if (decodedToken.is_email_verified) {
//         console.log("Email already verified, redirecting to dashboard...");
//         dispatch(login());
//         navigate("/dashboard/profile");
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <button
//         onClick={handleSendMail}
//         disabled={!canResend}
//         className={`px-4 py-2 rounded ${
//           canResend
//             ? "bg-blue-500 hover:bg-blue-700 text-white"
//             : "bg-gray-500 cursor-not-allowed text-gray-300"
//         }`}
//       >
//         {canResend
//           ? `Send Mail (${3 - resendAttempts} attempts left)`
//           : `Wait ${timer} seconds`}
//       </button>
//       <p className="text-sm text-gray-600">
//         {canResend
//           ? `You have ${3 - resendAttempts} attempts left today.`
//           : `Next attempt in ${timer} seconds.`}
//       </p>
//     </div>
//   );
// };

// export default SendMail;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import {
  setTimer,
  setCanResend,
  incrementResendAttempts,
  setLastResendTimestamp,
  clearMailData,
} from "./../../../features/mail/mailSlice";
import { login, setUserData } from "../../../features/user/userSlice";
import { jwtDecode } from "jwt-decode";
import {
  refreshTokenFetch,
  reqVerificationEmailFetch,
} from "../../../fetching/authFetch";
import { FaSpinner } from "react-icons/fa6";

const SendMail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const reduxAccessToken = useSelector(
    (state) => state.user.userData.reduxAccessToken
  );
  const reduxRefreshToken = useSelector(
    (state) => state.user.userData.reduxRefreshToken
  );

  const timer = useSelector((state) => state.mail.timer);
  const canResend = useSelector((state) => state.mail.canResend);
  const resendAttempts = useSelector((state) => state.mail.resendAttempts);
  const lastResendTimestamp = useSelector(
    (state) => state.mail.lastResendTimestamp
  );

  useEffect(() => {
    if (reduxRefreshToken) {
      userVerification();
    }
  }, []);

  // Effect to handle timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && !canResend) {
      dispatch(setCanResend(true));
    }
  }, [timer, dispatch, canResend]);

  const handleSendMail = async () => {
    const now = Date.now();

    if (resendAttempts < 3) {
      let waitTime;

      if (resendAttempts === 0) waitTime = 30;
      else if (resendAttempts === 1) waitTime = 90;
      else if (resendAttempts === 2) waitTime = 150;

      dispatch(setLastResendTimestamp(now));
      dispatch(setTimer(waitTime));
      dispatch(incrementResendAttempts());
      dispatch(setCanResend(false));

      // Make the API call to resend the verification email
      // try {
      //   const response = await reqVerificationEmailFetch(reduxAccessToken);
      //   if (response.status === 200) {
      //     console.log("Verification email sent successfully.");
      //     toast({
      //       title: "Verification email sent successfully.",
      //       status: "success",
      //       isClosable: true,
      //     });
      //   } else {
      //     console.error("Failed to send verification email.", response.data);
      //   }
      // } catch (error) {
      //   console.error("Error sending verification email.", error);
      // }
      try {
        const response = await reqVerificationEmailFetch(reduxAccessToken);

        if (response.status === 200) {
          console.log("Verification email sent successfully.");
          toast({
            title: "Verification email sent successfully.",
            status: "success",
            isClosable: true,
          });
        } else if (response.status === 429) {
          // Handle "Too Many Requests"
          console.error("Too many requests. Please try again later.");
          toast({
            title: "Too many requests. Please try again later.",
            status: "error",
            isClosable: true,
          });
        } else {
          console.error("Failed to send verification email.", response.data);
          toast({
            title: "Failed to send verification email.",
            status: "error",
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Error sending verification email.", error);
        toast({
          title: "Error sending verification email.",
          status: "error",
          isClosable: true,
        });
      }
    } else {
      alert("No more attempts allowed");
    }
  };

  // Effect to initialize timer on page load or refresh
  useEffect(() => {
    if (lastResendTimestamp && timer === 0) {
      const timePassed = Math.floor((Date.now() - lastResendTimestamp) / 1000);
      let remainingTime;

      if (resendAttempts === 1) remainingTime = 30 - timePassed;
      else if (resendAttempts === 2) remainingTime = 90 - timePassed;
      else if (resendAttempts === 3) remainingTime = 150 - timePassed;

      if (remainingTime > 0) {
        dispatch(setTimer(remainingTime));
        dispatch(setCanResend(false));
      } else {
        dispatch(setCanResend(true));
      }
    }
  }, [lastResendTimestamp, resendAttempts, timer, dispatch]);

  const userVerification = async () => {
    console.log("verifying user...");
    const res = await refreshTokenFetch(reduxRefreshToken);
    console.log(res);
    if (res.status === 200) {
      dispatch(setUserData({ reduxAccessToken: res.data.access }));
      const decodedToken = jwtDecode(res.data.access);
      console.log(decodedToken);
      if (decodedToken.is_email_verified) {
        dispatch(login());
        navigate("/dashboard/profile");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center space-y-4">
      <button
        onClick={handleSendMail}
        disabled={!canResend}
        className={`px-4 py-2 rounded ${
          canResend
            ? "bg-blue-500 hover:bg-blue-700 text-white"
            : "bg-gray-500 cursor-not-allowed text-gray-300"
        }`}
      >
        {canResend
          ? `Send Mail (${3 - resendAttempts} attempts left)`
          : `Wait ${timer} seconds`}
      </button>
      <p className="text-sm text-gray-600">
        {canResend
          ? `You have ${3 - resendAttempts} attempts left today.`
          : `Next attempt in ${timer} seconds.`}
      </p>
      {/* <div onClick={() => dispatch(clearMailData())}>Clear Mail data</div> */}
    </div>
  );
};

export default SendMail;
