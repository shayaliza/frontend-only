import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

function Privacy() {
  const [isFollowOn, setIsFollowOn] = useState(false);
  const [isListProfileOn, setIsListProfileOn] = useState(false);
  const [isShowSearchOn, setIsShowSearchOn] = useState(false);
  const [isPersonalizedAdsOn, setIsPersonalizedAdsOn] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold">Social Interactions</h1>
      <div className="flex justify-between items-center">
        <div>
          <p>Allow people to follow you</p>
          <p className="text-xs text-gray-500">
            Let people follow you to see your profile posts in their home feed
          </p>
        </div>
        <button className="flex items-center">
          <ToggleSwitch
            isOn={isFollowOn}
            handleToggle={() => setIsFollowOn((prevState) => !prevState)}
          />
        </button>
      </div>
      
      <div className="flex justify-between items-center">
        <span>Who can send you inbox messages </span>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>

      <div className="flex justify-between items-center">
        <span>Allow chat request from</span>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>

      <div className="flex justify-between items-center">
        <span>Blocked accounts</span>
        <button className="flex items-center">
          <span>&gt;</span>
        </button>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-bold">Discoverability</h2>
        <div className="flex justify-between items-center">
          <div>
            <p>List your profile on old.reddit.com/users</p>
            <p className="text-xs text-gray-500">
              List your profile on old.reddit.com/users and allow posts to your profile to appear in r/all
            </p>
          </div>
          <button className="flex items-center">
            <ToggleSwitch
              isOn={isListProfileOn}
              handleToggle={() => setIsListProfileOn((prevState) => !prevState)}
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p>Show up in search results</p>
            <p className="text-xs text-gray-500">
              Allow search engines like Google to link to your profile in their search results
            </p>
          </div>
          <button className="flex items-center">
            <ToggleSwitch
              isOn={isShowSearchOn}
              handleToggle={() => setIsShowSearchOn((prevState) => !prevState)}
            />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-bold">Ads Personalization</h2>
        <div className="flex justify-between items-center">
          <div>
            <p>Personalize ads on Reddit based on information and activity from our partners</p>
            <p className="text-xs text-gray-500">
              Allow us to use information from our partners to show you better ads on Reddit
            </p>
          </div>
          <button className="flex items-center">
            <ToggleSwitch
              isOn={isPersonalizedAdsOn}
              handleToggle={() => setIsPersonalizedAdsOn((prevState) => !prevState)}
            />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-bold">Advanced</h2>
        <div className="flex justify-between items-center">
          <span>Third party app authorizations</span>
          <button className="flex items-center">
            <span>&gt;</span>
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p>Clear</p>
            <p className="text-xs text-gray-500">Delete your post views history</p>
          </div>
          <button className="px-4 py-2 rounded-full border hover:bg-gray-500">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
