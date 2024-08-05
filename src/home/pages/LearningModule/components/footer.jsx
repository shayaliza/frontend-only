// src/components/Footer.js
import { useState } from 'react';

const Footer = ({ onNextLesson, onPrevLesson }) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const toggleFeedbackPopup = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  const handleCharCount = (e) => {
    setCharCount(e.target.value.length);
  };

  const handleSubmit = () => {
    alert('Feedback submitted!');
    toggleFeedbackPopup();
  };

  return (
    <footer className="footer py-4 px-3 sm:px-6 flex items-center justify-between border-2 shadow-xl">
      {/* Previous Lesson Button */}
      <button onClick={onPrevLesson} className="lesson-button border border-gray-500 px-2 py-1 rounded-md text-sm flex items-center">
        <span>&lt;</span> Prev Lesson
      </button>
      <button onClick={toggleFeedbackPopup} className="lesson-button border border-gray-500 px-2 py-1 ml-3 rounded-md text-sm flex items-center">
        Feedback
      </button>

      {/* Next Lesson Button */}
      <button onClick={onNextLesson} className="lesson-button bg-blue-500 text-white px-2 py-1 rounded-md text-sm flex items-center">
        Next Lesson <span>&gt;</span>
      </button>

      {/* Feedback Popup */}
      {isFeedbackOpen && (
        <div id="feedbackPopup" className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 max-[500px]:w-80 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center pb-3">
                <h3 className="text-xl font-semibold">Provide Feedback</h3>
                <button onClick={toggleFeedbackPopup} className="text-black text-3xl font-bold">
                  &times;
                </button>
              </div>
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Feedback type</label>
                <select id="feedbackType" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select type of feedback...</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Feedback message</label>
                <textarea
                  id="feedbackMessage"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  maxLength="1000"
                  onChange={handleCharCount}
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  <span>{charCount}</span> / 1000
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={toggleFeedbackPopup} className="px-4 py-2 bg-gray-200 text-black rounded-md mr-2">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="px-4 py-2 bg-green-400 text-white rounded-md">
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
