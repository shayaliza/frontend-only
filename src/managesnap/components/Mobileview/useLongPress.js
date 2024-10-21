import { useRef, useCallback } from 'react';

export const useLongPress = (onLongPress, delay = 500) => {
  const timerRef = useRef(null);

  const start = useCallback((event) => {
    timerRef.current = setTimeout(() => {
      onLongPress(event);
    }, delay);
  }, [onLongPress, delay]);

  const stop = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
    onTouchCancel: stop,
  };
};
