import React, { useMemo } from 'react';

const MessageTimestamp = ({ message, previousMessage }) => {
    const shouldShowTimestamp = useMemo(() => {
        if (!previousMessage) return true;
        try {
            const currentMessageTime = message.timestamp;
            const previousMessageTime = previousMessage.timestamp;
            
            return (
                previousMessage.user !== message.user ||
                (currentMessageTime - previousMessageTime) > 60000
            );
        } catch (error) {
            console.error('Error in shouldShowTimestamp:', error);
            return true;
        }
    }, [message, previousMessage]);

    const formatTimeOnly = (timestamp) => {
        try {
            return new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).format(timestamp);
        } catch (error) {
            console.error('Error formatting time:', error);
            return timestamp;
        }
    };

    const renderTimestamp = useMemo(() => {
        if (!shouldShowTimestamp) return null;

        try {
            const now = Date.now();
            const timestamp = message.timestamp;
            const diffInHours = (now - timestamp) / (1000 * 60 * 60);

            let formattedTime;
            if (diffInHours < 24) {
                formattedTime = formatTimeOnly(timestamp);
            } else if (diffInHours < 48) {
                formattedTime = "Yesterday";
            } else {
                formattedTime = new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }).format(timestamp);
            }

            return (
                <span className="text-xs opacity-70">
                    {formattedTime}
                    {message.edited && " (edited)"}
                </span>
            );
        } catch (error) {
            console.error('Error in renderTimestamp:', error);
            return (
                <span className="text-xs opacity-70">
                    {message.timestamp}
                    {message.edited && " (edited)"}
                </span>
            );
        }
    }, [message, shouldShowTimestamp]);

    return renderTimestamp;
};

export default MessageTimestamp;