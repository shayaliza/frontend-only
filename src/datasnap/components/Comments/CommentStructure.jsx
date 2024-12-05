import { ThumbsUp, ThumbsDown, MessageSquare, Award, Share2, MoreHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import RenderComments from './RenderComments';
import { useState, useEffect, useRef } from 'react';
import img2 from "../../assets/rsc/image2.png";

const Commentstructure = ({ author, time, content, upvotes, replies, depth, maxDepth, isAllCollapsed }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const hasReplies = replies && replies.length > 0;
    const replyContainerRef = useRef(null);
    const verticalLineRef = useRef(null);
  
    useEffect(() => {
      setIsCollapsed(depth >= maxDepth || isAllCollapsed);
    }, [depth, maxDepth, isAllCollapsed]);
  
    return (
      <div className="flex space-x-2 mb-4 relative">
        <img src={img2} className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"/>
        {hasReplies && !isCollapsed && (
          <>
            <div ref={verticalLineRef} className="absolute left-2 top-10 bottom-4 w-[1px] bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-white"></div>
            <div 
              className="absolute left-2 w-3 h-3 border-l-[1px] border-b-[1px] border-gray-200 dark:border-gray-600 rounded-bl-lg"
              style={{ 
                top: '6rem', 
                transform: 'translateY(50%)' 
              }}
            ></div>
          </>
        )}
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            {hasReplies && (
              <button 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className=" hover:text-gray-700"
              >
                {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </button>
            )}
            <span className="font-semibold text-sm">{author}</span>
            <span className="text-xs">• {time}</span>
          </div>
          <p className="text-sm mt-1">{content}</p>
          <div className="flex items-center space-x-4 mt-2">
            <button className="flex items-center space-x-1">
              <ThumbsUp size={16} />
              <span className="text-xs">{upvotes}</span>
            </button>
            <button className="flex items-center space-x-1">
              <ThumbsDown size={16} />
            </button>
            <button className="flex items-center space-x-1">
              <MessageSquare size={16} />
              <span className="text-xs">Reply</span>
            </button>
            <button className="flex items-center space-x-1">
              <Share2 size={16} />
              <span className="text-xs">Share</span>
            </button>
            <button>
              <MoreHorizontal size={16} />
            </button>
          </div>
          {hasReplies && !isCollapsed && (
            <div ref={replyContainerRef} className="pl-4 mt-2">
              <RenderComments comments={replies} depth={depth + 1} maxDepth={maxDepth} isAllCollapsed={isAllCollapsed} />
            </div>
          )}
          {hasReplies && isCollapsed && (
            <button 
              onClick={() => setIsCollapsed(false)}
              className="text-sm text-blue-500 mt-2 hover:underline"
            >
              {replies.length} more {replies.length === 1 ? 'reply' : 'replies'}
            </button>
          )}
        </div>
      </div>
    );
  };

  export default Commentstructure;