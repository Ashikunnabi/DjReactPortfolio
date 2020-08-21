import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="default-color" className="font-small" style={{marginTop: '20px'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>        
          <MDBCol md="12" className="text-center py-3">
            <a href="https://github.com/Ashikunnabi/" className="px-4 waves-effect waves-light" style={{"fontSize": "25px"}}>
              <MDBIcon fab icon="github" />
            </a>
            <a href="https://www.facebook.com/ashikunnabituhin" className="px-4 waves-effect waves-light" style={{"fontSize": "25px"}}>
              <MDBIcon fab icon="facebook-square" />
            </a>
            <a href="https://twitter.com/AshikunnabiT" className="px-4 waves-effect waves-light" style={{"fontSize": "25px"}}>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/ashikunnabi/" className="px-4 waves-effect waves-light" style={{"fontSize": "25px"}}>
              <MDBIcon fab icon="linkedin" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> Md. Ashikun Nabi </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;