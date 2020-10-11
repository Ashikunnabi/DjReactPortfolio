import React, { Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';

import { Card, FrameModal } from '../base/';

const Portfolio = () => {
  const [projects, setprojects] = React.useState([]);
  const [nextURL, setNextURL] = React.useState(null);
  const [seeDetail, setSeeDetail] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const storeData = [];
  
  React.useEffect(() => {
    fetch('https://ademo.pythonanywhere.com/project/api/v1/projects/')
      .then(res => res.json())
      .then(data => {
        setprojects(data.results);
        setNextURL(data.next);
      });
  }, []); // <-- Have to pass i
  
  const showMore = () => {
    projects.map(x => storeData.push(x));
    fetch(nextURL)
      .then(res => res.json())
      .then(data => {
        data.results.map(x => storeData.push(x));
        setprojects(storeData);
        setNextURL(data.next);
      })
  };
  const seeDetails = (obj) => {
      setSeeDetail(obj);
  }
  const toggle = () => {
      setShowModal(!showModal)
   }
  
  return (
    <Fragment >
      <div className="container-fluid Home__background_image">
        <MDBRow>
          {!projects ? console.log(projects) : projects.map(x => <Card key={x.id} obj={x} seeProjectDetails={seeDetails} modal={toggle}/>)}      
            
        </MDBRow> 
        { !nextURL ? '' : (
            <MDBRow style={{marginTop: '20px', justifyContent: 'center'}}>
                <MDBBtn outline color="black" onClick={showMore}><strong>MORE</strong></MDBBtn> 
            </MDBRow>            
        )
        } 
        { !showModal ? '' : (
            <FrameModal toggleModal={toggle} obj={JSON.parse(seeDetail)} modal={9}/>
          )
        }
      </div>
    </Fragment>
  )
}

export default Portfolio;