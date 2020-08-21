import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../../assets/base/Lightbox.css";

class ImageGallary extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg'
  ]
}

componentDidMount = () => {
    fetch('http://localhost:8000/project/api/v1/quotes/')
      .then(res => res.json())
      .then(data => {
        let tmpArray = []
        for (var i = 0; i < data.length; i++) {
            if (!data[i].show_as_carousel) tmpArray.push(data[i].image)
        }
        this.setState({images: tmpArray});
      });
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <div className="mt-4" style={{backgroundColor: 'white'}}>
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
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
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
}

export default ImageGallary;