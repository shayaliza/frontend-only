import React, {useState} from "react";
import ToggleSwitch from "./ToggleSwitch";

function Profile() {
    const [isMatureOn, setIsMatureOn] = useState(false);
    const [isActiveCommunitiesOn, setIsActiveCommunitiesOn] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className='text-lg font-semibold mb-6'>General</h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Display Name</p>
          <p className="text-xs text-gray-500">
            Connect to log in with your Google account
          </p>
        </div>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <span>About description</span>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="">Avatar</p>
          <p className="text-xs text-gray-500">
            Edit your avatar or add an image
          </p>
        </div>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="">Banner</p>
          <p className="text-xs text-gray-500">
            Upload a profile background image
          </p>
        </div>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <span>Social links</span>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Mark as Mature</p>
          <p className="text-xs text-gray-500">
            Label your profile as Not Safe for Work (NSFW) and ensure it's
            inaccessible to people under 18
          </p>
        </div>
        <button className="flex items-center">
        <ToggleSwitch
          isOn={isMatureOn}
          handleToggle={() => setIsMatureOn((prevState) => !prevState)}
        />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Show active communities</p>
          <p className="text-xs text-gray-500">
          Show what communities you're most active in on your profile
          </p>
        </div>
        <button className="flex items-center">
        <ToggleSwitch
          isOn={isActiveCommunitiesOn}
          handleToggle={() =>
            setIsActiveCommunitiesOn((prevState) => !prevState)
          }
        />

        </button>
      </div>
      <div className="space-y-6">
        <h2 className="text-lg font-bold">Advanced</h2>
        <div className="flex justify-between items-center">
          <span>Profile Moderation</span>
          <button className="flex items-center">
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
