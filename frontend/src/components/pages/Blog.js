import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import { CardImageLeft, CardImageRight } from '../base/blog/';
import { connect } from 'react-redux';
import { fetchBlogApiCall } from '../../redux/blog/action'

const Blog = (props) => {
  const { blogs } = props.data_blogs
  const { get_blogs } = props

  React.useEffect(get_blogs, []);


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
