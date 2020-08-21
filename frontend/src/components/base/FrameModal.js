import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class FrameModal extends Component {
state = {
  modal9: true,
}

render() {    
    return (
    <MDBContainer>
      <MDBModal isOpen={this.state.modal9} toggle={this.props.toggleModal} fullHeight position="top">
        <MDBModalHeader toggle={this.props.toggleModal}>{this.props.obj.title}</MDBModalHeader>
        <MDBModalBody>
          {this.props.obj.description}
          <hr />
          <h4>Technology Stacks</h4>
          <ul class="list-group z-depth-0">
            {  this.props.obj.technology_stacks.split('\n').map(x=>
                <li class="list-group-item justify-content-between">{x}</li>)
            }
           </ul>
        </MDBModalBody>
        <MDBModalFooter>
        {/*<MDBBtn color="secondary" onClick={this.props.toggleModal}>Close</MDBBtn>
        <MDBBtn color="primary">Save changes</MDBBtn> */}
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default FrameModal;