import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MobileContext } from '../util/mobility';

import './NavLinks.css';

export default function NavLinks (props) {
  const isMobile = useContext(MobileContext);

  return (
    <div className="navlinks">
      <Link to="/">home{isMobile ? '' : ' 🛸'}</Link>
      <Link to="/experiments">experiments{isMobile ? '' : ' 🧪'}</Link>
      <Link to="/stats">stats{isMobile ? '' : ' 📃'}</Link>
    </div>
  );
};
