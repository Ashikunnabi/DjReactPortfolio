import React from "react";
import Skill from './Skill';
import '../../assets/base/style.css';
import { connect } from 'react-redux';
import { fetchSkills } from '../../redux/home/skill/action'

const Skills = (props) => {
  const { skills, get_list_of_skills } = props  

  React.useEffect(() => {
    get_list_of_skills()
  }, []); // <-- Have to pass i

  return (
    <div className="Skills__div">
      <h1 className="Skills__h1">SKILLS</h1>
      {!skills ? console.log(skills) : skills.map(x => <Skill key={x.id} obj={x} />)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    skills: state.listOfSkillsReducer.skills
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_list_of_skills: () => { dispatch(fetchSkills()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);