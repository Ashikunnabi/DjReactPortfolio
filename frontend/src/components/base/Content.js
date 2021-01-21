import React from 'react';
import { MDBRow } from 'mdbreact';

import Card from './portfolio/Card';
import Carousel from './home/Carousel';
import Banner from './home/Banner';
import Pagination from './Pagination';

const Content = () => {
  return (
    <div >
      <Carousel />
    <div className="container-fluid">
      <MDBRow style={{marginTop: '15px', justifyContent: 'center'}}>
        <Banner />
      </MDBRow>
      <MDBRow>
        <Card />      
        <Card />      
        <Card />      
        <Card />      
      </MDBRow>
      <MDBRow>
        <Card />      
        <Card />      
        <Card />      
        <Card />      
      </MDBRow>
      <MDBRow>
        <Card />      
        <Card />      
        <Card />      
        <Card />      
      </MDBRow>      
      <Pagination />      
    </div>
    </div>
  )
}

export default Content;