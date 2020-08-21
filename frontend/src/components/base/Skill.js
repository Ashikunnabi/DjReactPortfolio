import React from "react";
import { MDBIcon, MDBBtn } from 'mdbreact';

import '../../assets/base/style.css';

const Skill = (props) => {
  return (
    <MDBBtn color={props.obj.button_color}>
      { props.obj.is_fab_icon ? (
        <MDBIcon fab icon={props.obj.icon} /> 
      ) : (
        <MDBIcon icon={props.obj.icon} /> 
      )}      
      &nbsp; {props.obj.title}
    </MDBBtn>
  );
}

export default Skill;