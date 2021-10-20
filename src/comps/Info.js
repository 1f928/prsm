import React, { useState } from 'react';

import { FaInfoCircle } from 'react-icons/fa'

import './Info.css';

export default function Info (props) {
  const [visibility, setVisibility] = useState(false);
  const changeVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    // <div className={`info ${visibility ? "vis" : ""}`}
    //   onPointerEnter={changeVisibility}
    //   onPointerLeave={changeVisibility}
    //   >
    //   <div className={`info-box ${visibility ? "vis" : ""}`}>
    //     <p>bh.dev v0.0.1</p>
    //     <p>made w/ React</p>
    //     <a className="link" href="https://github.com/1f928/prsm.git">
    //       view source
    //       <FaGithub />
    //     </a>
    //   </div>
    //   <FaInfoCircle />
    // </div>
    <div className={`info-box ${visibility ? ' vis' : ''}`}
      onPointerEnter={changeVisibility}
      onPointerLeave={changeVisibility}>

      <div className="info">
        <p>bh.dev v0.0.1</p>
        <p>made w/ React</p>
        <a className="link" target="blank" href="https://github.com/1f928/prsm.git">
          view source
        </a>
      </div>
      <FaInfoCircle />
      
    </div>
  );
};