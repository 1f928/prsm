import { useContext } from 'react';

import { LayoutContext } from '../context/layout';
import NavLinks from './NavLinks';
import LightToggle from './LightToggle';
import IconLinks from './IconLinks';

import './EndBar.css';

export default function EndBar (props) {
  const {isLandscape, isMobile} = useContext(LayoutContext);

  const content = (() => {
    if (isMobile) {
      return (
        <>
        <NavLinks />
        <LightToggle />
        </>
      );
    } else {
      if (isLandscape) {
        return (
          <>
          <LightToggle />
          </>
        );
      } else {
        return (
          <>
          <IconLinks />
          <p>made with 💖 by me - <a href="github.com/1f928/prsm" target="_blank">view on github</a></p>
          </>
        );
      }
    }
  })();

  return (
    <div className="endbar">
      {content}
    </div>
  );
};