import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { reqVerificationEmailFetch } from "../../../fetching/authFetch";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";

const SendMail = () => {
  const navigate = useNavigate();
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(0);
  const [resendAttempts, setResendAttempts] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Get the token from the Redux store
  const reduxAccessToken = useSelector(
    (state) => state.user.userData.reduxAccessToken
  );

  useEffect(() => {
    //@ Decoding and checking if email is already verified if verified redirecting to dashboard
    if (reduxAccessToken) {
      setLoaded(true);
      console.log("Decoding token...");
      const decodedToken = jwtDecode(reduxAccessToken);
      if (decodedToken.is_email_verified) {
        console.log("Email already verified, redirecting to dashboard...");
        navigate("/dashboard/profile");
      }
      setLoaded(false);
    }
    //@ Check Done
    // Load resend attempts and timer from local storage
    const storedAttempts = parseInt(
      localStorage.getItem("resendAttempts") || "0",
      10
    );
    setResendAttempts(storedAttempts);

    if (storedAttempts >= 3) {
      const lastAttemptDate = localStorage.getItem("lastAttemptDate");
      if (
        lastAttemptDate &&
        new Date().toDateString() !== new Date(lastAttemptDate).toDateString()
      ) {
        // Reset attempts if a new day has started
        localStorage.setItem("resendAttempts", "0");
        setResendAttempts(0);
      }
    }

    // Timer logic
    const storedTimer = parseInt(
      localStorage.getItem("resendTimer") || "0",
      10
    );
    if (storedTimer > 0) {
      setTimer(storedTimer);
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, []);

  const handleResend = async () => {
    if (resendAttempts >= 3) {
      alert("You can only send 3 mails per day.");
      return;
    }

    // Make the API call to resend the verification email
    try {
      const response = await reqVerificationEmailFetch(reduxAccessToken);
      console.log(response);
      if (response.status === 200) {
        console.log("Verification email sent successfully.");
      } else {
        console.error("Failed to send verification email.", response.data);
      }
    } catch (error) {
      console.error("Error sending verification email.", error);
    }

    // Update resend attempts
    const newAttempts = resendAttempts + 1;
    setResendAttempts(newAttempts);
    localStorage.setItem("resendAttempts", newAttempts.toString());
    localStorage.setItem("lastAttemptDate", new Date().toString());

    let newTimer;
    if (newAttempts === 1) {
      newTimer = 60;
    } else {
      newTimer = 90;
    }

    // Start new timer
    setTimer(newTimer);
    setCanResend(false);
    localStorage.setItem("resendTimer", newTimer.toString());

    // Update timer every second
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          localStorage.removeItem("resendTimer");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {loaded ? (
        <div>
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Check your mail for verification.
          </p>
          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300 ${
              canResend
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {canResend
              ? "Resend Mail"
              : `Resend in ${Math.floor(timer / 60)}:${(timer % 60)
                  .toString()
                  .padStart(2, "0")}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default SendMail;
