import React from "react";
import {
  CogIcon,
  BellIcon,
  ChatIcon,
  UserIcon,
  PhoneIcon,
  DocumentTextIcon,
  ClockIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  LockClosedIcon,
  PlusCircleIcon,
  LogoutIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { useTheme } from "../../../DarkMode/ThemeProvider";

function SettingsPage() {
  const {theme} = useTheme();
  return (
    <div className={`${theme == 'dark' ? "text-gray-300" : "text-gray-700"}`}>
      {/* <div className="flex items-center h-16 justify-between mb-2 p-3 shadow bg-gray-50">
        <h1 className="text-xl font-bold text-black">Settings</h1>
        <button className="text-black">
          <CogIcon className="w-5 h-5" />
        </button>
      </div> */}
      <div className="space-y-4 p-4">
        <div className="border-b border-gray-500 pb-4">
          <h2 className="text-lg font-semibold">General</h2>
          <div className="space-y-3 mt-2">
            <div className="flex items-center justify-between p-2 rounded transition">
              <div className="flex items-center">
                <CogIcon className="w-5 h-5 mr-2" />
                <span>Appearance</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm">System default</span>
                <ChevronRightIcon className="w-4 h-4 " />
              </div>
            </div>
            <div className="flex items-center justify-between  p-2 rounded transition">
              <div className="flex items-center">
                <CogIcon className="w-5 h-5 mr-2 " />
                <span>Data and storage</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Your Organisation</h2>
          <div className="mt-3 border-b border-gray-500 pb-4">
            {[
              { icon: UserIcon, label: "Profile" },
              { icon: BellIcon, label: "Notifications" },
              { icon: ChatIcon, label: "Messaging" },
              { icon: UserIcon, label: "People" },
              { icon: PhoneIcon, label: "Calling" },
              { icon: DocumentTextIcon, label: "Captions and transcripts" },
              { icon: ClockIcon, label: "Shifts" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center p-2 rounded transition"
              >
                <Icon className="w-5 h-5 mr-2" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-500 pb-4">
          {[
            { icon: InformationCircleIcon, label: "About" },
            { icon: QuestionMarkCircleIcon, label: "Help and feedback" },
            { icon: LightBulbIcon, label: "What's new" },
            { icon: LockClosedIcon, label: "Privacy" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center p-2 rounded transition"
            >
              <Icon className="w-5 h-5 mr-2" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div>
          <button className="w-full flex items-center justify-between py-1 px-2 rounded hover:bg-blue-600 transition">
            <div className="flex items-center">
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              <span>Add account</span>
            </div>
          </button>
          <button className="w-full flex items-center justify-between py-1 px-2 rounded hover:bg-red-600 transition mt-2">
            <div className="flex items-center">
              <LogoutIcon className="w-5 h-5 mr-2" />
              <div className="flex flex-col items-start">
                <span>Sign out</span>
                <span className="text-sm">Vignesh Reddy</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
