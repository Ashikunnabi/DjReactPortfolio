import React, { Fragment } from 'react';
import { MDBRow, MDBBtn } from 'mdbreact';
import { Card } from '../base/js-game/';
import { connect } from 'react-redux';
import { fetchPortfolioApiCall } from '../../redux/portfolio/action'

const JsGame = (props) => {
  const [seeDetail, setSeeDetail] = React.useState(null);
  const game = {
    title: 'Tic Tac Toe'
  }
    return (
      <Fragment >
        <div className="container-fluid Home__background_image">
          <MDBRow>
          <Card obj={game} />

          </MDBRow>
        </div>
      </Fragment>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(JsGame);