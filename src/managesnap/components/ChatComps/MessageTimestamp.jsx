import React from "react";

function formatMessageTime(timestamp) {
    const messageDate = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - messageDate) / (1000 * 60 * 60);
  
    if (diffInHours < 24) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString([], { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }

  export default function MessageTimestamp({ timestamp, edited }) {
    const formattedTime = formatMessageTime(timestamp);
    return (
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {formattedTime}{edited && " (edited)"}
      </span>
    );
  }