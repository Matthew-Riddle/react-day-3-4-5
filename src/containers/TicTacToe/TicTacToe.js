import React, { Component } from 'react'

import Square from '../../components/Square/Square'

class TicTacToe extends Component {
  state = {
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    turn: 'X',
    winner: ''
  }

  determineWinner = (board) => {
    const winCons = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ]

    const winner = winCons.reduce((winner, [[aR, aC], [bR, bC], [cR, cC]]) =>
      board[aR][aC] !== '' && board[aR][aC] === board[bR][bC] && board[bR][bC] === board[cR][cC]
        ? `${board[aR][aC]} Wins!`
        : winner,
        ''
    )

    let boardFull = true
    board.forEach((row, rIdx) =>
      row.forEach((col, cIdx) => {
        if (board[rIdx][cIdx] === '') {
          boardFull = false
        }
      }
    ))

    return winner
      ? winner
      : boardFull
        ? 'tie'
        : ''
  }

  updateBoard = (rIdx, cIdx) => {
    const board = [...this.state.board]
    let turn = this.state.turn
    if (board[rIdx][cIdx] === '' && !this.state.winner) {
      board[rIdx][cIdx] = turn
      turn = turn === 'O' ? 'X' : 'O'
    }
    this.setState((prevState) => ({
      board,
      turn,
      winner: this.determineWinner(board)
    }))
  }

  resetState = () => {
    this.setState({
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turn: 'X',
      winner: ''
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.winner}</h1>
        {this.state.board.map((row, rIdx) =>
          <div key={rIdx}>
            {row.map((column, cIdx) => <Square key={rIdx + cIdx} text={column} clicked={() => this.updateBoard(rIdx, cIdx)} />)}
          </div>
        )}
        {this.state.winner ? <button onClick={this.resetState}>Replay</button> : ''}
      </div>
    )
  }
}

export default TicTacToe
