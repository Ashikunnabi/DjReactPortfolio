import React, { Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { Card, FrameModal } from '../base/portfolio/';
import { connect } from 'react-redux';
import { fetchPortfolioApiCall } from '../../redux/portfolio/action'

const Portfolio = (props) => {
  const { projects, nextURL, status } = props.data_portfolios
  const { get_portfolios } = props
  const [seeDetail, setSeeDetail] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(get_portfolios, [])

  const showMore = () => {
    get_portfolios(nextURL, true)
  }

  const seeDetails = (obj) => {
    setSeeDetail(obj);
  }

  const toggle = () => {
    setShowModal(!showModal)
  }
  
  if (status === 'progress') {
    return (
      <Fragment >
        <div className="container-fluid">
          <img
            src={require('../../assets/base/loading1.gif')}
            className="img-fluid shadow-box-example z-depth-1"
            alt="loading"
            width="100%"
          />
        </div>
      </Fragment>
    )
  }
  if (status === 'success') {
    return (
      <Fragment >
        <div className="container-fluid Home__background_image">
          <MDBRow>
            {projects && projects.map(x => <Card key={x.id} obj={x} seeProjectDetails={seeDetails} modal={toggle} />)}

          </MDBRow>
          {nextURL && (
            <MDBRow style={{ marginTop: '20px', justifyContent: 'center' }}>
              <MDBBtn outline color="black" onClick={showMore}><strong>MORE</strong></MDBBtn>
            </MDBRow>
          )
          }
          {showModal && (
            <FrameModal toggleModal={toggle} obj={JSON.parse(seeDetail)} modal={9} />
          )
          }
        </div>
      </Fragment>
    )
  }
  if (status === 'failed') {
    return (
      <Fragment >
        <div className="container-fluid Home__background_image text-center vh-100">
          <p>Something went wrong!</p>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data_portfolios: state.portfolioReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_portfolios: (url, seeMore) => { dispatch(fetchPortfolioApiCall(url, seeMore)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);