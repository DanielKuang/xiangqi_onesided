import React from 'react';
import Square from './square.js';

export default class Board extends React.Component {
    renderSquare(indx, squareShade){
        return (<Square key={indx} 
        piece={this.props.squares[indx]} 
        onClick = {() => this.props.onClick(indx)}
        style = {this.props.squares[indx] ? this.props.squares[indx].style : null} 
        shade = {squareShade} />);
    }

    render(){
        const board = [];
        for (let rowIndx=0; rowIndx<4; rowIndx++){
            const row = [];
            for (let colIndx=0; colIndx<8; colIndx++){
                row.push(this.renderSquare(rowIndx*8+colIndx, isEven(rowIndx+colIndx) ? 'light-square' : 'dark-square'));
            }
            board.push(<div key={`${rowIndx}`}>{row}</div>)
        }
        return <div>{board}</div>
    }
}

function isEven(num){
    return num%2 === 0;
}