import React, { useState, useEffect} from 'react';

const useMobileCheck = () => {

  const getWidth = () => Math.min(window.screen.width, window.innerWidth);
  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(getWidth));
    return () => window.removeEventListener('resize', () => setWidth(getWidth));
  }, []);

  return width <= 1500;
};

const MobileContext = React.createContext(false);

export {
  useMobileCheck,
  MobileContext
}
