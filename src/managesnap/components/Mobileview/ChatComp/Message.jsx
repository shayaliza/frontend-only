import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Share2 } from 'lucide-react';

const Message = ({ 
  message,
  longPressEvent,
  handleToggleReactions,
  messageReactions,
  setIsShareOpen,
  type,
  handleReplyToMessage
}) => {
  const [showReactions, setShowReactions] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [startX, setStartX] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const messageRef = useRef(null);
  const longPressTimer = useRef(null);
  const animationFrameRef = useRef(null);

  const LONG_PRESS_DURATION = 500;
  const MIN_SWIPE_DISTANCE = 35;
  const MAX_SWIPE_DISTANCE = 100;
  const REPLY_TRIGGER_THRESHOLD = 45;

  const calculateSwipeDistance = (deltaX) => {
    if (deltaX <= MIN_SWIPE_DISTANCE) {
      return deltaX * 0.95;
    } else if (deltaX <= REPLY_TRIGGER_THRESHOLD) {
      const excess = deltaX - MIN_SWIPE_DISTANCE;
      return MIN_SWIPE_DISTANCE + (excess * 0.7);
    } else {
      const excess = deltaX - REPLY_TRIGGER_THRESHOLD;
      return REPLY_TRIGGER_THRESHOLD + (excess * 0.3);
    }
  };

  const handleTouchStart = (e) => {
    if (showReactions) {
      setShowReactions(false);
      return;
    }
    const touch = e.touches[0];
    setStartX(touch.clientX);
    
    longPressTimer.current = setTimeout(() => {
      handleToggleReactions(message);
      setIsReplying(false);
      setSwipeDistance(0);
    }, LONG_PRESS_DURATION);
  };

  const handleTouchMove = (e) => {
    if (showReactions) return;
  
    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
  
    if (message.sender !== "You" && deltaX > 0) {
      const dampedDelta = calculateSwipeDistance(deltaX);
  
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
  
      animationFrameRef.current = requestAnimationFrame(() => {
        setSwipeDistance(Math.min(dampedDelta, MAX_SWIPE_DISTANCE));
  
        if (dampedDelta > REPLY_TRIGGER_THRESHOLD && !isReplying) {
          setIsReplying(true);
          navigator.vibrate?.(1);
          handleReplyToMessage(message); // Trigger the reply action
        }
      });
    }
  
    if (Math.abs(deltaX) > 5) {
      clearTimeout(longPressTimer.current);
    }
  };
  

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);
    
    if (swipeDistance > 0) {
      requestAnimationFrame(() => {
        setSwipeDistance(0);
        if (swipeDistance <= REPLY_TRIGGER_THRESHOLD) {
          setIsReplying(false);
        }
      });
    }
  };

  useEffect(() => {
    return () => {
      if (longPressTimer.current) clearTimeout(longPressTimer.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const reactions = messageReactions[message.id] || [];

  const getMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const isOwnMessage = message.sender === "You";

  return (
    <div 
      className={`flex flex-col space-y-1 mb-4 ${
        isOwnMessage ? 'items-end' : 'items-start'
      }`}
    >
      {!isOwnMessage && type === 'channel' && (
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
          {message.sender}
        </span>
      )}
      
      <div className="relative max-w-[85%]">
        {message.replyTo && (
          <div 
            className={`rounded-t-lg px-4 py-1 -mb-1 text-sm ${
              isOwnMessage 
                ? 'bg-green-700 text-white' 
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            <div className="flex items-center space-x-1">
              <div className="w-0.5 h-4 bg-green-400 mr-2" />
              <span className="font-medium">{message.replyTo.sender}</span>
            </div>
            <p className="ml-3 truncate">{message.replyTo.content}</p>
          </div>
        )}

        <div
          ref={messageRef}
          className={`relative p-3 rounded-lg ${
            message.replyTo ? 'rounded-t-none' : ''
          } ${
            isOwnMessage
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700'
          }`}
          style={{
            transform: `translateX(${swipeDistance}px)`,
            willChange: "transform",
            touchAction: "pan-y",
            transition: swipeDistance === 0 ? "transform 0.2s ease-out" : "none"
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Reply indicator */}
          <div 
            className="absolute left-0 top-1/2 pointer-events-none"
            style={{
              transform: `translate(-${24 + (swipeDistance * 0.1)}px, -50%)`,
              opacity: Math.min(swipeDistance / REPLY_TRIGGER_THRESHOLD, 1),
              visibility: swipeDistance > 0 ? "visible" : "hidden",
            }}
          >
            <MessageSquare 
              className="w-5 h-5 text-green-600"
              style={{
                transform: `scale(${Math.min(swipeDistance / REPLY_TRIGGER_THRESHOLD, 1)})`,
                transition: swipeDistance === 0 ? "transform 0.2s ease-out" : "none"
              }}
            />
          </div>

          <div className="relative">
            <p className="mb-1 break-words whitespace-pre-wrap">
              {message.content}
            </p>
            
            {message.imageUrl && (
              <img 
                src={message.imageUrl}
                alt="Message attachment"
                className="max-w-full rounded-lg mt-2"
                loading="lazy"
              />
            )}

            {message.url && (
              <a 
                href={message.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                {message.url}
              </a>
            )}

            <div className="flex items-center justify-end space-x-1 mt-1">
              <span className="text-xs opacity-60">
                {getMessageTime(message.timestamp)}
              </span>
              {isOwnMessage && (
                <span className="text-xs opacity-60">✓✓</span>
              )}
            </div>
          </div>

          {reactions.length > 0 && (
            <div className="absolute bottom-0 right-0 transform translate-y-1/2 flex -space-x-1 bg-white dark:bg-gray-800 rounded-full shadow px-2 py-1">
              {reactions.map((reaction, index) => (
                <span
                  key={index}
                  className="text-sm"
                >
                  {reaction}
                </span>
              ))}
              <span className="text-xs ml-1 text-gray-500">
                {reactions.length}
              </span>
            </div>
          )}
        </div>

        <button
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setIsShareOpen(true)}
        >
          <Share2 className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Message;