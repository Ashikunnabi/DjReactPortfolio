import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import { CardImageLeft, CardImageRight } from '../base/';

const Blog = () => {
  const [blogs, setBlogs] = React.useState([]);
  const storeData = [];

  React.useEffect(() => {
    fetch('https://ademo.pythonanywhere.com/project/api/v1/blogs/')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
      });
  }, []); // <-- Have to pass i


  return (
    <MDBContainer >
      <MDBRow style={{ justifyContent: 'center' }}>

        {
          !blogs ?
            console.log(blogs) :
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

export default Blog;
