
import NavLinks from './NavLinks';
import Settings from './Settings';

import './Topbar.css';

export default function Topbar(props) {

  return (
    <div className="topbar">
      <NavLinks />
      <Settings />
    </div>
  );
};
