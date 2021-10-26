
import { Link } from 'react-router-dom';


import './Stats.css';

const mockStats = {
  statGroups: [
    {
      title: "Languages",
      stats: [
        { name: "JavaScript", level: 4 },
        { name: "HTML/CSS", level: 3.5 },
        { name: "Python", level: 3.5 },
        { name: "Java", level: 3 },
        { name: "Bash", level: 2.5 },
        { name: "C++", level: 2 },
        { name: "SQL", level: 2 }
      ]
    },
    {
      title: "Tools and Frameworks",
      stats: [
         { name: "Docker", level: 3.5 },
         { name: "Kubernetes", level: 3.5 },
         { name: "Jenkins", level: 4 },
         { name: "React & Redux", level: 4 }
      ]
    },
    {
      title: "Data Stores",
      stats: [
         { name: "MongoDB", level: 3.5 },
         { name: "MySQL", level: 2 }
      ]
    },
    {
      title: "Systems",
      stats: [
         { name: "Linux", level: 3.5 },
         { name: "Windows", level: 3 },
         { name: "Cloud (AWS, DO)", level: 4 },
         { name: "Android", level: 2 }
      ]
    }
  ]
};

const Stat = ({stat}) => {
  const {name, level} = stat;

  return (
    <div className="sg-stat">
      {name}: {level}
    </div>
  );
};

const StatGroup = ({group}) => {
  const {title, stats} = group;

  return (
    <div className="stat-group">
      <h2 className="sg-title">{title}</h2>
      <div className="stats">
        {stats.map((stat) => <Stat stat={stat} />)}
      </div>
    </div>
  );
};

const Stats =  (props) => {

  return (
    <>
    <div className="stats-intro">
      <p>
        I'm primarily a full-stack web developer, but I dabble in far too much
        for my own good - from 3D graphics to data science, and beyond.
      </p>
      <p className="smol">  
        I also do a lot of non-tech stuff - gardening, food experiments, studies,
        woodworking, etc. - but you can check that out
        at <Link to="/lab">the lab</Link> or start a conversation with me!
      </p>
    </div>
    {mockStats.statGroups.map((statGroup) => <StatGroup group={statGroup} />)}
    </>
  )
};

export default Stats;