import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { getAllData } from "../../../fetching/decodingJwt";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
// import refreshTokenFetch from "../../../fetching/Interceptor/refresh";

function AccountSettings() {
  const { toast } = useToast();

  // const reduxRefreshToken = useSelector(
  //   (state) => state.user.userData.reduxRefreshToken
  // );
  // const reduxAccessToken = useSelector(
  //   (state) => state.user.userData.reduxAccessToken
  // );
  // const [decodedItem, setDecodedItem] = useState({});

  // useEffect(() => {
  //   const decoded = getAllData(reduxAccessToken);
  //   setDecodedItem(decoded);
  // }, [reduxAccessToken]);

  // const handleGenerateToken = () => {
  //   const token = refreshTokenFetch(reduxRefreshToken);
  //   console.log(token);
  // };
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      <ThemeToggle />

      <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
        This box changes color based on the custom dark-mode class.
      </div>
      <div className="dark-mode">Placeholder for Tailwind</div>

      <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          Refresh Token
        </div>
        <div className="bg-gray-100 p-2 rounded text-sm text-gray-600 break-all">
          {/* {reduxRefreshToken} */}
          some refresh token
        </div>
      </div>

      <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          Access Token
        </div>
        <div className="bg-gray-100 p-2 rounded text-sm text-gray-600 break-all">
          {/* {reduxAccessToken} */}
          some Accss token
        </div>
      </div>

      <div className="w-full bg-white shadow-md rounded-lg p-4">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          Decoded Information
        </div>
        <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
          <pre className="whitespace-pre-wrap break-all">
            {/* {decodedItem
              ? JSON.stringify(decodedItem, null, 2)
              : "No data available"} */}
            decoded jwt
          </pre>
        </div>
        <Button variant="contained">Generate New Token</Button>
      </div>
    </div>
  );
}

export default AccountSettings;
