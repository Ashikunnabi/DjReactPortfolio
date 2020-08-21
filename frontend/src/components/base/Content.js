import React from 'react';
import { MDBRow } from 'mdbreact';

import Card from './Card';
import Carousel from './Carousel';
import Banner from './Banner';
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