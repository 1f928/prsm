import IconLinks from './IconLinks';
import NavLinks from './NavLinks';

import './Leftbar.css';

export default function Leftbar (props) {

  return (
    <div className="leftbar">
      <div className="name-bar">
        <h1>brian hagerty</h1>
        <IconLinks />
      </div>
      <NavLinks />
    </div>
  );
};
