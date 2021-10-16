import React from 'react';
import { Link } from 'react-router-dom';

import './Experiments.css';
import './Home.css';

const Home = (props) => {

  return (
    <>
    <div className="intro">
      <h1 className="greeting">Howdy 👋</h1>
      <h1 className="introduction">I'm Brian</h1>
      <h2>... paragraph ...</h2>
    </div>
    <ExperimentsBlock />
    <ProficienciesBlock />
    <h1>Interests</h1>
    </>
  )
};

function ExperimentsBlock(props) {

  return (
    <div className="section">
      <h1>Experiments</h1>
      <div className="section-content">
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="experiment-block" />
        <div className="ghost-block" />
      </div>
      <Link to="/experiments"><button>more</button></Link>
    </div>
  );
}

function ProficienciesBlock(props) {
  
  return (
    <div className="section">
      <h1>Proficiencies</h1>
      <div className="section-content">
        <div className="skill-block" />
        <div className="skill-block" />
        <div className="skill-block" />
        <div className="skill-block" />
        <div className="skill-block" />
        <div className="skill-block" />
      </div>
      <Link to="/resume"><button>more</button></Link>
    </div>
  );
}

export default Home;
