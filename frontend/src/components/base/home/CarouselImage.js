import React from "react";
import { MDBCarouselItem, MDBView, MDBMask } from
  "mdbreact";

const CarouselImage = ({ itemId, image }) => {
  return (
    <MDBCarouselItem itemId={itemId}>
      <MDBView>
        <img
          className="d-block w-100"
          src={image.source}
          alt="First slide"
          height="600px!important"
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