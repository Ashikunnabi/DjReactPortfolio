import React from "react";
import Skill from './Skill';

import '../../assets/base/style.css';

const Skills = () => {
  const [skills, setskills] = React.useState([]);
  
  React.useEffect(() => {
    fetch('http://localhost:8000/project/api/v1/skills/')
      .then(res => res.json())
      .then(data => {
        let tmpArray = []
        for (var i = 0; i < data.length; i++) {
            tmpArray.push(data[i])
        }
        setskills(tmpArray);
      });
  }, []); // <-- Have to pass i
  
  return (
      <div className="Skills__div">
        <h1 className="Skills__h1">SKILLS</h1>
        {!skills ? console.log(skills) : skills.map(x => <Skill key={x.id} obj={x} />)}        
      </div>
  );
}

export default Skills;