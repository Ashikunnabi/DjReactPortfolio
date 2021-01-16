import React from 'react';
import '../../assets/base/style.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const Card = (props) => {
  const setSeeProjectDetails = (e) => {
    props.seeProjectDetails(e.target.value);
    props.modal();
  }

  return (
    <MDBCol lg='3' md='4' sm='6' xs='12' style={{ marginTop: '40px' }}>
      <MDBCard narrow style={{ height: '530px' }}>
        <MDBView cascade className='card__view'>
          {props.obj.show_image ? (
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top card__image'
              src={props.obj.image}
              alt='food'
            />
          ) : (
              <div className="card__image embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={props.obj.video} title={props.obj.title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            )}
        </MDBView>

        <MDBCardBody>
          <h5 className='pink-text'>
            {props.obj.is_fab_icon ? (
              <MDBIcon fab icon={props.obj.icon} />
            ) : (
                <MDBIcon icon={props.obj.icon} />
              )}
              &nbsp;{props.obj.technology}
          </h5>

          <MDBCardTitle className='font-weight-bold' style={{ height: '20%' }}>
            {props.obj.title}
          </MDBCardTitle>

          {/* <MDBCardText style={{height: '27%'}}> */}
          <MDBCardText style={{ overflow: 'hidden' }}>
            {props.obj.thirty_words_description} ...
            </MDBCardText>

          <MDBCol md='12' className='d-flex justify-content-center'>
            <MDBBtn value={JSON.stringify(props.obj)} onClick={(e) => setSeeProjectDetails(e)}>See Details</MDBBtn>
          </MDBCol>

          <MDBCol md='12' className='d-flex justify-content-center'>
            {props.obj.show_website ? (
              <MDBBtn outline
                href={props.obj.website}
                target="_blank"
              >
                <MDBIcon size='lg' icon='cloud'></MDBIcon>
              </MDBBtn>
            ) : ''
            }

            {props.obj.show_github ? (
              <MDBBtn outline color="black"
                href={props.obj.github}
                target="_blank"
              >
                <MDBIcon size='lg' fab icon='github'></MDBIcon>
              </MDBBtn>
            ) : ''
            }
          </MDBCol>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;