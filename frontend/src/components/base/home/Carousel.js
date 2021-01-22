import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
  "mdbreact";
import { connect } from 'react-redux'
import { fetchImageApiCall } from '../../../redux/home/carousel/action'
import CarouselImage from './CarouselImage'


const Carousel = (props) => {
  const { data_images, getCarouselImages } = props
  const { images, error, status } = data_images


  React.useEffect(() => {
    getCarouselImages()
  }, []);


  if (status == 'progress') {
    return (
      <img
        src={require('../../../assets/base/loading1.gif')}
        className="img-fluid shadow-box-example z-depth-1"
        alt="loading"
        width="100%"
        style={{ height: '10em' }}
      />
    );
  }


  else if (status == 'success') {
    return (
      <MDBCarousel
        activeItem={1}
        length={images.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          {images && images.map(x => <CarouselImage key={x.id} image={x} />)}
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }


  else if (status == 'failed') {
    return (
      <MDBCarousel
        activeItem={1}
        length={images.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <p className="text-center">Something went wrong!</p>
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data_images: state.carouselImageReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCarouselImages: () => dispatch(fetchImageApiCall())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);