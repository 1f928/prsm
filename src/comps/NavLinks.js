
import { Link } from 'react-router-dom';


import './NavLinks.css';

export default function NavLinks () {

  return (
    <div className="navlinks">
      <Link to="/"><span>home</span><span>๐ธ</span></Link>
      <Link to="/lab"><span>lab</span><span>๐งช</span></Link>
      {/* <Link to="/stats"><span>stats</span><span>๐</span></Link> */}
    </div>
    // ๐๐๐๐
  );
};
