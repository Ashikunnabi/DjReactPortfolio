import React from "react";
import Skill from './Skill';
import '../../../assets/base/style.css';
import { connect } from 'react-redux';
import { fetchSkills } from '../../../redux/home/skill/action'

const Skills = (props) => {
  const { data_skills, get_list_of_skills } = props
  const { skills, error, status } = data_skills


  React.useEffect(() => {
    get_list_of_skills()
  }, []);


  if (status === 'progress') {
    return (
      <div className="Skills__div">
        <h1 className="Skills__h1">SKILLS</h1>
        <img
          src={require('../../../assets/base/loading1.gif')}
          className="img-fluid shadow-box-example z-depth-1"
          alt="loading"
          width="100%"
          style={{ height: '10em' }}
        />
      </div>
    );
  }


  else if (status === 'success') {
    return (
      <div className="Skills__div">
        <h1 className="Skills__h1">SKILLS</h1>
        {skills && skills.map(x => <Skill key={x.id} obj={x} />)}
      </div>
    );
  }


  else if (status === 'failed') {
    return (
      <div className="Skills__div">
        <h1 className="Skills__h1">SKILLS</h1>
        <p className="text-center">Something went wrong!</p>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    data_skills: state.listOfSkillsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_list_of_skills: () => { dispatch(fetchSkills()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);