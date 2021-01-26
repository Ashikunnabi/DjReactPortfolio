import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      countResetBoard: 0,
    }
  }

  componentDidUpdate(prevState) {
    if (this.props.resetGame != this.state.countResetBoard) {
      this.resetBoard()
    }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  resetBoard() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      countResetBoard: this.props.resetGame,
    })
  }

  renderSquare(i) {
    let bgColor = this.getRandomColor()
    if (this.state.squares.includes('X') || this.state.squares.includes('O')) {
      bgColor = ''
    }

    return (
      <Square
        value={this.state.squares[i]}
        bgColor={bgColor}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="status text-center">{status}</div>
      </div>
    );
  }
}

export default Board