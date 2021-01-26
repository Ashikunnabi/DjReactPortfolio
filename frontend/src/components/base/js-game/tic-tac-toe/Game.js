import React, { Component } from 'react'
import '../../../../assets/base/js-game/tic-tac-toe-style.css';
import Board from './Board'

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board resetGame={this.props.resetGame}/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game