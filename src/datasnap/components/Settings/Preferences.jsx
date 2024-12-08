import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

function Preferences() {
  const [showMatureContent, setShowMatureContent] = useState(false);
  const [blurMatureContent, setBlurMatureContent] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(true);
  const [autoplayMedia, setAutoplayMedia] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [useCommunityThemes, setUseCommunityThemes] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-4">Content</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p>Show mature content (I'm over 18)</p>
            <p className="text-sm text-gray-400">
              See Not Safe for Work mature and adult content in your feeds and
              search results
            </p>
          </div>
          <button onClick={() => setShowMatureContent(!showMatureContent)}>
            <ToggleSwitch
              isOn={showMatureContent}
              handleToggle={() =>
                setShowMatureContent((prevState) => !prevState)
              }
            />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p>Blur mature (18+) images and media</p>
          </div>
          <button onClick={() => setBlurMatureContent(!blurMatureContent)}>
            <ToggleSwitch
              isOn={blurMatureContent}
              handleToggle={() =>
                setBlurMatureContent((prevState) => !prevState)
              }
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p>Show recommendations in home feed</p>
          </div>
          <button onClick={() => setShowRecommendations(!showRecommendations)}>
          <ToggleSwitch
              isOn={showRecommendations}
              handleToggle={() =>
                setShowRecommendations((prevState) => !prevState)
              }
            />
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Accessibility</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p>Autoplay media</p>
          </div>
          <button onClick={() => setAutoplayMedia(!autoplayMedia)}>
          <ToggleSwitch
              isOn={autoplayMedia}
              handleToggle={() =>
                setAutoplayMedia((prevState) => !prevState)
              }
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p>Reduce Motion</p>
          </div>
          <button onClick={() => setReduceMotion(!reduceMotion)}>
          <ToggleSwitch
              isOn={reduceMotion}
              handleToggle={() =>
                setReduceMotion((prevState) => !prevState)
              }
            />
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Experience</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p>Use community themes</p>
          </div>
          <button onClick={() => setUseCommunityThemes(!useCommunityThemes)}>
          <ToggleSwitch
              isOn={useCommunityThemes}
              handleToggle={() =>
                setUseCommunityThemes((prevState) => !prevState)
              }
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p>Default feed view</p>
          </div>
          <button className="flex items-center space-x-6">
            <span className='text-gray-500 dark:text-gray-400 text-sm'>Card</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
