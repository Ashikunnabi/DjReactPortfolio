import React, { useState } from 'react';
import '../../../assets/base/js-game/style.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import { Game } from './tic-tac-toe'


const Card = (props) => {
  const [reset, setReset] = useState(0)

  const resetGame = () => {
    setReset(reset + 1)
  }

  const renderScore = (data) => {
    if (data.obj.score) {
      return (
        <>
          <strong>Score: {props.obj.score}</strong>
          <hr></hr>
        </>
      )
    }
    return <></>
  }

  return (
    <MDBCol lg='3' md='4' sm='6' xs='12' style={{ marginTop: '40px' }}>
      <MDBCard narrow>
        <MDBView cascade className='card__view'>
        </MDBView>

        <MDBCardBody>
          <MDBCardTitle className='font-weight-bold pt-3'>
            {props.obj.title}
            <hr></hr>
          </MDBCardTitle>
          {renderScore(props)}
          <Game resetGame={reset} />

        </MDBCardBody>
        <MDBBtn onClick={resetGame}>Reset</MDBBtn>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;