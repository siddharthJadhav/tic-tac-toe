import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css'

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <button className="square" onClick={()=> this.clickOnSquare()}>{this.state.value}</button>
    );
  }

  clickOnSquare() {
    this.setState({
      value: 'X'
    });
  }

}

class Board extends Component{
  constructor(props){
    super(props);
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {

    const header= 'Next move is : X';

    return (
      <div className="board-container">
        <div className="bord-header">{header}</div>
          <div className="square-board">
            <div className="bord-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="bord-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="bord-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
        </div>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return(
      <div className="game-container">
        <Board></Board>
      </div>
    );
  }
}

ReactDom.render(<Game />, document.getElementById('root'));