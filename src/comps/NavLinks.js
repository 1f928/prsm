import { Link } from 'react-router-dom';

import './NavLinks.css';

export default function NavLinks (props) {

  return (
    <div className="navlinks">
      <Link to="/">home 🛸</Link>
      <Link to="/experiments">experiments 🧪</Link>
      <Link to="/stats">stats 📃</Link>
    </div>
  );
};
