import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

const MessageStatus = ({ status, seenBy, isChannelChat }) => {
  const renderIcon = () => {
    switch (status) {
      case 'sending':
        return (
          <div className="h-3 w-3 rounded-full border-2 border-t-transparent border-blue-500 animate-spin" />
        );
      case 'sent':
        return <Check className="h-3 w-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case 'seen':
        return (
          <div className="flex items-center">
            <CheckCheck className="h-3 w-3 text-blue-500" />
            {isChannelChat && seenBy?.length > 0 && (
              <div className="flex -space-x-1 ml-1">
                {seenBy.slice(0, 3).map((user, index) => (
                  <div
                    key={user.id}
                    className="relative"
                    style={{ zIndex: 3 - index }}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-3 h-3 rounded-full border border-white dark:border-gray-800"
                    />
                  </div>
                ))}
                {seenBy.length > 3 && (
                  <span className="text-xs text-gray-500 ml-2">
                    +{seenBy.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="inline-flex items-center">
      {renderIcon()}
    </div>
  );
};

export default MessageStatus;