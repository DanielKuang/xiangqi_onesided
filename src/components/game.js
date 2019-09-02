import React from 'react';
import initBoard from '../helpers/initBoard.js';
import Board from './board.js';

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
            redPieces: 16,
        }
    }

    clickHandler(i){
        const {playerTurn, indxOfSelectedPiece, winner, squares} = this.state
        if (winner !== 'None'){
            this.setState({status:'This round is complete. Please click retry for another round.'});
        }
        else if (indxOfSelectedPiece === null){
            if (this.state.squares[i] === null || this.state.squares[i].player !== playerTurn){
                this.setState({status:'Player ' + this.state.playerTurn + ', please select your pieces.'})
            }
            else {
                squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"};
                this.setState({status:'', indxOfSelectedPiece:i});
            }
        }
        else {
            squares[indxOfSelectedPiece].style = {...squares[indxOfSelectedPiece].style, backgroundColor: null};
            if (!this.checkIfLegal(i)){
                this.setState({status: 'Illegal Move. Please try again.', indxOfSelectedPiece: null});
            }
            else {
                const squares = this.state.squares.slice();
                let numBlackPieces = this.state.blackPieces;
                let numRedPieces = this.state.redPieces;
                const nextPlayer = (this.state.playerTurn === 1 ? 2 : 1);
                if (squares[i]) {
                    if (this.state.playerTurn === 1){
                        numBlackPieces -= 1;
                    } else{
                        numRedPieces -= 1;
                    }
                }
                const winner = this.checkForWinner();
                const status = winner !== 'None' ? `Player ${winner} is the winner!` : '';
                squares[i] = squares[indxOfSelectedPiece];
                squares[indxOfSelectedPiece] = null;
                this.setState({status:status, winner: winner, playerTurn: nextPlayer, squares: squares, indxOfSelectedPiece:null, blackPieces:numBlackPieces, redPieces:numRedPieces});
            }
        }
    }

    checkIfLegal = (i) =>{
        const {indxOfSelectedPiece} = this.state
        let selectedPiece = this.state.squares[indxOfSelectedPiece];
        if (!(selectedPiece.isMovePossible(indxOfSelectedPiece, i)) || selectedPiece.player !== this.state.playerTurn){
            return false;
        }
        let destPiece = this.state.squares[i] ? this.state.squares[i] : null;
        if (destPiece !== null){
            if (selectedPiece.player === destPiece.player){
                return false;
            } else if (selectedPiece.rank < destPiece.rank){
                return false;
            }
        }
        return true;
    }

    checkForWinner = () => {
        const {blackPieces, redPieces} = this.state
        if (blackPieces === 0){
            return 'Red Player';
        }
        else if (redPieces === 0){
            return 'Black Player';
        }
        return 'None'
    }

    passHandler = ()=>{
        const {indxOfSelectedPiece, squares} = this.state
        const nextPlayer = (this.state.playerTurn === 1 ? 2 : 1);
        if (indxOfSelectedPiece !== null){
            squares[indxOfSelectedPiece].style = {...squares[indxOfSelectedPiece].style, backgroundColor: null};
        }
        this.setState({playerTurn:nextPlayer, status:'', indxOfSelectedPiece:null});
    }

    render(){
        return (
            <div className="game">
                <div className= "game-board">
                    <Board squares={this.state.squares} onClick = {(i) => this.clickHandler(i)} />
                </div>

                <div className="game-info">
                    <h2>Game Status</h2>
                    <h3 className="game-status">{this.state.status}</h3>
                    <h3>Player Turn</h3>
                    <div id='player-turn-box' style={{ backgroundColor: this.state.playerTurn === 1 ? 'red' : 'black' }}></div>
                    <h3>Winner: {this.state.winner}</h3>
                    <h3>Pass Turn</h3>
                    <button onClick={this.passHandler}>Pass</button>
                </div>

            </div>
        );
    }
}