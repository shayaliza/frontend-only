import { useRef , useState} from 'react';

export const useLongPress = (callback, ms) => {
    const [touchStartX, setTouchStartX] = useState(null);
      const [touchCurrentX, setTouchCurrentX] = useState(null);
  const timerRef = useRef(null);

  const start = (message, touchStartX) => {
    timerRef.current = setTimeout(() => {
      if (Math.abs(touchStartX - touchCurrentX) < 10) {
        callback(message);
      }
    }, ms);
  };

  const clear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;  
    }
  };

  return {
    onMouseDown: (message) => start(message),
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchStart: (message, touchStartX) => start(message, touchStartX),
    onTouchEnd: clear,
  };
};