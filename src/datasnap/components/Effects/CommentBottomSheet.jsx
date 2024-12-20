import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Send, X } from 'lucide-react';

const CommentBottomSheet = ({ isOpen, onClose, comments = [], profileImg }) => {
  const [newComment, setNewComment] = useState('');
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isFullHeight, setIsFullHeight] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e) => {
    const isAtTop = e.target.scrollTop === 0;
    if (isAtTop && !isFullHeight) {
      setIsFullHeight(true); // Expand to full height
    } else if (!isAtTop && isFullHeight) {
      setIsFullHeight(false); // Return to initial height
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black rounded-t-3xl z-50 overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0, height: isFullHeight ? viewportHeight : "80vh" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            style={{ height: isFullHeight ? viewportHeight : "80vh" }}
          >

            <div className="relative flex items-center justify-between p-4 border-b shrink-0">
              <div className="w-12 h-1 bg-gray-300 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2" />
              <h2 className="font-semibold text-lg mx-auto">Comments</h2>
              <button onClick={onClose} className="absolute right-4">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4"
              onScroll={handleScroll}
            >
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
                        <span className="font-semibold text-sm">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-sm">{comment.text}</p>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                  <button className="ml-2">
                    <Heart className="w-4 h-4 text-gray-500"/>
                  </button>
                </div>
              ))}
            </div>

            <form 
              onSubmit={handleSubmit}
              className="border-t p-4 flex items-center space-x-3 shrink-0"
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
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
                className="text-blue-500 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommentBottomSheet;