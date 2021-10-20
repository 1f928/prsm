import Settings from './Settings';
import Info from './Info';

import { FaSun } from 'react-icons/fa';

import './Rightbar.css';

export default function Rightbar (props) {

  return (
    <div className="rightbar">
      <Settings />
      <Info />
    </div>
  );
};
