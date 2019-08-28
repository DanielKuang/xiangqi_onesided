import React from 'react';
import '../index.css'
import Square from './square.js';

export default class Board extends React.Component {
    renderSquare(indx, rowIndx, colIndx){
        return (<Square key={`${rowIndx}${colIndx}`} piece={this.props.squares[indx]} onClick = {() => this.props.onClick(indx)}/>);
    }

    render(){
        const board = [];
        for (let rowIndx=0; rowIndx<9; rowIndx++){
            const row = [];
            for (let colIndx=0; colIndx<5; colIndx++){
                row.push(this.renderSquare(rowIndx*9+colIndx, rowIndx, colIndx));
            }
            board.push(<div key={`${rowIndx}`}>{row}</div>)
        }
        return <div>{board}</div>
    }
}