import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import { CardImageLeft, CardImageRight } from '../base/';

const Blog = () => {
  return (
    <MDBContainer >     
        <MDBRow style={{justifyContent: 'center'}}>  
          <CardImageLeft />   
          <CardImageRight />   
          <CardImageLeft />   
        </MDBRow>   
    </MDBContainer>
  )
}

export default Blog;