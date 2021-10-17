import React, { useState } from 'react';

import { FaInfoCircle } from 'react-icons/fa'

export default function Info (props) {
  const [visibility, setVisibility] = useState(false);
  const hover = () => {
    setVisibility(!visibility)
  }

  return (
    <div className="info" onPointerEnter={hover} onPointerLeave={hover}>
      <div className={`info-box ${visibility ? "" : "hidden"}`}>
        <p>bh.dev v0.0.1</p>
        <p>made w/ React</p>
      </div>
      <FaInfoCircle />
    </div>
  );
};