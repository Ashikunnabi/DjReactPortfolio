import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
  "mdbreact";

const CarouselImage = ({image}) => {
  return (
    <MDBCarouselItem itemId={ image.id}>
      <MDBView>
        <img
          className="d-block w-100"
          src={image.source}
          alt="First slide"
        />
        {/* <MDBMask overlay="black-light" /> */}
        <MDBMask overlay="" />
      </MDBView>
      {/*<MDBCarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption> */}
    </MDBCarouselItem>
  );
}


export default CarouselImage;