import React from 'react';
import initBoard from '../helpers/initBoard.js';
import Board from './board.js';
import '../index.css'

export default class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            playerTurn: 1,
            winner: 'None',
            status: '',
            squares: initBoard(),
            indxOfSelectedPiece: null,
            blackPieces: 16,
            redPieces: 16
        }
    }
    // squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"};

    clickHandler(i){
        if (this.state.winner !== 'None'){
            this.setState({status:'This round is complete. Please click retry for another round.'});
        }
        else if (indxOfSelectedPiece === null){
            if (this.state.squares[i].player !== playerTurn || this.state.squares[i] === null){
                this.setState({status:'Player ' + this.state.playerTurn + ', please select your pieces.'})
            }
            else {
                squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"};
                nextPlayer = playerTurn === 1 ? 2 : 1;
                this.setState({status:'', indxOfSelectedPiece:i, playerTurn:nextPlayer});
            }
        }
        else {
            squares[i].style = {...squares[i].style, backgroundColor: ''};
            if (!this.checkIfLegal(i)){
                this.setState({status: 'Illegal Move. Please try again.', indxOfSelectedPiece: null})
            }
            else {
                const squares = this.state.squares.slice();
                const numBlackPieces = this.state.blackPieces;
                const numRedPieces = this.state.redPieces;
                const winner = this.checkForWinner();
                const nextPlayer = (this.state.playerTurn === 1 ? 2 : 1);
                if (squares[i]) {
                    if (this.player.turn === 1){
                        numBlackPieces -= 1;
                    } else{
                        numRedPieces -= 1;
                    }
                }
                squares[i] = squares[indxOfSelectedPiece];
                squares[indxOfSelectedPiece] = null;
                this.setState({status:'', winner: winner, playerTurn: nextPlayer, squares: squares, indxOfSelectedPiece:null, blackPieces:numBlackPieces, redPieces:numRedPieces});
            }
        }
    }

    checkIfLegal(i){
        let selectedPiece = this.state.squares[indxOfSelectedPiece];
        if (!(selectedPiece.isMovePossible(indxOfSelectedPiece, i)) || selectedPiece.player === this.state.playerTurn){
            return false;
        }
        let destPiece = this.state.squares[i] ? null : this.state.squares[i];
        if (destPiece !== null){
            if (selectedPiece.rank > destPiece.rank){
                return true;
            }
            return false;
        }
        return true;
    }

    checkForWinner(){
        if (blackPieces === 0){
            return 'Red Player';
        }
        else if (redPieces === 0){
            return 'Black Player';
        }
        return 'None'
    }


    render(){
        return (
            <div>
                <div>
                    <Board squares={this.state.squares} onClick = {(i) => clickHandler(i)} />
                </div>

                <div>
                    <h5>Game Status</h5>
                    <h3>{this.state.status}</h3>
                    <h3>Player Turn</h3>
                    <div className='box'></div>
                    <h3>Winner: {this.state.winner}</h3>
                </div>

            </div>
        );
    }
}