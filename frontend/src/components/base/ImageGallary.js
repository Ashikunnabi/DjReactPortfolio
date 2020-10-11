import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../../assets/base/Lightbox.css";

class ImageGallary extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w',
  ]
}

componentDidMount = () => {
    fetch('https://ademo.pythonanywhere.com/project/api/v1/quotes/')
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