import Settings from './Settings';
import Info from './Info';

import './Rightbar.css';

export default function Rightbar (props) {

  return (
    <div className="rightbar">
      <Settings />
      <Info />
    </div>
  );
};
