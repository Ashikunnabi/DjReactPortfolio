import React from 'react';
import { MDBRow, MDBCol, MDBView, MDBBtn } from 'mdbreact';


const BlogCard = () => {
    return (
      <div style={{
          backgroundColor: 'white', 
          borderBottom: '1px solid lightgray',
          padding: '25px 0px'}}>
        <MDBRow>
          <MDBCol md="8" lg="8" className="mb-lg-0 mb-5">
            <span>Icont Tool name</span>
            <h3><strong>Full Title of a project</strong></h3>
            <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
            assumenda est, omnis dolor repellendus et aut officiis debitis.Full Title
            of a project
            </p>
            <p>by <strong>Carine Fox</strong>, 19/08/2018</p>            
            <MDBBtn color="light-blue">React</MDBBtn>            
          </MDBCol>
          <MDBCol md="4" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                alt=""
              />
            </MDBView>
          </MDBCol>
        </MDBRow>
      </div>
    )
}

export default BlogCard;