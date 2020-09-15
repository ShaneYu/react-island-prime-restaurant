import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const getScrollPosition = (): ScrollPosition =>
  window ? { x: window.pageXOffset, y: window.pageYOffset } : { x: 0, y: 0 };

const useScrollPosition = (): ScrollPosition => {
  const [position, setPosition] = useState<ScrollPosition>(getScrollPosition());

  useEffect(() => {
    let animationFrameRequestRunning: number | null = null;

    const handleScrollEvent = () => {
      if (window && animationFrameRequestRunning === null) {
        animationFrameRequestRunning = window.requestAnimationFrame(() => {
          setPosition(getScrollPosition());
          animationFrameRequestRunning = null;
        });
      }
    };

    if (window) {
      window.addEventListener('scroll', handleScrollEvent);

      return () => window.removeEventListener('scroll', handleScrollEvent);
    }

    return undefined;
  }, []);

  return position;
};

export default useScrollPosition;
