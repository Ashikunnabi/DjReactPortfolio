import React from 'react';
import { MDBRow } from 'mdbreact';

import { Carousel, Banner, Skills, ImageGallary } from '../base/home';

const Content = () => {
  return (
    <div className="Home__background_image">
      <Carousel />
      <div className="container">
        <MDBRow style={{ marginTop: '15px' }}>
          <Banner />
        </MDBRow>
        <MDBRow id="skills">
          <Skills />
        </MDBRow>
        <MDBRow>
          <ImageGallary />
        </MDBRow>
      </div>
    </div>
  )
}

export default Content;