import { useContext } from 'react';

import { LayoutContext } from '../context/layout';
import NavLinks from './NavLinks';
import IconLinks from './IconLinks';
import LightToggle from './LightToggle';

import './StartBar.css';

export default function StartBar (props) {
  const {isLandscape, isMobile} = useContext(LayoutContext);

  if (isMobile) return null;
  
  const content = (() => {
    if (isLandscape) {
      return (
        <>
        <div className="name-bar">
          <h1>brian hagerty</h1>
          <IconLinks />
        </div>
        <NavLinks />
        </>
      );
    } else {
      return (
        <>
        <h1>{'<bh.dev>'}</h1>
        <NavLinks />
        <LightToggle />
        </>
      );
    }
  })();

  return (
    <div className="startbar">
      {content}
    </div>
  );
};