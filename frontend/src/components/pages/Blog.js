import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import { CardImageLeft, CardImageRight } from '../base/blog/';
import { connect } from 'react-redux';
import { fetchBlogApiCall } from '../../redux/blog/action'

const Blog = (props) => {
  const { blogs, status } = props.data_blogs
  const { get_blogs } = props

  React.useEffect(get_blogs, []);


  if (status === 'progress') {
    return (
      <MDBContainer >
        <div className="container-fluid">
          <img
            src={require('../../assets/base/loading1.gif')}
            className="img-fluid shadow-box-example z-depth-1"
            alt="loading"
            width="100%"
          />
        </div>
      </MDBContainer>
    )
  }

  if (status === 'success') {
    return (
      <MDBContainer >
        <MDBRow style={{ justifyContent: 'center' }}>

          {
            blogs &&
            blogs.map(
              (x, i) =>
                (i % 2 === 0) ?
                  < CardImageLeft key={x.id} obj={x} /> :
                  < CardImageRight key={x.id} obj={x} />

            )
          }

          {/* <CardImageLeft />   
          <CardImageRight />   
          <CardImageLeft />    */}
        </MDBRow>
      </MDBContainer>
    )
  }

  if (status === 'failed') {
    return (
      <MDBContainer >
        <div className="container-fluid Home__background_image text-center vh-100">
          <p>Something went wrong!</p>
        </div>
      </MDBContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data_blogs: state.blogReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_blogs: () => { dispatch(fetchBlogApiCall()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
