import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { connect } from 'react-redux'
import { fetchImageGalleryApiCall, viewImage, closeImage } from '../../../redux/home/image_gallery/action'
import "../../../assets/base/Lightbox.css";

class ImageGallary extends React.Component {

  componentDidMount = () => {
    this.props.getImages()
  }

  renderImages = () => {
    const { images } = this.props;

    return images.map((imageSrc, i) => {
      return (
        <MDBCol md="4" key={i}>
          <figure>
            <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
              this.props.viewImage({ photoIndex: i, isOpen: true })
            }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen, images, status } = this.props;

    if (status === 'progress') {
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

    if (status === 'success') {
      return (
        <div className="mt-4" style={{ backgroundColor: 'white' }}>
          <div className="mdb-lightbox">
            <MDBRow>
              {this.renderImages()}
            </MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.props.closeImage()}
              onMovePrevRequest={() =>
                this.props.viewImage({ 
                  photoIndex: (photoIndex + images.length - 1) % images.length, 
                  isOpen: true 
                })
              }
              onMoveNextRequest={() =>
                this.props.viewImage({ 
                  photoIndex: (photoIndex + 1) % images.length, 
                  isOpen: true 
                })
              }
            />
          )}
          {/*<MDBCol md="12" className="text-center py-4">
          <MDBBtn outline color="black"><strong>more</strong></MDBBtn>
        </MDBCol>*/}
        </div>
      );
    }

    if (status === 'failed') {
      return (
        <div className="mt-4 text-center" style={{ backgroundColor: 'white', width: '100%' }}>Something went wrong!</div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    photoIndex: state.imageGalleryReducer.photoIndex,
    isOpen: state.imageGalleryReducer.isOpen,
    images: state.imageGalleryReducer.images,
    error: state.imageGalleryReducer.error,
    status: state.imageGalleryReducer.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(fetchImageGalleryApiCall()),
    viewImage: (data) => dispatch(viewImage(data)),
    closeImage: () => dispatch(closeImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallary);