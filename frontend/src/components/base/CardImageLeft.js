import React from 'react';
import { MDBRow, MDBCol, MDBView, MDBBtn } from 'mdbreact';


const BlogCard = (props) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderBottom: '1px solid lightgray',
      padding: '25px 0px'
    }}>
      <MDBRow>
        <MDBCol md="4" lg="4" className="mb-lg-0 mb-5">
          <MDBView hover rounded className="z-depth-1-half mb-4">
            <img
              className="img-fluid"
              src={props.obj.image}
              // src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
              alt=""
            />
          </MDBView>
        </MDBCol>
        <MDBCol md="8" lg="8" className="mb-lg-0 mb-5">
          <span>{props.obj.published_date}</span>
          <h3><strong>{props.obj.title}</strong></h3>
          <p>{props.obj.description}</p>
          {/* <p>by <strong>Carine Fox</strong>, 19/08/2018</p>             */}
          <MDBBtn
            href={props.obj.url}
            target="_blank"
            color="light-blue">Read</MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default BlogCard;