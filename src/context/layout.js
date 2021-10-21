import React, { useState, useEffect} from 'react';

const useLayoutInfo = () => {

  const getWidth = () => Math.min(window.screen.width, window.innerWidth);
  const getHeight = () => Math.min(window.screen.height, window.innerHeight);

  const [width, setWidth] = useState(getWidth);
  const [height, setHeight] = useState(getHeight);

  useEffect(() => {
    const listenerFn = () => {
      setWidth(getWidth);
      setHeight(getHeight);
    }

    window.addEventListener('resize', listenerFn);
    return () => window.removeEventListener('resize', listenerFn);
  }, []);

  const switchRatio = 5 / 4;
  const maxMobileSize = 460;

  const ratio = width / height;
  console.log(ratio >= switchRatio);
  const isLandscape = ratio >= switchRatio;
  const isMobile = Math.min(width, height) <= maxMobileSize;

  return { isLandscape, isMobile };
}

const defaultLayout = { isLandscape: true, isMobile: false }
const LayoutContext = React.createContext(defaultLayout);

export {
  useLayoutInfo,
  LayoutContext
}
