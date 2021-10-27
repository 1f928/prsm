import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaServer,
  FaDatabase,
  FaCode
} from 'react-icons/fa'

import './Home.css';

const Home = (props) => {

  return (
    <>
    <div className="intro">
      <h1 className="greeting">Howdy 👋,</h1>
      <h1 className="introduction">I'm Brian</h1>
      <p>I'm primarily a full-stack web developer, but I dabble in far too much
        for my own good - from computer graphics to data science, and beyond.
      </p>
      <p className="smol">  
        I also do a lot of non-tech stuff - gardening, food experiments, studies,
        woodworking, etc. - but you can check that out
        at <Link to="/lab">the lab</Link> or start a conversation with me!
      </p>
    </div>
    <ExperimentsBlock />
    <ProficienciesBlock />
    </>
  )
};

const experimentShowcase = [
  {
    name: "bh.dev",
    description: "This site! Mainly built in React, but hosted within a K8s cluster along with other projects. View README on GitHub for more info!",
    githubLink: "https://github.com/1f928/prsm",
    liveLink: "https://bh.dev"
  }
];

function Experiment({experiment}) {
  const {
    name,
    description,
    githubLink,
    liveLink
  } = experiment;

  return (
    <div className="experiment-block">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="links">
        {liveLink ? <a href={liveLink} target="_blank" rel="noreferrer">Live</a> : null}
        <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}

function ExperimentsBlock(props) {

  return (
    <div className="section projects">
      <h1>Experiments</h1>
      <p>(under construction)</p>
      <div className="section-content">
        {experimentShowcase.map((e) => <Experiment experiment={e} key={e.name} />)}
      </div>
      <Link to="/lab" className="more">more projects</Link>
    </div>
  );
}

const skillGroups = [
  {
    title: "Web Foundations",
    icon: <FaHtml5 />,
    skills: [
      "HTML", "CSS", "JavaScript", "HTTP(S)"
    ]
  },
  {
    title: "Front-End",
    icon: <FaReact />,
    skills: [
      "React", "Redux"
    ]
  },
  {
    title: "Back-End",
    icon: <FaNodeJs />,
    skills: [
      "NodeJS", "ExpressJS", "Spring"
    ]
  },
  {
    title: "CI/CD",
    icon: <FaDocker />,
    skills: [
      "Docker", "Kubernetes", "Jenkins", "Git", "GitHub Actions", "CertBot"
    ]
  },
  {
    title: "Systems",
    icon: <FaServer />,
    skills: [
      "Linux", "Windows", "Cloud (AWS, DO)", "Android"
    ]
  },
  {
    title: "Data Stores",
    icon: <FaDatabase />,
    skills: [
      "MongoDB", "MySQL"
    ]
  },
  {
    title: "Other Languages",
    icon: <FaCode />,
    skills: [
      "Python", "Java", "Scala", "Groovy", "Bash", "C++"
    ]
  }
];

function SkillGroup({group}) {
  const {title, icon, skills} = group;

  return (
    <div className="skill-block">
      <h2>{title} {icon}</h2>
      <div className="skills">
        {skills.map((skillName) => <span className="skill" key={skillName}>{skillName}</span>)}
      </div>
    </div>
  );
}

function ProficienciesBlock(props) {
  
  return (
    <div className="section tech">
      <h1>Tools</h1>
      <div className="section-content">
        {skillGroups.map((group) => <SkillGroup group={group} key={group.title} />)}
      </div>
      <a href="https://drive.google.com/file/d/1Usp-0cvA8SDB94swLjXDQfOICjBwHZof/view"
         target="_blank"
         rel="noreferrer"
         className="more">
        view resume
      </a>
    </div>
  );
}

export default Home;
