import React, { useState } from "react";
import { createPortal } from "react-dom";

function AddChannel({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // Step tracker
  const [channelName, setChannelName] = useState(""); // Channel name
  const [groupCount, setGroupCount] = useState(1); // Number of groups
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0); // Current group being edited
  const [groups, setGroups] = useState([]); // Array to hold group data

  const handleChannelNameChange = (e) => setChannelName(e.target.value);

  const handleGroupCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setGroupCount(count);
    setGroups(Array(count).fill({ name: "", description: "" }));
  };

  const handleGroupChange = (key, value) => {
    setGroups((prevGroups) =>
      prevGroups.map((group, i) =>
        i === currentGroupIndex ? { ...group, [key]: value } : group
      )
    );
  };

  const handleNext = () => {
    if (currentGroupIndex < groupCount - 1) {
      setCurrentGroupIndex(currentGroupIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentGroupIndex > 0) {
      setCurrentGroupIndex(currentGroupIndex - 1);
    } else {
      setStep(1); // Go back to channel creation step
    }
  };

  const handleSubmit = () => {
    const channelData = {
      channelName,
      groups,
    };
    console.log("Created Channel Data:", channelData);
    setChannelName("");
    setGroupCount(1);
    setGroups([]);
    setCurrentGroupIndex(0);
    onClose();
  };

  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg border dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                {step === 1 ? "Create Channel" : `Group ${currentGroupIndex + 1}`}
              </h2>
              <button className="text-gray-400" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {step === 1 && (
              <>
                <input
                  type="text"
                  value={channelName}
                  onChange={handleChannelNameChange}
                  placeholder="Enter channel name..."
                  className="w-full px-3 py-2 mb-4 text-sm bg-transparent rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative mb-4">
                  <label className="block text-sm mb-2">Number of Groups</label>
                  <select
                    value={groupCount}
                    onChange={handleGroupCountChange}
                    className="w-full px-3 py-2 text-sm bg-transparent rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num} className="bg-white text-black dark:bg-gray-700 dark:text-white">
                        {num}
                      </option>
                    ))}
                  </select>
                  <span className="text-xs">Max groups: 5</span>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!channelName.trim()}
                  className={`w-full px-4 py-2 rounded ${
                    channelName.trim()
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  create
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  value={groups[currentGroupIndex]?.name }
                  onChange={(e) => handleGroupChange("name", e.target.value)}
                  placeholder={`Group ${currentGroupIndex + 1} Name`}
                  className="w-full px-3 py-2 mb-2 text-sm bg-transparent rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  value={groups[currentGroupIndex]?.description }
                  onChange={(e) =>
                    handleGroupChange("description", e.target.value)
                  }
                  placeholder={`Group ${currentGroupIndex + 1} Description`}
                  className="w-full px-3 py-2 text-sm bg-transparent rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-between mt-4">
                  <button
                    onClick={handleBack}
                    className="px-4 py-2 border dark:border-gray-700 rounded hover:bg-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!groups[currentGroupIndex]?.name.trim()}
                  className={`px-4 py-2 rounded ${
                    groups[currentGroupIndex]?.name.trim() && groups[currentGroupIndex]?.description
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  >
                    {currentGroupIndex < groupCount - 1 ? "Next" : "Finish"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal-root")
  );
}

export default AddChannel;
