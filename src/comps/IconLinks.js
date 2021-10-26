import {
  FaGithub,
  FaLinkedin,
  FaEnvelopeSquare
} from 'react-icons/fa';

import './IconLinks.css';

export default function IconLinks (props) {

  return (
    <div className="iconlinks">

      <a href="mailto: contact@bh.dev"
        className="iconlink">

        <FaEnvelopeSquare />
      </a>

      <a target="blank"
        href="https://github.com/1f928"
        rel="noreferrer"
        className="iconlink">

        <FaGithub />
      </a>

      <a target="blank"
        href="https://www.linkedin.com/in/brian-hagerty-777a41156/"
        rel="noreferrer"
        className="iconlink">
          
        <FaLinkedin />
      </a>

    </div>
  );
};