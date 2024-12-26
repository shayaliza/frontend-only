import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Share2, Reply, Forward, Eye, Clock, PinIcon } from "lucide-react";
import ReactionMenu from "./ReactionMenu";
import img1 from "../../../assets/man1.jpg";

const Message = ({
  id,
  message,
  handleToggleReactions,
  messageReactions,
  setMessageReactions,
  setIsShareOpen,
  type,
  handleReplyToMessage,
  isLastMessage,
  isHighlighted,
  isPinHighlighted
}) => {
  const [showReactions, setShowReactions] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [showingTime, setShowingTime] = useState(false);
  const [startX, setStartX] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const messageRef = useRef(null);
  const longPressTimer = useRef(null);
  const animationFrameRef = useRef(null);

  const LONG_PRESS_DURATION = 500;
  const MIN_SWIPE_DISTANCE = 85;
  const MAX_SWIPE_DISTANCE = 120;
  const REPLY_TRIGGER_THRESHOLD = 45;
  const TIME_TRIGGER_THRESHOLD = 45;

  const calculateSwipeDistance = (deltaX) => {
    const absDeltaX = Math.abs(deltaX);
    if (absDeltaX <= MIN_SWIPE_DISTANCE) {
      return deltaX * 0.95;
    } else if (absDeltaX <= (deltaX > 0 ? REPLY_TRIGGER_THRESHOLD : TIME_TRIGGER_THRESHOLD)) {
      const excess = absDeltaX - MIN_SWIPE_DISTANCE;
      return Math.sign(deltaX) * (MIN_SWIPE_DISTANCE + excess * 0.7);
    } else {
      const excess = absDeltaX - (deltaX > 0 ? REPLY_TRIGGER_THRESHOLD : TIME_TRIGGER_THRESHOLD);
      return Math.sign(deltaX) * ((deltaX > 0 ? REPLY_TRIGGER_THRESHOLD : TIME_TRIGGER_THRESHOLD) + excess * 0.3);
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
      setShowingTime(false);
      setSwipeDistance(0);
    }, LONG_PRESS_DURATION);
  };

  const handleTouchMove = (e) => {
    if (showReactions) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const dampedDelta = calculateSwipeDistance(deltaX);
      setSwipeDistance(Math.min(Math.max(dampedDelta, -MAX_SWIPE_DISTANCE), MAX_SWIPE_DISTANCE));

      if (deltaX > 0 && dampedDelta > REPLY_TRIGGER_THRESHOLD && !isReplying) {
        setIsReplying(true);
        setShowingTime(false);
        navigator.vibrate?.(1);
        handleReplyToMessage(message);
      } else if (deltaX < 0 && Math.abs(dampedDelta) > TIME_TRIGGER_THRESHOLD && !showingTime) {
        setShowingTime(true);
        setIsReplying(false);
        navigator.vibrate?.(1);
      }
    });

    if (Math.abs(deltaX) > 5) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);

    if (swipeDistance !== 0) {
      requestAnimationFrame(() => {
        setSwipeDistance(0);
        if (Math.abs(swipeDistance) <= TIME_TRIGGER_THRESHOLD) {
          setShowingTime(false);
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

  const getMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const isOwnMessage = message.sender === "You";

  return (
    <div
      className={`flex flex-col space-y-1 overflow-x-hidden ${
        isOwnMessage && type === "dm" ? "items-end" : "items-start"
      }
      `}
      id={id}
    >
      {type === "channel" && (
        <div className="flex space-x-2 items-center">
          <img src={img1} className="w-8 h-8 rounded-full" alt="Profile" />
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
            {message.sender}
          </span>
        </div>
      )}

      <div className="relative max-w-[85%]">
        {message.replyTo && (
          <div
            className={`rounded-t-lg px-2 py-1 -mb-1 text-sm ${
              isOwnMessage
                ? "bg-green-700 text-white mr-6"
                : "bg-gray-200 dark:bg-gray-700"
            }
            ${type === "channel" ? "ml-10" : ""}`}
          >
            <div className="relative flex items-center space-x-1">
              <div className="w-0.5 h-4 bg-green-400 mr-2" />
              <span className="font-medium">{message.replyTo.sender}</span>
            </div>
            <p className="ml-3 truncate">{message.replyTo.content}</p>
          </div>
        )}

        <div className="w-full flex space-x-2 items-center">
          <div
            ref={messageRef}
            className={`w-full relative p-2 mb-1 rounded-lg ${
              messageReactions[message.id] ? "mb-9" : ""
            } ${message.replyTo ? "rounded-t-none" : ""} 
            ${
              isHighlighted && 'bg-zinc-600/80 text-white dark:bg-yellow-600/80' 
            }
            ${
              isPinHighlighted && 'bg-zinc-600/80 text-white dark:bg-yellow-600/80' 
            }
            ${
              isOwnMessage
                ? "bg-green-600 text-white mr-6 rounded-br-none"
                : "bg-gray-100 dark:bg-gray-700 rounded-bl-none"
            }
            ${type === "channel" ? "ml-10" : ""}
           `}
            style={{
              transform: `translateX(${swipeDistance}px)`,
              willChange: "transform",
              touchAction: "pan-y",
              transition: swipeDistance === 0 ? "transform 0.2s ease-out" : "none",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute left-0 top-1/2 pointer-events-none"
              style={{
                transform: `translate(-${24 + swipeDistance * 0.1}px, -50%)`,
                opacity: Math.min(swipeDistance / REPLY_TRIGGER_THRESHOLD, 1),
                visibility: swipeDistance > 0 ? "visible" : "hidden",
              }}
            >
              <Reply
                className="w-5 h-5 text-gray-500"
                style={{
                  transform: `scale(${Math.min(
                    swipeDistance / REPLY_TRIGGER_THRESHOLD,
                    1
                  )})`,
                  transition: swipeDistance === 0 ? "transform 0.2s ease-out" : "none",
                }}
              />
            </div>
            <div
              className="absolute -right-12 top-1/2 flex space-x-2 items-center pointer-events-none"
              style={{
                transform: `translate(${24 - swipeDistance * 0.1}px, -50%)`,
                opacity: Math.min(Math.abs(swipeDistance) / TIME_TRIGGER_THRESHOLD, 1),
                visibility: swipeDistance < 0 ? "visible" : "hidden",
              }}
            >
              <Clock
                className="w-5 h-5 text-gray-700 dark:text-gray-200"
                style={{
                  transform: `scale(${Math.min(
                    Math.abs(swipeDistance) / TIME_TRIGGER_THRESHOLD,
                    1
                  )})`,
                  transition: swipeDistance === 0 ? "transform 0.2s ease-out" : "none",
                }}
              />
              <span 
                  className="text-xs opacity-60 text-gray-700 dark:text-gray-200"
                  style={{
                    opacity: showingTime ? 1 : 0,
                    transition: "opacity 0.2s ease-out"
                  }}
                >
                  {getMessageTime(message.timestamp)}
                </span>
            </div>

            <div className="w-full relative">
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
              {message.isPinned && (
                  <PinIcon className="w-3 h-3 opacity-90"/>
                )}
                {message.edited && (
                  <p className="text-xs break-words whitespace-pre-wrap opacity-60">
                    edited
                  </p>
                )}
              </div>
            </div>

            {messageReactions[message.id] && (
              <div
                className={`absolute ${
                  message.sender === "You" ? "right-0" : "left-0"
                } flex flex-shrink-0 z-10 bg-gray-50 dark:bg-gray-700 p-1 rounded-full shadow-md`}
                style={{
                  bottom: messageReactions[message.id].length > 0 ? "-30px" : "auto",
                }}
              >
                {messageReactions[message.id].map((reaction, index) => (
                  <span
                    key={index}
                    className="text-lg cursor-pointer hover:scale-125 transition-transform"
                    onClick={() => {
                      setMessageReactions((prev) => {
                        const currentReactions = prev[message.id] || [];
                        const updatedReactions = currentReactions.filter(
                          (r) => r !== reaction
                        );

                        return {
                          ...prev,
                          [message.id]:
                            updatedReactions.length > 0
                              ? updatedReactions
                              : undefined,
                        };
                      });
                    }}
                  >
                    {reaction}
                  </span>
                ))}
              </div>
            )}
            {isOwnMessage && isLastMessage && type === "dm" && (
              <Eye className="absolute -right-5 bottom-0 w-3 h-3 text-black dark:text-white mr-1" />
            )}
          </div>
          {!isOwnMessage && message.imageUrl && (
            <Forward className="w-6 h-6" onClick={() => setIsShareOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;