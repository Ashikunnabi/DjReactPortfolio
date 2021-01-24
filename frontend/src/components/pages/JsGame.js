import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';

import { CardImageLeft, CardImageRight } from '../base/blog';

const JsGame = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/project/api/v1/blogs/')
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

export default JsGame;
