
import { Link } from 'react-router-dom';


import './NavLinks.css';

export default function NavLinks () {

  return (
    <div className="navlinks">
      <Link to="/"><span>home</span><span>🛸</span></Link>
      <Link to="/lab"><span>lab</span><span>🧪</span></Link>
      {/* <Link to="/stats"><span>stats</span><span>📜</span></Link> */}
    </div>
    // 📃📜📈🍜
  );
};
