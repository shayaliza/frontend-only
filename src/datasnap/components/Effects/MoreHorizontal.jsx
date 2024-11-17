import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Ban, Share2, Eye, BookmarkPlus, Plus, Flag } from 'lucide-react';

const BottomSheet = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          className="fixed inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black rounded-t-3xl z-50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="p-4 space-y-4">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            
            <button className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Share2 className="w-5 h-5 mr-3" />
              <span>Share via</span>
            </button>
            
            <button className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Eye className="w-5 h-5 mr-3" />
              <span>Hide</span>
            </button>
            
            <button className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <BookmarkPlus className="w-5 h-5 mr-3" />
              <span>Read it later</span>
            </button>
            
            <button className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Plus className="w-5 h-5 mr-3" />
              <span>Follow Community Picks</span>
            </button>
            
            <button className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Ban className="w-5 h-5 mr-3" />
              <span>Don't show posts from Community Picks</span>
            </button>
            
            <button className="flex items-center w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Flag className="w-5 h-5 mr-3" />
              <span>Report</span>
            </button>
            
            <button 
              className="w-full p-4 text-center font-medium border bg-gray-300 dark:bg-gray-500 rounded-full"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default BottomSheet;