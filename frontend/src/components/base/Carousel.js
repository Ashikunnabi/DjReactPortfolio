import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

const Carousel = () => {
  const [images, setImages] = React.useState([]);
  
  React.useEffect(() => {
    fetch('http://localhost:8000/project/api/v1/quotes/')
      .then(res => res.json())
      .then(data => {
        let tmpArray = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].show_as_carousel) tmpArray.push(data[i])
        }
        setImages(tmpArray);
      });
  }, []); // <-- Have to pass i
  
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={images[0] && images[0].image}
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
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={images[1] && images[1].image}
              alt="Second slide"
            />
          {/* <MDBMask overlay="black-strong" /> */}
          <MDBMask overlay="" />
          </MDBView>
          {/*<MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={images[2] && images[2].image}
              alt="Third slide"
            />
          {/* <MDBMask overlay="black-slight" /> */}
          <MDBMask overlay="" />
          </MDBView>
          {/*<MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    // </MDBContainer>
  );
}

export default Carousel;