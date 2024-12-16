export const formatTimestamp = (timestamp, options = {}) => {
    const now = Date.now();
    const diffInHours = (now - timestamp) / (1000 );

    try {
        if (diffInHours < 60) {
            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                ...options,
            }).format(timestamp);
        } else if (diffInHours < 120) {
            return "Yesterday";
        } else {
            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                ...options,
            }).format(timestamp);
        }
    } catch (error) {
        console.error('Error formatting timestamp:', error);
        return timestamp; 
    }
};
