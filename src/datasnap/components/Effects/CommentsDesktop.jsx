import { Heart, Send, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

function CommentsDesktop({ isOpen, onClose, comments = [], profileImg }) {
  const [newComment, setNewComment] = useState("");
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-gray-800/70 transition-all">
          <div
            ref={popupRef}
            className="bg-white dark:bg-black rounded-xl shadow-2xl p-6 w-full max-w-xl border border-gray-200 dark:border-gray-700 transform transition-transform scale-95 hover:scale-100"
            role="dialog"
            aria-label="More options"
          >
            <div className=" bg-white dark:bg-black rounded-t-3xl z-50 h-[80vh] flex flex-col overflow-hidden">
              <div className="relative flex items-center justify-between p-4 border-b shrink-0">
                <h2 className="font-semibold text-lg mx-auto">Comments</h2>
                <button onClick={onClose} className="absolute right-4">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <img
                        src={comment.profileImg}
                        alt={comment.author}
                        className="w-8 h-8 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline space-x-2">
                          <span className="font-semibold text-sm">
                            {comment.author}
                          </span>
                          <span className="text-xs text-gray-500">
                            {comment.time}
                          </span>
                        </div>
                        <p className="text-sm">{comment.text}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <button>Reply</button>
                        </div>
                      </div>
                    </div>
                    <button className="ml-2">
                      <Heart className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-t p-4 flex items-center space-x-3 shrink-0"
              >
                <img
                  src={profileImg}
                  alt="Your profile"
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                />
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="text-green-600 font-bold disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CommentsDesktop;
