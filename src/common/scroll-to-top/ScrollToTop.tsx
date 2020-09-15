import { Location } from 'history';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  children?: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState<Location>();

  useEffect(() => {
    if (previousLocation !== location) {
      setPreviousLocation(location);
      window.scrollTo(0, 0);
    }
  }, [previousLocation, location]);

  return <>{children}</>;
};

export default ScrollToTop;
